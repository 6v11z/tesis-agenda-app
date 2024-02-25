import { Pressable, Text, View } from "react-native"
import { Link } from "expo-router"

const SettingsScreen = () => {
  return (
    <View>
      <Link href="/settings/about" asChild>
        <Pressable>
          <Text>About</Text>
        </Pressable>
      </Link>
    </View>
  )
}

export default SettingsScreen
