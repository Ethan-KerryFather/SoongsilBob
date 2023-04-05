import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { SmallTitle } from "../../styled/styledComponents";

function AllianceScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "제휴",
    });
  });
  return (
    <View style={styles.container}>
      <View
        style={{ height: RFPercentage(50), marginVertical: RFPercentage(5) }}
      >
        <SmallTitle>스터디어스 상도점</SmallTitle>
        <Image
          source={{
            uri: "https://lh3.googleusercontent.com/TkcHgjXYEFdGZgas6d-kBMK8scs6_3DA5YXKZYWTTbxhDQPZ1jf2viV5a4FjS38yeDd0I2i5Gm3PNwbeD5HpgNKhmvUs6XI-AYmi3ZUq3cJ_IqwgW66YCNwiuGgtH01ZV5IzJLdTdUdyDE4zuGj8ove-zUe-ny-zlbLo-nyR6lIX6hHI0MPImyylwXrN-rOkJpgBJQxciVr7x6w44OkWqPm-8pK95GIXuljEmUgRxrnxBuTID1xm6m8Fc7cY9LBlGlO0u_OYPTTLtzS0q5veqfDz8KqYGKrRgrwZR3S90NyHlXMqTWEAu-8838c4kGAC0HkUpjjxrtnllFJw-gl4KMSLzONwMD3un0q2tKtc1OnqpfPBan7qbZpiBWU-EpdilQCgdAGl4D9gYY9AJOYAlYxwaKF5R-bIqOLp73Jynh8NuUz4KgEo0izSP0nyYIIzc8XMFXA7s8CafNGOnrcHNbDP3iLlW_4f1CYYqRVSceypueNNN9TuGk331gAYITO5A4rHlYjKbR7OCg-NfagXT1U_kLC-OCzGOP5ACtEut5yF2poinMwJtNHshcZlYYn9mX7fyZcHZE1YVH53TjuKz6HyBrEO1pEY8uwLVh5r2t-MW2NZZFBRbKW96PmpBhqZGqRzLoCXx9Dzco5KgbrU_qiJbOgzScfbaRoAsqJN6hd_OH74zCOTmAolhA9TRPviBAjJ5XM72mF9Id0eOR_4fhTVo3Q2l6A_O-OkJ1nZXBTp0NoolPvA13zqIP1A_uZfzcxmGIpop-v6r4ZasQoBrgxJWJajmTc2pi-hcEfYH1kem6JVYq9pRgm1P-wq_vpkEba9XKEOF6KbhIuNKV_yoIMrKkYw1dY8mEZDWKCDtDj6UgzGZDaio-c0uXZBFCad9gHGdBI4xwwyBODP9Vhlg8Wm0dTXHjZpGpdrssTsHTM=w525-h933-s-no?authuser=0",
          }}
          style={{ flex: 1 }}
          resizeMode="stretch"
        />
      </View>
      <View></View>
    </View>
  );
}

export default AllianceScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
