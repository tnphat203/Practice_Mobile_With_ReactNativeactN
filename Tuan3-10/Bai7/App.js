import { Text, TouchableOpacity, Image, View, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useRoute} from '@react-navigation/native';
import { useState } from 'react';
const stack = createStackNavigator();

var data = [
  {
    id: 1,
    email: 'tnphat203@gmail.com',
  },
  {
    id: 2,
    email: 'tranngocphat@gmail.com',
  },
];
 
function Login({ navigation }) {
  var [value, setValue] = useState('');

  const handleSubmit = () => {
    const user = data.find((item) => {
      return item.email === value;
    });

    if (user != undefined) {
      navigation.navigate('ListNote', { currentEmail: user.email });
    } else {
      alert('Khong ton tai');
    }
  };

  return (
    <View style={{ width: '100%', alignItems: 'center', gap: 50 }}>
      <View>
        <Image source={require('./assets/note.png')} />
      </View>
      <View>
        <Text style={{ fontWeight: 'bold', color: 'purple' }}>
          MANAGE YOUR TASK
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 30,
          width: '80%',
          alignItems: 'center',
          borderWidth: 1,
          borderRadius: 5,
          borderColor: 'grey',
        }}>
        <Image source={require('./assets/mail.png')} />
        <TextInput
          value={value}
          onChangeText={(value) => setValue(value)}
          placeholder="Enter your email"
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            height: 40,
            width: 200,
            backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            GET STARTED ->
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function ListNote({ navigation }) {
    const route = useRoute();
    const {currentEmail} = route.params;
    return <View><Text>{currentEmail}</Text></View>;
  }
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Login">
        <stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="ListNote"
          component={ListNote}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
