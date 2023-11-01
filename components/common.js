import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Title from "../components/title";

const Common = ({ titleText, route, score, subTitile, banner, buttonText }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Title titleText={titleText} />
      {score && <Text style={styles.title}>{score}</Text>}
      {subTitile && <Text style={styles.subTitile}>{subTitile}</Text>}
      <View style={styles.bannerContainer}>
        <Image
          source={{ uri: banner }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate(route)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Common;

const styles = StyleSheet.create({
  banner: {
    height: 400,
    width: 400,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  title: {
    fontSize: 36,
    fontWeight: "600",
    alignSelf: "center",
  },
  subTitile: {
    fontSize: 20,
    fontWeight: "600",
    alignSelf: "center",
  },
  button: {
    width: "100%",
    backgroundColor: "#1A759F",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
});
