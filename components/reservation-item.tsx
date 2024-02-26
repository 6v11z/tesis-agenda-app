import { Text, View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

const ReservationItem = () => {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reservation N°1</Text>
      <View>
        <Text style={styles.date}>26-02-2024</Text>
      </View>
    </View>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.backgroundSecondary,
    padding: 10,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.sm,
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    color: theme.colors.textTertiary,
  },
}))

export default ReservationItem
