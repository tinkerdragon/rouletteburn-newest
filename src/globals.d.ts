import type ReactType from "react"

declare global {
  const React: typeof ReactType;

  // We append the missing Bitburner UI properties directly to the global interface
  interface UserInterface {
    closeTail(): void;
    openTail(): void;
    resizeTail(width: number, height: number): void;
    moveTail(x: number, y: number): void;
  }
}

export {}