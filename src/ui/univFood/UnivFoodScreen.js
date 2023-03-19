import { useEffect } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import { WebView } from "react-native-webview";
import { BigTitle } from "../../styled/styledComponents";

function UnivFoodScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={[styles.container]}>
      <WebView
        style={styles.container}
        source={{ uri: "http://m.soongguri.com/" }}
      />
    </SafeAreaView>
  );
}

export default UnivFoodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  }, //
});
