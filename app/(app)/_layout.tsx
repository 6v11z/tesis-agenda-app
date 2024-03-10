import { Stack } from "expo-router"
import { createStyleSheet, useStyles } from "react-native-unistyles"

const AppLayout = () => {
  const { styles, theme } = useStyles(stylesheet)

  return (
    <Stack
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: theme.colors.textPrimary,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{ presentation: "modal", title: "Nueva Reserva" }}
      />
    </Stack>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  header: {
    backgroundColor: theme.colors.backgroundPrimary,
  },
}))

export default AppLayout
