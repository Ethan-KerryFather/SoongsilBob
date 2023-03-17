import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SmallText } from "../../../styled/styledComponents";
import { Avater, Button, Card } from "react-native-paper";
import { RFPercentage } from "react-native-responsive-fontsize";

function FoodCard({ title, text, imageUrl }) {
  return (
    <View style={styles.container}>
      <Card mode="elevated">
        <Card.Title title={title} subtitle="Card Subtitle" />
        <View style={styles.cardImageWrapper}>
          {imageUrl ? (
            <Card.Cover source={{ uri: imageUrl }} style={styles.cardImage} />
          ) : (
            <Card.Cover
              source={{ uri: "https://picsum.photos/700" }}
              style={styles.cardImage}
            />
          )}
        </View>
        <Card.Content>
          <SmallText>{text}</SmallText>
        </Card.Content>
      </Card>
    </View>
  );
}

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    flex: 1,
    marginBottom: 40,
    width: "90%",
  },
  upperContainer: {},
  lowerContainer: {},
  //

  cardImage: {
    width: "95%",
    alignSelf: "center",
    marginBottom: 20,
  },

  SmallTitle: {
    fontFamily: "gowun-bold",
    fontSize: RFPercentage(10),
  },
});
