import { Link } from "expo-router"
import { useState } from "react"
import { Alert, Pressable, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { createStyleSheet, useStyles } from "react-native-unistyles"
import { supabase } from "@/uitls/supabase"
import Spinner from "react-native-loading-spinner-overlay"

const SignInScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const { styles, theme } = useStyles(stylesheet)

  const handleSignIn = async () => {
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  return (
    <SafeAreaView style={theme.components.container}>
      <Spinner visible={loading} />
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.subtitle}>Acceda a su cuenta</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={theme.components.textPrimary}>Correo</Text>
        <TextInput
          placeholder="john@doe.com"
          placeholderTextColor={theme.colors.textTertiary}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.inputField}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={theme.components.textPrimary}>Contraseña</Text>
        <TextInput
          placeholder="••••••••"
          placeholderTextColor={theme.colors.textTertiary}
          secureTextEntry
          style={styles.inputField}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Pressable style={styles.pressable} onPress={handleSignIn}>
        <Text style={styles.text}>Iniciar Sesión</Text>
      </Pressable>

      <View style={styles.registerNow}>
        <Text style={theme.components.textTertiary}>¿No tiene una cuenta?</Text>
        <Link href="/(auth)/sign-up" asChild>
          <Pressable>
            <Text style={styles.highlightedText}>Regístrese ahora</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  title: {
    color: theme.colors.textPrimary,
    fontSize: 24,
  },
  subtitle: {
    color: theme.colors.textSecondady,
    fontSize: 18,
  },
  inputContainer: {
    gap: 5,
    marginBottom: 10,
  },
  inputField: {
    backgroundColor: theme.colors.backgroundSecondary,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 5,
    padding: 10,
    color: theme.colors.textPrimary,
  },
  pressable: {
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
  },
  text: {
    color: "#ffffff",
  },
  registerNow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  highlightedText: {
    color: theme.colors.textPrimary,
    textDecorationLine: "underline",
  },
}))

export default SignInScreen
