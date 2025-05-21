import { StyleSheet, Text, View } from "react-native";

const Favourite = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favourite</Text>
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1918",
  },
    text:{
    color: 'white',
  }
});
