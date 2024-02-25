import { Text, View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

const AboutScreen = () => {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About</Text>
    </View>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundPrimary,
    padding: 10,
  },
  text: {
    color: theme.colors.textPrimary,
  },
}))

export default AboutScreen
