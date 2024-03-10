import { Stack } from "expo-router"
import { createStyleSheet, useStyles } from "react-native-unistyles"

const SettingsLayout = () => {
  const { styles, theme } = useStyles(stylesheet)

  return (
    <Stack
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: theme.colors.textPrimary,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Ajustes" }} />
      <Stack.Screen name="appearance" options={{ title: "Apariencia" }} />
      <Stack.Screen name="about" options={{ title: "Acerca de" }} />
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
}))

export default SettingsLayout
