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

const FrameComponent2 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.icons8TimeMachine2411Parent, style]}
      onPress={() => navigation.navigate("HistoryFR")}
    >
      <Image
        style={styles.icons8TimeMachine2411}
        resizeMode="cover"
        source={require("../assets/icons8timemachine24-1-1.png")}
      />
      <Text style={styles.mesRapports}>MES rapports</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icons8TimeMachine2411: {
    width: 30,
    height: 30,
  },
  mesRapports: {
    fontSize: FontSize.size_3xl,
    textTransform: "uppercase",
    fontFamily: FontFamily.nunitoRegular,
    color: Color.darkslategray,
    textAlign: "left",
    width: 233,
    marginLeft: 9,
  },
  icons8TimeMachine2411Parent: {
    width: 263,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default FrameComponent2;
