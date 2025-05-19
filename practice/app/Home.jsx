import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <View style={styles.iconBox}>
          <TouchableOpacity onPress={() => alert("seraching...")}>
            <Ionicons name="search" size={22} color="#ffffff" />
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#bfbdbd"
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#000",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1c1c1c",
    borderRadius: 16,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    color: "#fff",
    paddingVertical: 12,
  },
  iconBox: {
    flexDirection: "column",
    alignItems: "start",
    
  },
});
