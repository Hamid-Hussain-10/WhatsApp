import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const chats = [
  {
    id: '1',
    name: 'John Doe',
    message: 'Hey! How are you?',
    time: '10:20 AM',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: '2',
    name: 'Emily Clark',
    message: 'Let’s meet tomorrow.',
    time: '9:45 AM',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: '3',
    name: 'Michael Lee',
    message: 'I’ll send you the file.',
    time: 'Yesterday',
    image: 'https://randomuser.me/api/portraits/men/58.jpg',
  },
  {
    id: '4',
    name: 'Sarah Kim',
    message: 'Thank you!',
    time: 'Yesterday',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '5',
    name: 'Daniel',
    message: 'See you soon!',
    time: '2:30 PM',
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
  {
    id: '6',
    name: 'Yamoo',
    message: 'qwerty',
    time: '2:30 PM',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    id: '7',
    name: 'Raza',
    message: 'bye..',
    time: '2:30 PM',
    image: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
];

const ChatItem = ({ name, message, time, image }) => (
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

const AppChat = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatItem
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: "#0B1014",
  },
  chatItem: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: "#0B1014",
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    marginRight: 15,
    borderWidth: 1,
    borderColor: "#9900ff",
  },
  chatInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: '#ffffff',
  },
  message: {
    color: '#ffffff',
    fontSize: 14,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});

export default AppChat;
