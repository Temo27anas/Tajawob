import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  Pressable,
  TouchableHighlight,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SuccessEditReportFR = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.successeditreportfr}>
      <Image
        style={styles.successeditreportfrChild}
        resizeMode="cover"
        source={require("../assets/group-457.png")}
      />
      <Text style={styles.votreRapportA}>
        Votre rapport a été modifié avec succès
      </Text>
      <TouchableHighlight
        style={styles.pagePrincipaleWrapper}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("MainFR")}
      >
        <Text style={styles.pagePrincipale}>{`Page principale
`}</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  successeditreportfrChild: {
    width: 185,
    height: 165,
  },
  votreRapportA: {
    fontSize: FontSize.size_8xl,
    fontWeight: "700",
    fontFamily: FontFamily.skModernistBold,
    color: Color.darkslategray,
    textAlign: "center",
    width: 312,
    height: 77,
    marginTop: 44,
  },
  pagePrincipale: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.skModernistRegular,
    color: Color.white,
    textAlign: "left",
    width: 173,
    height: 38,
  },
  pagePrincipaleWrapper: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.crimson_200,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 264,
    height: 54,
    paddingHorizontal: Padding.p_24xl,
    paddingVertical: 0,
    marginTop: 44,
    justifyContent: "center",
  },
  successeditreportfr: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: Padding.p_118xl,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SuccessEditReportFR;
