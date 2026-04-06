/// <reference types="vite/client" />

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.yaml" {
  const content: unknown;
  export default content;
}

declare module "*.yml" {
  const content: unknown;
  export default content;
}

declare module "react-headroom" {
  import { ComponentType } from "react";
  const Headroom: ComponentType<{ children: React.ReactNode }>;
  export default Headroom;
}

declare module "react-flip-move" {
  import { ComponentType, ReactNode } from "react";
  interface FlipMoveProps {
    children: ReactNode;
    duration?: number;
    staggerDelayBy?: number;
    enterAnimation?: {
      from?: Record<string, unknown>;
      to?: Record<string, unknown>;
    };
    leaveAnimation?: {
      from?: Record<string, unknown>;
      to?: Record<string, unknown>;
    };
  }
  const FlipMove: ComponentType<FlipMoveProps>;
  export default FlipMove;
}

declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}
