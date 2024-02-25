import { Text, View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

const HomeScreen = () => {
  const { styles, theme } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
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

export default HomeScreen
