import { Platform, Text, View } from "react-native"
import { StatusBar } from "expo-status-bar"
import { createStyleSheet, useStyles } from "react-native-unistyles"

export default function ModalScreen() {
  const { styles, theme } = useStyles(stylesheet)

  return (
    <View style={theme.components.container}>
      <View>
        <Text style={styles.text}>Empleado</Text>
      </View>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundPrimary,
  },
  text: {
    color: theme.colors.textPrimary,
  },
}))
