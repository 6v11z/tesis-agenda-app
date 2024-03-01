import { Stack } from "expo-router"
import { createStyleSheet, useStyles } from "react-native-unistyles"

const AuthLayout = () => {
  const { styles, theme } = useStyles(stylesheet)

  return (
    <Stack
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: theme.colors.textPrimary,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ title: "" }} />
    </Stack>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  header: {
    backgroundColor: theme.colors.backgroundPrimary,
  },
  tabBar: {
    backgroundColor: theme.colors.backgroundPrimary,
    borderTopWidth: 0,
  },
  headerRight: {
    marginRight: 15,
    color: theme.colors.textPrimary,
  },
}))

export default AuthLayout
