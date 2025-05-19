import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, View } from "react-native";
import Home from "./Home";
import { Feather, Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#000000" },
        headerTintColor: "#ffffff",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: "WhatsApp",
          headerBackVisible: false,
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 20, marginRight: 20 }}>
              <TouchableOpacity onPress={() => alert("Camera clicked")}>
                <Ionicons name="camera-outline" size={22} color="#ffffff" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => alert("more options")}>
                <Feather	 name="more-vertical" size={20} color="#ffffff" />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default Index;
