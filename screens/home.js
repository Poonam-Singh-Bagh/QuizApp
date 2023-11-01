// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
// import { useNavigation } from "@react-navigation/native";
// import Title from "../components/title";
import Common from "../components/common";

const Home = () => {
  // const navigation = useNavigation();
  const banner =
    "https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feeback-and-review-in-websites-2112230-1779230.png";
  return (
    <Common
      titleText="Quizller"
      route="Quiz"
      subTitile="Negative mark for a wrong answer"
      banner={banner}
      buttonText="Start"
    />
    // <View style={styles.container}>
    //   <Title />
    //   <View style={styles.bannerContainer}>
    //     <Image
    //       source={{
    //         // uri: "https://png.pngtree.com/png-vector/20220615/ourmid/pngtree-online-testing-background-vector-illustration-with-checklist-png-image_5084759.png",
    //         // uri: "https://png.pngtree.com/png-vector/20220615/ourmid/pngtree-online-testing-background-vector-illustration-with-checklist-png-image_5084737.png",
    //         uri: "https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feeback-and-review-in-websites-2112230-1779230.png",
    //       }}
    //       style={styles.banner}
    //       resizeMode="contain"
    //     />
    //   </View>
    //   <TouchableOpacity
    //     onPress={() => navigation.navigate("Quiz")}
    //     style={styles.button}
    //   >
    //     <Text style={styles.buttonText}>Start</Text>
    //   </TouchableOpacity>
    // </View>
  );
};

export default Home;

// const styles = StyleSheet.create({
//   banner: {
//     height: 400,
//     width: 400,
//   },
//   bannerContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     flex: 1,
//   },
//   container: {
//     paddingTop: 40,
//     paddingHorizontal: 20,
//     height: "100%",
//   },
//   button: {
//     width: "100%",
//     backgroundColor: "#1A759F",
//     padding: 16,
//     borderRadius: 16,
//     alignItems: "center",
//     marginBottom: 30,
//   },
//   buttonText: {
//     fontSize: 24,
//     fontWeight: "600",
//     color: "white",
//   },
// });
