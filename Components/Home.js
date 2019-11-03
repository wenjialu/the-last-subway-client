import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Navigation() {
  return (
    <>
      <View style={styles.container}>
        <Text>Home</Text>
        <Button title="Go to Setting"></Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
