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
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const SuccessNewReportFR = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.successnewreportfr}>
      <Image
        style={styles.successnewreportfrChild}
        resizeMode="cover"
        source={require("../assets/group-457.png")}
      />
      <Text style={[styles.votreRapportA, styles.rapportFlexBox]}>
        Votre rapport a été enregistré avec succès
      </Text>
      <Text style={[styles.leRapportSera, styles.leRapportSeraTypo]}>
        Le rapport sera traité dans les prochains jours ouvrables
      </Text>
      <TouchableHighlight
        style={styles.pagePrincipaleWrapper}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("MainFR")}
      >
        <Text
          style={[styles.pagePrincipale, styles.leRapportSeraTypo]}
        >{`Page principale
`}</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  rapportFlexBox: {
    textAlign: "center",
    color: Color.darkslategray,
    marginTop: 44,
  },
  leRapportSeraTypo: {
    fontFamily: FontFamily.skModernistRegular,
    fontSize: FontSize.size_5xl,
  },
  successnewreportfrChild: {
    width: 185,
    height: 165,
  },
  votreRapportA: {
    fontSize: FontSize.size_8xl,
    fontWeight: "700",
    fontFamily: FontFamily.skModernistBold,
    width: 312,
    height: 77,
    marginTop: 44,
  },
  leRapportSera: {
    width: 302,
    marginTop: 44,
    textAlign: "center",
    color: Color.darkslategray,
  },
  pagePrincipale: {
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
  successnewreportfr: {
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

export default SuccessNewReportFR;
