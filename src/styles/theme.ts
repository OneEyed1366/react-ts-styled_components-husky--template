export const lightTheme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
  },
};

export const blackTheme: typeof lightTheme = {
  colors: {
    white: lightTheme.colors.black,
    black: lightTheme.colors.white,
  },
};
