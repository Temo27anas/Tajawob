import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FrameComponent = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.icons8Logout481Parent, style]}
      onPress={() => navigation.navigate("LoginFR")}
    >
      <Image
        style={styles.icons8Logout481}
        resizeMode="cover"
        source={require("../assets/icons8logout48-1.png")}
      />
      <Text style={styles.deconnexion}>DECONNEXION</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icons8Logout481: {
    width: 30,
    height: 30,
  },
  deconnexion: {
    fontSize: FontSize.size_3xl,
    textTransform: "uppercase",
    fontFamily: FontFamily.nunitoRegular,
    color: Color.darkslategray,
    textAlign: "left",
    width: 233,
    marginLeft: 9,
  },
  icons8Logout481Parent: {
    width: 263,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default FrameComponent;
