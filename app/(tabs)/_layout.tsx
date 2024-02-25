import { Link, Tabs } from "expo-router"
import { Pressable } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { createStyleSheet, useStyles } from "react-native-unistyles"

const TabsLayout = () => {
  const { styles, theme } = useStyles(stylesheet)

  return (
    <Tabs
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: theme.colors.textPrimary,
        headerShadowVisible: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                <AntDesign name="plus" size={24} style={styles.headerRight} />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{ title: "Ajustes", headerShown: false }}
      />
    </Tabs>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  header: {
    backgroundColor: theme.colors.backgroundPrimary,
  },
  tabBar: {
    backgroundColor: theme.colors.backgroundPrimary,
    borderTopWidth: 0,
  },
  headerRight: {
    marginRight: 15,
    color: theme.colors.textPrimary,
  },
}))

export default TabsLayout
