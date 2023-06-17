import { StyleSheet, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const MinorContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 15,
    marginVertical: RFPercentage(2),
    padding: 14,
    alignSelf: "center",
  },
});
