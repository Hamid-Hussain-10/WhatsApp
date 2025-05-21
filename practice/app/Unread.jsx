import { StyleSheet, Text, View } from "react-native";

const Unread = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Unread</Text>
    </View>
  );
};

export default Unread;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1918",
  },
  text:{
    color: 'white',
  }
});
