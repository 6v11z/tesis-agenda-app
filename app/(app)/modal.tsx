import { Platform } from "react-native"
import ModalIosScreen from "./ios/modal-ios"
import ModalAndroidScreen from "./android/modal-android"

const ModalScreen = Platform.select({
  ios: ModalIosScreen,
  android: ModalAndroidScreen,
})

export default ModalScreen
