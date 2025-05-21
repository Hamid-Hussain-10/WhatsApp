import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TopNav from "./TopNav";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <View style={styles.iconBox}>
          <TouchableOpacity onPress={() => alert("Searching...")}>
            <Ionicons name="search" size={22} color="#ffffff" />
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#bfbdbd"
          style={styles.input}
        />
      </View>

      <View style={styles.tabContainer}>
        <TopNav />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#1a1918",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#312e2e",
    borderRadius: 20,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    color: "#fff",
    paddingVertical: 12,
  },
  iconBox: {
    marginRight: 10,
  },
  tabContainer: {
    flex: 1,
    backgroundColor: "#1a1918", 
  },
});
