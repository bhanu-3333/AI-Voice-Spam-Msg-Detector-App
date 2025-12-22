import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import * as Speech from "expo-speech";
const BACKEND_URL = "http://10.0.2.2:5000/predict";
export default function CheckerScreen() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [advice, setAdvice] = useState([]);
  const [type, setType] = useState("");
  const speakAndType = (message) => {
    Speech.stop();
    Speech.speak(message);
    setResult("");
    let i = 0;
    const interval = setInterval(() => {
      setResult((prev) => prev + message[i]);
      i++;
      if (i >= message.length) clearInterval(interval);
    }, 40);
  };

  const checkMessage = async () => {
    setAdvice([]);
    const response = await fetch(BACKEND_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });

    const data = await response.json();
    const res = data[0];
    const lower = text.toLowerCase();

    let adv = [];
    if (lower.includes("click")) adv.push("❌ Do NOT click links");
    if (lower.includes("pay")) adv.push("❌ Do NOT make payments");
    if (lower.includes("otp")) adv.push("❌ Never share OTP");
    if (lower.includes("bank")) adv.push("❌ Banks never ask details");

    setAdvice(adv);

    
    if (res.label === "LABEL_1") {
      setType("fake");
      speakAndType("   Warning! This message looks like a scam.");
    } else {
      setType("safe");
      speakAndType("  This message looks safe.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Paste message..."
        onChangeText={setText}
        value={text}
        multiline
      />
      <Button title="Check Message" onPress={checkMessage} />
      <Text style={type === "fake" ? styles.fake : styles.safe}>{result}</Text>

      {advice.length > 0 && (
        <View>
          <Text style={{ color: "white", marginTop: 10 }}>What to do next:</Text>
          {advice.map((a, i) => (
            <Text key={i} style={{ color: "white" }}>{a}</Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#020617" },
  input: { backgroundColor: "white", height: 120, marginBottom: 10, padding: 10 },
  fake: { color: "#ef4444", marginTop: 10 },
  safe: { color: "#22c55e", marginTop: 10 }
});
