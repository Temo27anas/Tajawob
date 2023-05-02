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

const FrameComponent1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.icons8Customer1001Parent, style]}
      onPress={() => navigation.navigate("ChangeProfile1FR")}
    >
      <Image
        style={styles.icons8Customer1001}
        resizeMode="cover"
        source={require("../assets/icons8customer100-1.png")}
      />
      <Text style={styles.profile}>Profile</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icons8Customer1001: {
    width: 30,
    height: 27,
  },
  profile: {
    fontSize: FontSize.size_3xl,
    textTransform: "uppercase",
    fontFamily: FontFamily.nunitoRegular,
    color: Color.darkslategray,
    textAlign: "left",
    width: 233,
    marginLeft: 8,
  },
  icons8Customer1001Parent: {
    width: 263,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default FrameComponent1;
