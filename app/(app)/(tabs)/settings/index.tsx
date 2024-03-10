import { Pressable, Text, View } from "react-native"
import { Link } from "expo-router"
import { createStyleSheet, useStyles } from "react-native-unistyles"
import { useAuth } from "@/provider/AuthProvider"

const SettingsScreen = () => {
  const { styles, theme } = useStyles(stylesheet)
  const { signOut } = useAuth()

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

      <Pressable style={theme.components.button.danger} onPress={signOut}>
        <Text style={{ color: "white" }}>Sign Out</Text>
      </Pressable>
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
