import { Text, TouchableOpacity, Image, View, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { useState } from 'react';
const stack = createStackNavigator();
function TrangChu({ navigation }) {
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
      }}>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50
      }}>A premium online store for</Text>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
      }}>sporter and their stylish choice</Text>
      <View
        style={{
          width: 359,
          height: 388,
          borderRadius: 50,
          backgroundColor: '#E941411A',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20
        }}>
        <Image source={require('./assets/Xe.png')} />
      </View>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
      }}>POWER BIKE</Text>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
      }}>SHOP</Text>
      <View style={{
        width: '80%',
        height: 50,
        borderRadius: 50,
        backgroundColor: '#E94141',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
      }}>
        <TouchableOpacity onPress={() => navigation.navigate('DanhSachXe')}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white'
          }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function DanhSachXe({ navigation }) {
  return <View></View>;
}
function ChiTiet({ navigation }) {
  return <View></View>;
}
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="TrangChu">
        <stack.Screen
          name="TrangChu"
          component={TrangChu}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="DanhSachXe"
          component={DanhSachXe}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="ChiTiet"
          component={ChiTiet}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
