import { View, Text } from 'react-native'
import GlobalStyle from './Global.style'

const Qn = () => {
    return (
        <View style={[GlobalStyle.container, { backgroundColor: "blue" }]}>
            <Text style={GlobalStyle.text}>Qn</Text>
        </View>
    )
}

export default Qn