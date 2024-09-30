import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const stackNavigation = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <View
            style={{
              paddingLeft: 45,
            }}
          >
            <Image
              style={{
                height: 361,
                width: 301,
              }}
              source={require("./assets/vs_blue.png")}
            />
          </View>
        </View>
        <View
          style={{
            marginLeft: 45,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              lineHeight: 17.58,
              fontWeight: 400,
            }}
          >
            Điện thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 30,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
              width: 170,
              paddingLeft: 45,
            }}
          >
            <View
              style={{
                height: 25,
                width: 25,
              }}
            >
              <Image style={{}} source={require("./assets/star.png")} />
            </View>
            <View
              style={{
                height: 25,
                width: 25,
              }}
            >
              <Image style={{}} source={require("./assets/star.png")} />
            </View>
            <View
              style={{
                height: 25,
                width: 25,
              }}
            >
              <Image style={{}} source={require("./assets/star.png")} />
            </View>
            <View
              style={{
                height: 25,
                width: 25,
              }}
            >
              <Image style={{}} source={require("./assets/star.png")} />
            </View>
            <View
              style={{
                height: 25,
                width: 25,
              }}
            >
              <Image style={{}} source={require("./assets/star.png")} />
            </View>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={{ fontSize: 15, fontWeight: 400 }}>
                (Xem 828 đánh giá)
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 45,
            alignItems: "center",
            gap: 60,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#00000",
              }}
            >
              1.790.000 đ
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                textDecorationLine: "line-through",
                color: "#B0B0B0",
              }}
            >
              1.790.000 đ
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            marginLeft: 45,
            gap: 10,
          }}
        >
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 13,
                color: "#FF0000",
                fontWeight: 700,
              }}
            >
              Ở ĐÂU RẺ HƠN HOÀN TIỀN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 20,
              width: 20,
              borderRadius: 10,
              borderColor: "#000000",
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>?</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 40,
              width: 332,
              borderColor: "#000000",
              borderWidth: 1,
              borderRadius: 10,
              marginLeft: 45,
              marginTop: 10,
              paddingLeft: 100,
              gap: 80,
            }}
            onPress={() => navigation.navigate("ChooseColorPhone")}
          >
            <Text>4 MÀU-CHỌN MÀU</Text>
            <Image source={require("./assets/Vector.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{
          height: 40,
          width: 332,
          backgroundColor: "#FF0000",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 45,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#F9F2F2",
            fontWeight: 700,
          }}
        >
          CHỌN MUA
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function ChooseColor({ navigation }) {
  return (
    <View
      style={{
        width: "100%",
        flex: 1,
        gap: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 10,
        }}
      >
        <View>
          <Image
            source={require("./assets/vs_blue.png")}
            style={{
              height: 132,
              width: 112,
            }}
          />
        </View>
        <View
          style={{
            width: 250,
            marginTop: 10,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 400,
              }}
            >
              Điện thoại Vsmart Joy 3
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 400,
              }}
            >
              Hàng chính hãng
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          backgroundColor: "#C4C4C4",
          flex: 1,
        }}
      >
        <View>
          <View>
            <Text
              style={{
                marginLeft: 15,
                marginTop: 10,
                marginBottom: 10,
                fontSize: 18,
                fontWeight: 400,
              }}
            >
              Chọn một màu bên dưới:
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              gap: 10,
            }}
          >
            <TouchableOpacity
              style={{
                height: 80,
                width: 85,
                backgroundColor: "#C5F1FB",
              }}
            ></TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 80,
                width: 85,
                backgroundColor: "#F30D0D",
              }}
            ></TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 80,
                width: 85,
                backgroundColor: "#000000",
              }}
            ></TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 80,
                width: 85,
                backgroundColor: "#234896",
              }}
            ></TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#1952E294",
              height: 45,
              width: 326,
              border: 1,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#F9F2F2",
                fontWeight: 700,
              }}
            >
              XONG
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <stackNavigation.Navigator initialRouteName="Home">
        <stackNavigation.Screen name="Home" component={HomeScreen} />
        <stackNavigation.Screen
          name="ChooseColorPhone"
          component={ChooseColor}
        />
      </stackNavigation.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    paddingBottom: 30,
  },
});
