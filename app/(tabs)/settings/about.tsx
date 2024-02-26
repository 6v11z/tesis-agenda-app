import { Text, View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

const AboutScreen = () => {
  const { styles, theme } = useStyles(stylesheet)

  return (
    <View style={theme.components.container}>
      <Text style={styles.text}>About</Text>
    </View>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  text: {
    color: theme.colors.textPrimary,
  },
}))

export default AboutScreen
