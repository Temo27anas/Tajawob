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

const FrameComponent4 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.icons8Logout481Parent, style]}
      onPress={() => navigation.navigate("LoginFR")}
    >
      <Image
        style={styles.icons8Logout481}
        resizeMode="cover"
        source={require("../assets/icons8logout48-11.png")}
      />
      <Text style={styles.logout}>Logout</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icons8Logout481: {
    width: 30,
    height: 30,
  },
  logout: {
    fontSize: FontSize.size_4xl,
    textTransform: "uppercase",
    fontFamily: FontFamily.nunitoRegular,
    color: Color.darkslategray,
    textAlign: "left",
  },
  icons8Logout481Parent: {
    width: 144,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default FrameComponent4;
