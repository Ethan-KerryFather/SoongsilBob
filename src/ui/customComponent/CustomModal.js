import React, { useState } from "react";
import { Image, StyleSheet, Text, View, Modal } from "react-native";

function CustomModal({ imageUrl, isVisible }) {
  console.log(imageUrl);
  return (
    <Modal transparent={true} visible={isVisible} style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: imageUrl }}
          style={{ width: "80%", height: "50%", borderRadius: 30 }}
          resizeMode="cover"
        />
      </View>
    </Modal>
  );
}

export default CustomModal;

const styles = StyleSheet.create({
  container: {},
  imageWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
});