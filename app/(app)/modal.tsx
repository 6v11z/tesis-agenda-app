import { createStyleSheet, useStyles } from "react-native-unistyles"
import { useEffect, useState } from "react"
import { Platform, Pressable, Text, View } from "react-native"
import { StatusBar } from "expo-status-bar"
import { Picker } from "@react-native-picker/picker"
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker"
import { router } from "expo-router"
import { supabase } from "@/uitls/supabase"
import { Database } from "@/types/database.types"

export default function ModalScreen() {
  const { styles, theme } = useStyles(stylesheet)
  const [selectedEmployee, setSelectedEmployee] = useState(null)
  const [employees, setEmployees] = useState<
    Database["public"]["Tables"]["employees"]["Row"][]
  >([])
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const startDateString = startDate.toLocaleDateString()
  const startTimeString = startDate.toLocaleTimeString()
  const endDateString = endDate.toLocaleDateString()
  const endTimeString = endDate.toLocaleTimeString()

  useEffect(() => {
    fetchCountries()
  }, [])

  const fetchCountries = async () => {
    const { data, error } = await supabase.from("employees").select()

    if (error) {
      console.log(error)
    } else {
      setEmployees(data)
    }
  }

  const showStartDatePicker = () => {
    DateTimePickerAndroid.open({
      value: startDate,
      onChange: onStartDateChange,
      mode: "date",
      is24Hour: true,
    })
  }

  const showStartTimePicker = () => {
    DateTimePickerAndroid.open({
      value: startDate,
      onChange: onStartDateChange,
      mode: "time",
      is24Hour: true,
    })
  }

  const showEndDatePicker = () => {
    DateTimePickerAndroid.open({
      value: endDate,
      onChange: onEndDateChange,
      mode: "date",
      is24Hour: true,
    })
  }

  const showEndTimePicker = () => {
    DateTimePickerAndroid.open({
      value: endDate,
      onChange: onEndDateChange,
      mode: "time",
      is24Hour: true,
    })
  }

  const onStartDateChange = (event: DateTimePickerEvent, selectedDate: any) => {
    const currentDate = selectedDate
    setStartDate(currentDate)
    setEndDate(currentDate)
  }

  const onEndDateChange = (event: DateTimePickerEvent, selectedDate: any) => {
    const currentDate = selectedDate
    setEndDate(currentDate)
  }

  return (
    <View style={theme.components.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Empleado</Text>
        <Picker
          selectedValue={selectedEmployee}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedEmployee(itemValue)
          }
          mode="dropdown"
          dropdownIconColor={theme.colors.textPrimary}
          style={styles.picker}
        >
          {employees.map((employee) => (
            <Picker.Item
              key={employee.id}
              label={employee.name}
              value={employee.id}
              style={styles.pickerItem}
            />
          ))}
        </Picker>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Fecha y Hora</Text>
        <View style={styles.dateContainer}>
          <View style={styles.dateInput}>
            <Text style={theme.components.textPrimary}>Fecha</Text>
            <Pressable style={styles.datePicker} onPress={showStartDatePicker}>
              <Text style={theme.components.textPrimary}>
                {startDateString}
              </Text>
            </Pressable>
          </View>
          <View style={styles.dateInput}>
            <Text style={theme.components.textPrimary}>Hora Inicio</Text>
            <Pressable style={styles.datePicker} onPress={showStartTimePicker}>
              <Text style={theme.components.textPrimary}>
                {startTimeString}
              </Text>
            </Pressable>
          </View>
          <View style={styles.dateInput}>
            <Text style={theme.components.textPrimary}>Hora Termino</Text>
            <Pressable style={styles.datePicker} onPress={showEndTimePicker}>
              <Text style={theme.components.textPrimary}>{endTimeString}</Text>
            </Pressable>
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
  },
  picker: {
    backgroundColor: theme.colors.backgroundSecondary,
    color: theme.colors.textPrimary,
  },
  pickerItem: {
    backgroundColor: theme.colors.backgroundSecondary,
    color: theme.colors.textPrimary,
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
  },
}))
