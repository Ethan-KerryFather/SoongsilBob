import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  NormalText,
  SmallText,
  SmallTitle,
} from "../../../styled/styledComponents";
import { Avater, Button, Card } from "react-native-paper";
import { RFPercentage } from "react-native-responsive-fontsize";
import Colors from "../../../../assets/Colors";

function FoodCard({ title, text, imageUrl }) {
  if (text === "") {
    text = "금일 운영 하지 않습니다";
  }
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <SmallTitle>{title}</SmallTitle>
      </View>

      <NormalText style={styles.normalText}>{text}</NormalText>
    </View>
  );
}

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "95%",
    paddingHorizontal: "5%",
    paddingBottom: "5%",
    marginVertical: RFPercentage(1),
    backgroundColor: "white",
    borderRadius: 20,
  },
  upperContainer: {
    paddingTop: "3%",
    paddingBottom: "1%",
  },
  //
  //
  normalText: {
    letterSpacing: 1,
  },
});
