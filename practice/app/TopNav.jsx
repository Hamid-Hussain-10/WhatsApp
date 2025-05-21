import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Unread from "./Unread";
import Favourite from "./Favourite";

const Tab = createMaterialTopTabNavigator();

function TopNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#83a928",
          borderRadius: 25,
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
          color: "#fff",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#ffffff",
          borderRadius: 25,
          height: 3,
        },
      }}
    >
      <Tab.Screen name="All" component={Favourite} />
      <Tab.Screen name="Unread" component={Unread} />
      <Tab.Screen name="Favourite" component={Favourite} />
    </Tab.Navigator>
  );
}

export default TopNav;
