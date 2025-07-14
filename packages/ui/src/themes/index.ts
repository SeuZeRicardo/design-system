import type { LightTheme } from "./light";
import type { DarkTheme } from "./dark";

export { lightTheme } from "./light";
export { darkTheme } from "./dark";
export type { LightTheme } from "./light";
export type { DarkTheme } from "./dark";

// Default theme (light)
export { lightTheme as defaultTheme } from "./light";

// Theme type union
export type Theme = LightTheme | DarkTheme;
