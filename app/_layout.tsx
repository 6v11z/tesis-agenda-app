import { AuthProvider, useAuth } from "../provider/AuthProvider"
import { Slot, useRouter } from "expo-router"
import { useEffect } from "react"
import "../style/unistyles"

const InitialLayout = () => {
  const { session, initialized } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!initialized) return

    if (session) {
      router.replace("/(tabs)/")
    } else if (!session) {
      router.replace("/(auth)/")
    }
  }, [session, initialized])

  return <Slot />
}

const RootLayout = () => {
  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  )
}

export default RootLayout
