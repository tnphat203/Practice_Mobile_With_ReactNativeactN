import {
    Text,
    TouchableOpacity,
    Image,
    View,
    TextInput,
    FlatList,
  } from 'react-native';
  import { createStackNavigator } from '@react-navigation/stack';
  import { NavigationContainer, useRoute } from '@react-navigation/native';
  import { useState } from 'react';
  const stack = createStackNavigator();
  var dataXe = [
    {
      id: 1,
      name: 'Pinarello',
      price: 1800,
      description:
        'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
      discount: 15,
      image: require('./assets/Xe.png'),
    },
    {
      id: 2,
      name: 'Pinarello',
      price: 1800,
      description:
        'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
      discount: 15,
      image: require('./assets/Xe.png'),
    },
    {
      id: 3,
      name: 'Pinarello',
      price: 1800,
      description:
        'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
      discount: 15,
      image: require('./assets/Xe.png'),
    },
    {
      id: 4,
      name: 'Pinarello',
      price: 1800,
      description:
        'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
      discount: 15,
      image: require('./assets/Xe.png'),
    },
    {
      id: 5,
      name: 'Pinarello',
      price: 1800,
      description:
        'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
      discount: 15,
      image: require('./assets/Xe.png'),
    },
    {
      id: 6,
      name: 'Pinarello',
      price: 1800,
      description:
        'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
      discount: 15,
      image: require('./assets/Xe.png'),
    },
  ];
  const xeProps = {
    id: Int16Array,
    name: String,
    price: Float32Array,
    description: String,
    discount: Int16Array,
    image: Image,
  };
  const oneXe = ({ item: xeProps }) => {
    return (
      <View
        style={{
          justifyContent: 'center',
          height: 200,
          width: 160,
          alignItems: 'center',
          backgroundColor: '#F7BA8326',
          gap: 5,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('ChiTiet')}>
          <Image
            source={xeProps.image}
            style={{
              height: 120,
              width: 110,
            }}
          />
          <Text
            style={{
              fontSize: 20,
            }}>
            {xeProps.name}
          </Text>
          <Text
            style={{
              fontSize: 20,
            }}>
            {xeProps.price}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  function TrangChu({ navigation }) {
    return (
      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 50,
          }}>
          A premium online store for
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          sporter and their stylish choice
        </Text>
        <View
          style={{
            width: 359,
            height: 388,
            borderRadius: 50,
            backgroundColor: '#E941411A',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Image source={require('./assets/Xe.png')} />
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          POWER BIKE
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          SHOP
        </Text>
        <View
          style={{
            width: '80%',
            height: 50,
            borderRadius: 50,
            backgroundColor: '#E94141',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('DanhSachXe')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  function DanhSachXe({ navigation }) {
    return (
      <View
        style={{
          width: '100%',
          marginLeft: 20,
          marginRight: 20,
        }}>
        <View>
          <Text
            style={{
              color: '#E94141',
              fontSize: 25,
              fontWeight: 700,
            }}>
            The world’s Best Bike
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View>
            <TouchableOpacity
              style={{
                flex: 1,
                height: 70,
                width: 100,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#E9414187',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: '#E94141' }}>All</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{
                flex: 1,
                height: 70,
                width: 100,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#E9414187',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: '#E94141' }}>All</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{
                flex: 1,
                height: 70,
                width: 100,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#E9414187',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: '#E94141' }}>All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={dataXe}
          renderItem={oneXe}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>
    );
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
  