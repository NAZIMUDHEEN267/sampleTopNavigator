import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/FontAwesome"
import Videos from "../Screens/Videos";
import Chapter from "../Screens/Chapter";
import Resources from "../Screens/Resources";
import Qn from "../Screens/Qn";

const Tab = createMaterialTopTabNavigator();

export default function TopTab() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarPressColor: "green",
            tabBarLabelStyle: { fontSize: 12 },
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "#555",
            tabBarIndicatorStyle: {
                backgroundColor: "red"
            },
            tabBarLabelStyle: {
                textTransform: 'none'
            }
        }}>
            <Tab.Screen name="Videos" component={Videos} options={{
                tabBarIcon: ({ focused }) => <Icon name="video-camera" color={focused ? "red" : "#555"} size={19}/>
            }}/>
            <Tab.Screen name="Chapter" component={Chapter} options={{
                tabBarIcon: ({ focused }) => <Icon name="book" color={focused ? "red" : "#555"} size={19} />
            }} />
            <Tab.Screen name="Resources" component={Resources} options={{
                tabBarIcon: ({ focused }) => <Icon name="sitemap" color={focused ? "red" : "#555"} size={19} />
            }} />
            <Tab.Screen name="Qn Bank" component={Qn} options={{
                tabBarIcon: ({ focused }) => <Icon name="question-circle" color={focused ? "red" : "#555"} size={19} />
            }} />
        </Tab.Navigator>
    )
}