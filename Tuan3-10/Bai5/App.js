
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const stackNavigation = createNativeStackNavigator();
function APIScreen1({ navigation }) {
  return (
    <View style={styles.container}>
      <View style = {{
            alignItems: 'center',
      }}>
        <View style = {{
          width: '100%',

          paddingTop: 82,
        }}>
          <Image source={require('./assets/Note.png')} style={{width: 271, height: 271}} />
        </View>
        <View style = {{
          width: 200
        }}>
          <Text style={{
            fontSize: 24,
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#8353E2', 
          }}>MANAGE YOUR TASK</Text>
        </View>
      </View>
      <View>

      </View>
    </View>
  );
}

function APIScreen2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>API Screen 2</Text>
    </View>
  );
}

function APIScreen3({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>API Screen 3</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <stackNavigation.Navigator initialRouteName="APIScreen1">
        <stackNavigation.Screen name="APIScreen1" component={APIScreen1} />
        <stackNavigation.Screen name="APIScreen2" component={APIScreen2} />
        <stackNavigation.Screen name="APIScreen3" component={APIScreen3} />
      </stackNavigation.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
