import React from "react";
import { View, StyleSheet, Platform, StatusBar } from "react-native";
function Screen({ children }) {
  return <View style={styles.listContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    flex: 1,
  },
});

export default Screen;
