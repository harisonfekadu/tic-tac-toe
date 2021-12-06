export type ThemeColor = "dark" | "light";
export type ThemeType = {
  themeColor: ThemeColor;
  toggleThemeColor: () => void;
};