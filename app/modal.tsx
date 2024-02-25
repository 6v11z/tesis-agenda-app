import { Platform, Text, View } from "react-native"
import { StatusBar } from "expo-status-bar"
import { createStyleSheet, useStyles } from "react-native-unistyles"

export default function ModalScreen() {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Modal</Text>
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
