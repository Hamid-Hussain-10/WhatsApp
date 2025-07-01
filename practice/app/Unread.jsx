import { FlatList, StyleSheet, Text, View, Image } from "react-native";

const unreadChats = [
  {
    id: "1",
    name: "Sarah Kim",
    message: "Thank you!",
    time: "Yesterday",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: "2",
    name: "Daniel",
    message: "See you soon!",
    time: "2:30 PM",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: "3",
    name: "Yamoo",
    message: "qwerty",
    time: "2:30 PM",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const UnreadChatItem = ({ name, message, time, image }) => (
  <View style={styles.chatItem}>
    <Image source={{ uri: image }} style={styles.avatar} />
    <View style={styles.chatInfo}>
      <View style={styles.chatHeader}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <Text style={styles.message}>{message}</Text>
    </View>
  </View>
);

const Unread = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={unreadChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UnreadChatItem
            name={item.name}
            message={item.message}
            time={item.time}
            image={item.image}
          />
        )}
      />
    </View>
  );
};

export default Unread;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1014",
    paddingTop: 12,
  },
  chatItem: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#0B1014",
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    marginRight: 15,
  },
  chatInfo: {
    flex: 1,
    justifyContent: "center",
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
  message: {
    fontWeight: "bold",
    color: "#ede4e4",
    fontSize: 14,
    marginTop: 4,
  },
  time: {
    fontSize: 12,
    color: "#888",
  },
});
