import { createContext, useContext } from "react";
import OpenColor from "open-color";

type ColorPalette = string[];

interface ThemeContextType {
  baseColor: ColorPalette;
}

const colors = [
  "red",
  "pink",
  "violet",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "lime",
  "orange",
];

const colorIndex = Math.floor(Math.random() * (colors.length - 1));
const baseColor = OpenColor[
  colors[colorIndex] as keyof typeof OpenColor
] as ColorPalette;

export const defaultTheme: ThemeContextType = { baseColor };

export const ThemeContext = createContext<ThemeContextType>(defaultTheme);

const useTheme = () => {
  return useContext(ThemeContext);
};

export { useTheme };
export type { ThemeContextType };
