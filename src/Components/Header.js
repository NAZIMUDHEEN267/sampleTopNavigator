import { View, TextInput, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/AntDesign";

const Header = () => {
  return (
    <View style={styles.header}>
        <TouchableOpacity activeOpacity={.7} style={styles.search_btn}>
            <Icon name="search1" size={23}/>
        </TouchableOpacity>
        <TextInput placeholder="Search for a service" style={styles.input}/>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        margin: 8,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#999",
        flexDirection: "row",
        alignItems: "center",
    },
    search_btn: {
        padding: 18,
        borderRightColor: "#999",
        borderRightWidth: 1
    },
    input: {
        padding: 12,
        fontSize: 18,
        fontWeight: "500"
    }
})