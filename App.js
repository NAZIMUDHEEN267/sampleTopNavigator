import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/Navigators/StackNavigator";
import { TextInput, View } from "react-native"

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App;