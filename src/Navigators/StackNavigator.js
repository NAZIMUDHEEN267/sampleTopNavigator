import { createStackNavigator } from "@react-navigation/stack";
import TopTab from "./TopNavigator";
import Header from "../Components/Header";

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{header: Header}}>
            <Stack.Screen name="TopTab" component={TopTab} />
        </Stack.Navigator>
    )
}