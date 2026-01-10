import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛡️ AI Scam Detector</Text>
      <Button title="Open Spam Checker" onPress={() => navigation.navigate("Checker")} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#020617"
  },
  title: {
    color: "white", fontSize: 26, marginBottom: 20
  }
});
