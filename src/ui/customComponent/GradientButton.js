import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet } from "react-native";
import { SmallTitle } from "../../styled/styledComponents";

export const GradientButton = ({ colors, text }) => (
  <Pressable>
    <LinearGradient
      colors={colors}
      start={{ x: 0.0, y: 0.0 }}
      end={{ x: 1.0, y: 1.0 }}
      style={styles.gradientBtnStyle}
    >
      {text && <SmallTitle style={{ letterSpacing: 3 }}>{text}</SmallTitle>}
    </LinearGradient>
  </Pressable>
);

const styles = StyleSheet.create({
  gradientBtnStyle: {
    width: "95%",
    height: RFPercentage(5),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 15,
  },
});
