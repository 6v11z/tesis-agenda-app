import { Link, Tabs } from "expo-router"
import { Pressable } from "react-native"
import { AntDesign } from "@expo/vector-icons"

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                <AntDesign name="plus" size={24} style={{ marginRight: 15 }} />
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

export default TabsLayout
