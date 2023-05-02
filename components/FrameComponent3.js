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

const FrameComponent3 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.icons8Plus4811Parent, style]}
      onPress={() => navigation.navigate("NewReportFR1")}
    >
      <Image
        style={styles.icons8Plus4811}
        resizeMode="cover"
        source={require("../assets/icons8plus48-1-1.png")}
      />
      <Text style={styles.nouveauRapport}>{`NOuveau Rapport `}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icons8Plus4811: {
    width: 30,
    height: 30,
  },
  nouveauRapport: {
    fontSize: FontSize.size_3xl,
    textTransform: "uppercase",
    fontFamily: FontFamily.nunitoRegular,
    color: Color.darkslategray,
    textAlign: "center",
    width: 233,
  },
  icons8Plus4811Parent: {
    width: 263,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default FrameComponent3;
