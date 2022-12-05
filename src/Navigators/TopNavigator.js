import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/AntDesign"
import Videos from "../Screens/Videos";
import Chapter from "../Screens/Chapter";
import Resources from "../Screens/Resources";
import Qn from "../Screens/Qn";

const Tab = createMaterialTopTabNavigator();

export default function TopTab () {
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabel: {
            
            }
        }}>
            <Tab.Screen name="Videos" component={Videos} options={({ route }) => ({title: route.name})}/>
            <Tab.Screen name="Chapter" component={Chapter} />
            <Tab.Screen name="Resources" component={Resources} />
            <Tab.Screen name="Qn" component={Qn} />
        </Tab.Navigator>
    )
}