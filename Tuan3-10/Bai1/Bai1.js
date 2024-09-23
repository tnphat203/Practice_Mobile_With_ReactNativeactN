import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
export default function App() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 20,
            width: "100%",
          }}
        >
          <View
            style={{
              width: 104,
              height: 127,
              marginTop: 14,
              marginLeft: 13,
            }}
          >
            <Image
              source={require("./assets/book.png")}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
            />
          </View>
          <View>
            <View
              style={{
                gap: 9,
                marginTop: 14,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                Nguyên hàm tích phân và ứng dụng
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                Cung cấp bởi Tiki Trading
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#FF0000",
                }}
              >
                141.800 đ
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "#808080",
                  fontWeight: "bold",
                  textDecorationLine: "line-through",
                }}
              >
                141.800 đ
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 8,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 16,
                    width: 16,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#C4C4C4",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                      color: "#808080",
                    }}
                  >
                    -
                  </Text>
                </TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity
                  style={{
                    height: 16,
                    width: 16,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#C4C4C4",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: "#134FEC",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    Mua sau
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginLeft: 13,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            Mã giảm giá đã lưu
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                color: "#134FEC",
              }}
            >
              Xem tại đây
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <TouchableOpacity style = {{
              width: 208,
              height: 45,
              borderRadius: 5,
              borderColor: "#808080",
              borderWidth: 1,
              marginLeft: 13,
              marginTop: 30
            }}>
              <View></View>
              <Text></Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text></Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
