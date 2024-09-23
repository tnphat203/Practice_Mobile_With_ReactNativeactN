import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "flex-start",
        }}
      >
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
          >
            <Text>4 MÀU-CHỌN MÀU</Text>
            <Image source={require("./assets/Vector.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
  },
});
