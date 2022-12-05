import { View, Text } from 'react-native'
import GlobalStyle from './Global.style'

const Videos = () => {
  return (
    <View style={[GlobalStyle.container, { backgroundColor: "steelblue" }]}>
      <Text style={GlobalStyle.text}>Videos</Text>
    </View>
  )
}

export default Videos