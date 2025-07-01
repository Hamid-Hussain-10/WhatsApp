import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import Home from "./Home";

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0B1014",
        },
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: "bold",
          color: "#fff",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "left",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: "WhatsApp",
          headerBackVisible: false,
          headerShadowVisible: false,
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                gap: 15,
                paddingBottom: 2,
              }}
            >
              <TouchableOpacity onPress={() => alert("Camera clicked")}>
                <Ionicons name="camera-outline" size={22} color="#ffffff" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => alert("More options")}>
                <Feather name="more-vertical" size={22} color="#ffffff" />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default Index;
