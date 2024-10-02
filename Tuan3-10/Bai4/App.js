import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import caNauLau from "./assets/ca_nau_lau.png";
import gaBoToi from "./assets/ga_bo_toi.png";
import doChoiDangMoHinh from "./assets/do_choi_dang_mo_hinh.png";
import lanhDaoGianDon from "./assets/lanh_dao_gian_don.png";
import xaCanCau from "./assets/xa_can_cau.png";
import hieuLongConTre from "./assets/hieu_long_con_tre.png";
const stackNavigation = createNativeStackNavigator();
const Data = [
  {
    id: 1,
    name: "Ca nấu lẩu nấu mì  mini...",
    shop: "Devang",
    image: caNauLau,
  },
  {
    id: 2,
    name: "1KG KHÔ GÀ BƠ TỎI",
    shop: "LTD Food",
    image: gaBoToi,
  },
  {
    id: 3,
    name: "Xe cần cẩu đa năng",
    shop: "Thế giới đồ chơi",
    image: xaCanCau,
  },
  {
    id: 4,
    name: "Đồ chơi dạng mô hình",
    shop: "Thế giới đồ chơi",
    image: doChoiDangMoHinh,
  },
  {
    id: 5,
    name: "Lãnh đạo giản đơn",
    shop: "Minh Long Book",
    image: lanhDaoGianDon,
  },
  {
    id: 6,
    name: "Hiểu lòng con trẻ",
    shop: "Minh Long Book",
    image: hieuLongConTre,
  },
];

const data2 = [
  {
    id: 1,
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    Image: require("./assets/giacchuyen 1.png"),
  },
  {
    id: 2,
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    Image: require("./assets/daynguon 1.png"),
  },
  {
    id: 3,
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    Image: require("./assets/dauchuyendoipsps2 1.png"),
  },
  {
    id: 4,
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    Image: require("./assets/dauchuyendoi 1.png"),
  },
  {
    id: 5,
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    Image: require("./assets/carbusbtops2 1.png"),
  },
  {
    id: 6,
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    Image: require("./assets/daucam 1.png"),
  },
];

const ItemProps2 = { id: Int16Array, name: String, Image: Image };
const Item2 = ({ item: ItemProps2 }) => {
  return (
    <TouchableOpacity>
      <View
      style={{
        width: 170,
        gap: 5,
        margin: 10,
      }}
    >
      <View>
        <Image
          source={ItemProps2.Image}
          style={{ width: "100%", height: 90 }}
        />
      </View>
      <View>
        <View style={{ width: "80%" }}>
          <Text style={{ fontSize: 12 }}>{ItemProps2.name}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Image
            source={require("./assets/Star1.png")}
            style={{ width: 12, height: 12 }}
          />
          <Image
            source={require("./assets/Star1.png")}
            style={{ width: 12, height: 12 }}
          />
          <Image
            source={require("./assets/Star1.png")}
            style={{ width: 12, height: 12 }}
          />
          <Image
            source={require("./assets/Star1.png")}
            style={{ width: 12, height: 12 }}
          />
          <Image
            source={require("./assets/Star5.png")}
            style={{ width: 12, height: 12 }}
          />
          <Text style={{ fontSize: 12 }}>(15)</Text>
        </View>
        <View style={{
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
        }}>
          <Text style={{ fontSize: 12, fontWeight:"bold" }}>69.900 đ</Text>
          <Text style={{ 
            fontSize: 12,
            color: "#969DAA",
          }}>-39%</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const ItemProps = { id: Int16Array, name: String, shop: String, image: Image };
const Item = ({ item: ItemProps }) => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        flexDirection: "row",
        height: 80,
        borderBottomWidth: 0.5,
        borderBottomColor: "gray",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 30,
      }}
    >
      <View
        style={{
          flex: 1,
          width: "100%",
          flexDirection: "row",
          height: 80,
          alignItems: "center",
        }}
      >
        <View>
          <Image source={ItemProps.image} style={{ width: 72, height: 72 }} />
        </View>
        <View
          style={{
            paddingLeft: 10,
            gap: 5,
            alignSelf: "flex-start",
          }}
        >
          <Text>{ItemProps.name}</Text>
          <Text>Shop {ItemProps.shop}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          height: 38,
          width: 88,
          backgroundColor: "#F31111",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          Chat
        </Text>
      </TouchableOpacity>
    </View>
  );
};

function ListProduct({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "#1BA9FF",
            height: 42,
            width: "100%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("SearchProduct")}
          >
            <Image
              source={require("./assets/Vector-Back.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 17, color: "white" }}>Chat</Text>
          </View>
          <TouchableOpacity>
            <Image
              source={require("./assets/bi_cart-check.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            borderBottomWidth: 0.5,
            paddingBottom: 20,
            borderBottomColor: "gray",
          }}
        >
          <View
            style={{
              width: "90%",
              paddingTop: 20,
              paddingLeft: 30,
            }}
          >
            <Text>
              Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chát với shop
            </Text>
          </View>
        </View>
        <FlatList
          data={Data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#1BA9FF",
          height: 49,
          width: "100%",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("./assets/Menu.png")}
            style={{ width: 23, height: 19 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("./assets/Home.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("./assets/back.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
function SearchProduct() {
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "#1BA9FF",
            height: 42,
            width: "100%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity

          >
            <Image
              source={require("./assets/Vector-Back.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
          <View
            style={{
              height: 30,
              width: 192,
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 10,
            }}
          >
            <Image
              source={require("./assets/search.png")}
              style={{ width: 24, height: 24 }}
            />
            <TextInput
              placeholder="Dây cáp usb"
              style={{ width: "100%", height: "100%", paddingLeft: 10 }}
            />
          </View>
          <TouchableOpacity>
            <Image
              source={require("./assets/bi_cart-check.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                gap: 2,
              }}
            >
              <Image
                source={require("./assets/option.png")}
                style={{ width: 4, height: 4 }}
              />
              <Image
                source={require("./assets/option.png")}
                style={{ width: 4, height: 4 }}
              />
              <Image
                source={require("./assets/option.png")}
                style={{ width: 4, height: 4 }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style = {{
          alignItems: "center",
        }}>
          <FlatList
            data={data2}
            renderItem={({ item }) => <Item2 item={item} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#1BA9FF",
          height: 49,
          width: "100%",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("./assets/Menu.png")}
            style={{ width: 23, height: 19 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("./assets/Home.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("./assets/back.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <stackNavigation.Navigator initialRouteName="ListProduct">
        <stackNavigation.Screen name="ListProduct" component={ListProduct} />
        <stackNavigation.Screen
          name="SearchProduct"
          component={SearchProduct}
        />
      </stackNavigation.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingBottom: 10,
    justifyContent: "space-between",
  },
});
