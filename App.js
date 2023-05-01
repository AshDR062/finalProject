import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

import Svg, { Use, Image} from 'react-native-svg';
import FrontPage from './components/FrontPage/FrontPage';
const CardComponent = () => {

}
export default function App() {
  return (
    // <View><Text style={{fontSize:2100}}>Hi</Text></View>
    <SafeAreaView>
      <FrontPage />
    </SafeAreaView>
  );
}
