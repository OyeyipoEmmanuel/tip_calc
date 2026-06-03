import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaProvider style={styles.root}>
      <Stack />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    fontFamily: 'System', // uses iOS San Francisco / Android Roboto
  },
});