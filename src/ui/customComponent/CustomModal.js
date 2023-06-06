import React, { Children, useState } from "react";
import { Image, StyleSheet, Text, View, Modal } from "react-native";

function CustomModal({ imageUrl, isVisible, children }) {
  console.log(`**CustomModal Component\nimageUrl값 ${imageUrl}`);
  return (
    <Modal
      transparent={true}
      visible={isVisible}
      style={styles.container}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      {imageUrl && (
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: imageUrl }}
            style={{ width: "80%", height: "50%", borderRadius: 30 }}
            resizeMode="cover"
          />
        </View>
      )}
      {children}
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
