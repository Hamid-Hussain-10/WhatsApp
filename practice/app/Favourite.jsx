import { StyleSheet, View } from "react-native";
import ChatItem from "./Chats";

const Favourite = () => {

  const favouriteChat = {
    name: 'Favourite Person',
    message: 'Hello from favourites!',
    time: '5:45 PM',
    image: 'https://randomuser.me/api/portraits/men/85.jpg',
  };

  return (
    <View style={styles.container}>
      <ChatItem
        name={favouriteChat.name}
        message={favouriteChat.message}
        time={favouriteChat.time}
        image={favouriteChat.image}
      />
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#0B1014",
  },
    text:{
    color: 'white',
  }
});
