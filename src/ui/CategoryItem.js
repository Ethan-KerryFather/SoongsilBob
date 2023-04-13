import AnimatedLottieView from "lottie-react-native";
import Colors from "../../assets/Colors";
import { useNavigation } from "@react-navigation/native";
const { Pressable, StyleSheet, Text } = require("react-native");

function CategoryItem({ category, jsonRoute }) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={({ pressed }) =>
        pressed
          ? [
              styles.itemContainer,
              { backgroundColor: Colors.basicColor.magenta },
            ]
          : [styles.itemContainer]
      }
      onPress={() => {
        navigation.navigate("StoreList", { category: category });
      }}
    >
      <Text
        style={{
          fontFamily: "gangwon-bold",
          fontSize: 25,
          zIndex: 2,
          position: "absolute",
          alignSelf: "flex-start",
          paddingLeft: 10,
        }}
      >
        {category}
      </Text>
      {jsonRoute && (
        <AnimatedLottieView
          autoPlay
          style={{
            width: "100%",
            height: "110%",
          }}
          source={jsonRoute}
        />
      )}
    </Pressable>
  );
}

export default CategoryItem;

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "42%",
    height: "20%",
    backgroundColor: Colors.basicColor.magentaTrans2,
    borderRadius: 20,
    margin: "1%",
    borderWidth: 0.5,
    borderColor: Colors.basicColor.magenta,
  },
});
