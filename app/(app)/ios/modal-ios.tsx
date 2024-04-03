import { createStyleSheet, useStyles } from "react-native-unistyles"
import { useState } from "react"
import { Platform, Pressable, Text, View } from "react-native"
import { StatusBar } from "expo-status-bar"
import { Picker } from "@react-native-picker/picker"
import { router } from "expo-router"
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker"

const SERVICES = [
  {
    id: 1,
    name: "Grabado de Patente",
  },
  {
    id: 2,
    name: "Scanner",
  },
  {
    id: 3,
    name: "Pulido de Focos",
  },
  {
    id: 4,
    name: "Lavado de Auto",
  },
]

const ModalIosScreen = () => {
  const { styles, theme } = useStyles(stylesheet)
  const [selectedService, setSelectedService] = useState(null)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const startDateString = startDate.toLocaleDateString()
  const startTimeString = startDate.toLocaleTimeString()
  const endTimeString = endDate.toLocaleTimeString()

  const onStartDateChange = (event: DateTimePickerEvent, selectedDate: any) => {
    const currentDate = selectedDate
    setStartDate(currentDate)
    setEndDate(currentDate)
  }

  const onEndDateChange = (event: DateTimePickerEvent, selectedDate: any) => {
    const currentDate = selectedDate
    setEndDate(currentDate)
  }

  console.log(selectedService)

  return (
    <View style={theme.components.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Servicio</Text>
        <Picker
          selectedValue={selectedService}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedService(itemValue)
          }
          mode="dropdown"
          dropdownIconColor={theme.colors.textPrimary}
          style={styles.picker}
        >
          {SERVICES.map((service) => (
            <Picker.Item
              key={service.id}
              label={service.name}
              value={service.id}
              color={theme.colors.textPrimary}
            />
          ))}
        </Picker>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Fecha y Hora</Text>
        <View style={styles.dateContainer}>
          <View style={styles.dateInput}>
            <Text style={theme.components.textPrimary}>Fecha</Text>
            <DateTimePicker
              value={startDate}
              mode="date"
              is24Hour={true}
              onChange={onStartDateChange}
            />
          </View>
          <View style={styles.dateInput}>
            <Text style={theme.components.textPrimary}>Hora Inicio</Text>
            <DateTimePicker
              value={startDate}
              mode="time"
              is24Hour={true}
              onChange={onStartDateChange}
            />
          </View>
          <View style={styles.dateInput}>
            <Text style={theme.components.textPrimary}>Hora Termino</Text>
            <DateTimePicker
              value={endDate}
              mode="time"
              is24Hour={true}
              onChange={onEndDateChange}
            />
          </View>
        </View>
      </View>
      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={theme.components.textPrimary}>Crear Reserva</Text>
      </Pressable>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundPrimary,
  },
  section: {
    marginBottom: 20,
    gap: 5,
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  picker: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: theme.colors.backgroundSecondary,
  },
  dateContainer: {
    flexDirection: "row",
    gap: 10,
  },
  dateInput: {
    flex: 1,
    alignItems: "center",
    gap: 5,
  },
  datePicker: {
    backgroundColor: theme.colors.backgroundSecondary,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 5,
    width: "100%",
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
}))

export default ModalIosScreen
