import { View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"
import ReservationItem from "@/components/reservation-item"

const HomeScreen = () => {
  const { theme } = useStyles(stylesheet)

  return (
    <View style={theme.components.container}>
      <ReservationItem />
      <ReservationItem />
      <ReservationItem />
    </View>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundPrimary,
    padding: 10,
  },
}))

export default HomeScreen
