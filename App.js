import "react-native-gesture-handler";
import "react-native-get-random-values";
import { StyleSheet } from "react-native";

// wrap whole app with <GestureHandlerRootView>
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { theme, ThemeProvider } from "react-native-design-system";
import { TodoList } from "./src/TodoList";

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ThemeProvider theme={theme}>
        <TodoList />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
