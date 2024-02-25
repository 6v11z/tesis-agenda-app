import { Stack } from "expo-router"
import { createStyleSheet, useStyles } from "react-native-unistyles"
import "@/style/unistyles"

const RootLayout = () => {
  const { styles, theme } = useStyles(stylesheet)

  return (
    <Stack
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: theme.colors.textPrimary,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{ title: "Nueva Reserva", presentation: "modal" }}
      />
    </Stack>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  header: {
    backgroundColor: theme.colors.backgroundPrimary,
  },
}))

export default RootLayout
