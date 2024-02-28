const lightColors = {
  backgroundPrimary: "#ffffff",
  backgroundSecondary: "#f6f6f6",
  textPrimary: "#000000",
  textSecondady: "#4a4a4a",
  textTertiary: "#868686",
  border: "#0000001f",
} as const

const darkColors = {
  backgroundPrimary: "#161616",
  backgroundSecondary: "#1c1c1c",
  textPrimary: "#f6f6f6",
  textSecondady: "#d6d6d6",
  textTertiary: "#868686",
  border: "#ffffff1f",
} as const

export const lightTheme = {
  colors: {
    ...lightColors,
  },
  components: {
    container: {
      flex: 1,
      backgroundColor: lightColors.backgroundPrimary,
      padding: 10,
      gap: 10,
    },
    button: {
      danger: {
        backgroundColor: "#e5484d",
        borderRadius: 5,
        padding: 10,
      },
    },
    textPrimary: {
      color: lightColors.textPrimary,
    },
    textSecondary: {
      color: lightColors.textSecondady,
    },
    textTertiary: {
      color: lightColors.textTertiary,
    },
  },
  radius: {
    sm: 5,
    md: 10,
    lg: 15,
    xl: 20,
  },
} as const

export const darkTheme = {
  colors: {
    ...darkColors,
  },
  components: {
    container: {
      flex: 1,
      backgroundColor: darkColors.backgroundPrimary,
      padding: 10,
      gap: 10,
    },
    button: {
      danger: {
        backgroundColor: "#e5484d",
        borderRadius: 5,
        padding: 10,
      },
    },
    textPrimary: {
      color: darkColors.textPrimary,
    },
    textSecondary: {
      color: darkColors.textSecondady,
    },
    textTertiary: {
      color: darkColors.textTertiary,
    },
  },
  radius: {
    sm: 5,
    md: 10,
    lg: 15,
    xl: 20,
  },
} as const
