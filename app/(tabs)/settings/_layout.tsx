import { Stack } from "expo-router"

const SettingsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Ajustes" }} />
      <Stack.Screen name="about" options={{ title: "Acerca" }} />
    </Stack>
  )
}

export default SettingsLayout
