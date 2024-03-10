import { Text, View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

const AppearanceScreen = () => {
  const { styles, theme } = useStyles(stylesheet)

  return (
    <View style={theme.components.container}>
      <Text style={styles.text}>Appearance Screen</Text>
    </View>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  text: {
    color: theme.colors.textPrimary,
  },
}))

export default AppearanceScreen
