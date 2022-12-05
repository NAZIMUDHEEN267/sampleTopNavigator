import { View, Text } from 'react-native';
import GlobalStyle from './Global.style';

const Chapter = (props) => {
  return (
    <View style={[GlobalStyle.container, {backgroundColor: "yellow"}]}>
      <Text style={GlobalStyle.text} onPress={() => props.navigation.navigate("Videos", {name: "nazim"})}>Chapter</Text>
    </View>
  )
}

export default Chapter