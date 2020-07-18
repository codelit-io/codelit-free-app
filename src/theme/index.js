/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName theme  🎠
 *
 * Using MUI theming, this contains objects with styling, crete the theme and return a theme with dark mode in mind
 *
 * USAGE EXAMPLE
 *
 * theme = getTheme( {isDarkMode: true} )
 *
 * @param {boolean} isDarkMode - Toggles dark or light mode palette for MUI
 * @returns {theme} - returns theme objects that is passed to a MUI ThemeProvider
 *
 * @see See [MUI theming](https://material-ui.com/customization/theming/#responsivefontsizes-theme-options-theme)
 * */

import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";

const fontSize = {
  xs: "1rem",
  sm: "1.5rem",
  md: "2rem",
  lg: "3rem",
  xl: "4rem"
};
const fontFamily = {
  MonoSpace: "monospace",
  OpenSans: "Open Sans",
  BreeSerif: "Bree Serif"
};
const shadow = {
  lg:
    "0 24px 24px -18px rgba(69, 104, 129, 0.19), 0 9px 45px 0 rgba(114, 119, 160, 0.06)"
};

const colors = {
  primary: "#3399bb",
  secondary: "#99bb33",
  tertiary: "#424B54",
  grey: {
    superLight: "#eeeeee",
    light: "#a6a6a6",
    medium: "#424B54",
    mediumDark: "#747474",
    dark: "#383c40",
    darkest: "#2b2b2b"
  },
  green: {
    light: "#41D3BD",
    medium: "#99bb33",
    dark: "#157A6E",
    darkest: ""
  },
  yellow: {
    light: "#F5D547",
    dark: "",
    darkest: ""
  },
  white: {
    light: "#FFF",
    medium: "#FFFFF2"
  },
  blue: {
    superLight: "#e0e3ea",
    medium: "#276ef1"
  },
  black: {
    light: "#0c0c0c",
    medium: "#010101",
    dark: "#000"
  }
};

const space = {
  tiny: "0.1rem",
  xs: "0.25rem",
  sm: "0.75rem",
  sm1: "1rem",
  sm2: "1.25rem",
  md: "1.5rem",
  md1: "2rem",
  md2: "2.25rem",
  lg: "3rem",
  xl: "6rem"
};

const card = {
  boxShadow: shadow.lg,
  "&:hover": {
    transform: "translateY(-5px)"
    // backgroundColor: "#FFF"
  },
  "&:hover .desc": {
    color: "white"
  },
  borderRadius: space.sm,
  transition:
    "transform .35s cubic-bezier(.4,0,.2,1),box-shadow .35s cubic-bezier(.4,0,.2,1)",
  transform: "translateY(0)"
  // background: "white"
};

const editorFont = {
  fontFamily: fontFamily.MonoSpace,
  fontSize: "16px",
  color: "rgb(77, 77, 76)"
};

const typography = {
  button: {
    borderRadius: space.sm,
    textTransform: "none"
  },
  fontFamily: fontFamily.BreeSerif
};

const getTheme = ({ isDarkMode }) => {
  let theme;

  const palette = {
    background: {
      default: isDarkMode ? colors.black.medium : colors.white.light,
      paper: isDarkMode ? colors.black.light : colors.white.light
    },
    primary: {
      main: colors.primary
      //TODO: change colors for light/dark
      //light:
      //dark:
    },
    secondary: {
      main: colors.secondary
      //TODO: change colors for light/dark
      // light:
      // dark:
    },
    type: isDarkMode ? "dark" : "light"
  };

  const fontOptions = {
    breakpoints: ["sm", "md", "lg", "xl"]
  };

  theme = createMuiTheme({
    card,
    editorFont,
    shadow,
    fontSize,
    space,
    grey: colors.grey,
    green: colors.green,
    yellow: colors.yellow,
    white: colors.white,
    blue: colors.blue,
    breeSerif: fontFamily.BreeSerif,
    openSans: fontFamily.OpenSans,
    typography,
    palette
  });

  theme = responsiveFontSizes(theme, fontOptions);

  return theme;
};

export default getTheme;
