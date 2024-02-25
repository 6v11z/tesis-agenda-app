import { Pressable, Text, View } from "react-native"
import { Link } from "expo-router"
import { createStyleSheet, useStyles } from "react-native-unistyles"

const SettingsScreen = () => {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Link href="/settings/about" asChild style={styles.groupItem}>
          <Pressable>
            <Text style={styles.text}>Notifications and Sounds</Text>
          </Pressable>
        </Link>
        <Link href="/settings/about" asChild style={styles.groupItem}>
          <Pressable>
            <Text style={styles.text}>Appearance</Text>
          </Pressable>
        </Link>
      </View>
      <View style={styles.group}>
        <Link href="/settings/about" asChild style={styles.groupItem}>
          <Pressable>
            <Text style={styles.text}>About</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundPrimary,
    padding: 10,
    gap: 20,
  },
  group: {
    backgroundColor: theme.colors.backgroundSecondary,
    borderRadius: 10,
  },
  groupItem: {
    padding: 10,
  },
  text: {
    color: theme.colors.textPrimary,
  },
}))

export default SettingsScreen
