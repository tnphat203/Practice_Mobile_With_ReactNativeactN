import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const stackNavigation = createNativeStackNavigator();
function APIScreen1({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            paddingTop: 82,
          }}
        >
          <Image
            source={require("./assets/Note.png")}
            style={{ width: 271, height: 271 }}
          />
        </View>
        <View
          style={{
            width: 200,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              textAlign: "center",
              fontWeight: "bold",
              color: "#8353E2",
            }}
          >
            MANAGE YOUR TASK
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: 300,
            height: 30,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#9095A0",
            gap: 10,
            paddingLeft: 10,
            marginTop: 50,
          }}
        >
          <Image
            source={require("./assets/Mail.png")}
            style={{ width: 20, height: 20 }}
          />
          <input type="text" placeholder="Enter your email" style={{
            width: "90%",
            height: "90%",
            borderRadius: 12,
            borderLeft: "none",
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }} />
        </View>
      </View>
      <View>
        <TouchableOpacity style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#00BDD6",
          width: 190,
          height: 44,
          borderRadius: 12,
        }} onPress=  {()=> navigation.navigate("APIScreen2")}>
          <Text style = {{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}>GET STARTED &rarr;</Text>
        </TouchableOpacity>
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
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50,
  },
});
