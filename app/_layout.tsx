import { Stack } from "expo-router"

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{ title: "Nueva Reserva", presentation: "modal" }}
      />
    </Stack>
  )
}

export default RootLayout
