import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression2";
import fs from "fs";
import yaml from "js-yaml";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "yaml-loader",
      enforce: "pre",
      resolveId(id, importer) {
        if (id.startsWith("content/")) {
          return `virtual:yaml:${id}`;
        }
        // Handle aliased imports from src/content
        if (importer && importer.includes("/src/") && id.startsWith("./")) {
          const resolved = path.resolve(path.dirname(importer), id);
          if (resolved.includes("/content/") && !resolved.includes(".yaml")) {
            const yamlPath = `${resolved}.yaml`;
            if (fs.existsSync(yamlPath)) {
              return `virtual:yaml:${resolved}`;
            }
          }
        }
      },
      load(id) {
        if (id.startsWith("virtual:yaml:")) {
          const yamlId = id.replace("virtual:yaml:", "");
          const yamlPath = path.resolve(__dirname, "src", `${yamlId}.yaml`);
          const content = fs.readFileSync(yamlPath, "utf-8");
          const parsed = yaml.load(content);
          return `export default ${JSON.stringify(parsed)}`;
        }
      },
    },
    compression({
      algorithm: "gzip",
      ext: ".gz",
    }),
  ],
  resolve: {
    alias: {
      hooks: path.resolve(__dirname, "./src/hooks"),
      ui: path.resolve(__dirname, "./src/ui"),
    },
  },
  build: {
    outDir: "dist",
  },
});
