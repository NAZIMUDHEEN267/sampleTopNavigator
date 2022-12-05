import { View, Text } from 'react-native'
import GlobalStyle from './Global.style'

const Resources = () => {
  return (
    <View style={[GlobalStyle.container, { backgroundColor: "red" }]}>
      <Text style={GlobalStyle.text}>Resources</Text>
    </View>
  )
}

export default Resources