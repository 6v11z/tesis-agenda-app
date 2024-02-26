import { Pressable, Text, View } from "react-native"
import { Link } from "expo-router"
import { createStyleSheet, useStyles } from "react-native-unistyles"

const SettingsScreen = () => {
  const { styles, theme } = useStyles(stylesheet)

  return (
    <View style={theme.components.container}>
      <View style={styles.group}>
        <Link href="/settings/about" asChild style={styles.groupItem}>
          <Pressable>
            <Text style={styles.text}>Notifications and Sounds</Text>
          </Pressable>
        </Link>
        <View style={styles.divider}></View>
        <Link href="/settings/appearance" asChild style={styles.groupItem}>
          <Pressable>
            <Text style={styles.text}>Appearance</Text>
          </Pressable>
        </Link>
      </View>
      <View style={styles.group}>
        <Link href="/settings/about" asChild style={styles.groupItem}>
          <Pressable>
            <Text style={styles.text}>Acerca de</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  group: {
    backgroundColor: theme.colors.backgroundSecondary,
    borderRadius: theme.radius.sm,
  },
  groupItem: {
    padding: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  text: {
    color: theme.colors.textPrimary,
  },
}))

export default SettingsScreen
