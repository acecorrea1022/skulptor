/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

// constants/Colors.ts

// constants/Colors.ts

// Brand palette
export const Palette = {
  midnight: '#00171f',
  teal: '#004d52',
  plum: '#4a2f4e',
  magenta: '#d81b60',
  sunset: '#f03a47',
};

// Semantic app colors
export const Colors = {
  light: {
    text: '#ECEDEE',
    tint: Palette.magenta,
    icon: '#C8CDD2',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: Palette.magenta,
    border: 'rgba(255,255,255,0.10)',
  },
  dark: {
    text: '#ECEDEE',
    tint: Palette.magenta,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: Palette.magenta,
    border: 'rgba(255,255,255,0.10)',
  },
};

export const getColors = (scheme: 'light' | 'dark' = 'dark') =>
  scheme === 'dark' ? Colors.dark : Colors.light;
