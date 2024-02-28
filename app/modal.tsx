import { Platform, Text, View } from "react-native"
import { StatusBar } from "expo-status-bar"
import { createStyleSheet, useStyles } from "react-native-unistyles"
import { Picker } from "@react-native-picker/picker"
import { useState } from "react"

export default function ModalScreen() {
  const { styles, theme } = useStyles(stylesheet)

  const [selectedLanguage, setSelectedLanguage] = useState()

  console.log(selectedLanguage)

  return (
    <View style={theme.components.container}>
      <View>
        <Text style={styles.title}>Empleado</Text>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
          mode="dropdown"
          dropdownIconColor={theme.colors.textPrimary}
          style={styles.picker}
        >
          <Picker.Item label="Java" value="java" style={styles.pickerItem} />
          <Picker.Item
            label="JavaScript"
            value="js"
            style={styles.pickerItem}
          />
        </Picker>
      </View>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundPrimary,
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
}))
