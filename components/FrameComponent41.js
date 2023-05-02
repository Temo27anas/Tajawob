import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const FrameComponent41 = () => {
  return (
    <View style={styles.dechetsDeConstructionParent}>
      <Text style={styles.dechetsDeConstruction}>DECHETS DE CONSTRUCTION</Text>
      <Text style={[styles.adressePrsContainer, styles.containerTypo]}>
        <Text style={styles.adresse}>Adresse :</Text>
        <Text
          style={styles.prsDuMagasin}
        >{`  près du magasin Tariq, centre-ville
`}</Text>
      </Text>
      <Text style={[styles.catgorieHygineContainer, styles.containerTypo]}>
        <Text style={styles.adresse}>Catégorie :</Text>
        <Text style={styles.prsDuMagasin}> hygiène</Text>
      </Text>
      <Text style={[styles.catgorieHygineContainer, styles.containerTypo]}>
        <Text style={styles.adresse}>Date du rapport :</Text>
        <Text style={styles.prsDuMagasin}> 10/04/2022</Text>
      </Text>
      <Text style={[styles.descriptionLeContainer, styles.containerTypo]}>
        <Text style={styles.prsDuMagasin}></Text>
        <Text style={styles.adresse}>{`Description :  `}</Text>
        <Text
          style={styles.prsDuMagasin}
        >{` Le propriétaire du projet a complètement refusé de nettoyer les lieux
après le lui avoir demandé, sous prétexte de moyens logistiques`}</Text>
      </Text>
      <Image
        style={styles.constructionAndDemolitionWa}
        resizeMode="cover"
        source={require("../assets/construction-and-demolition-waste-0-23.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerTypo: {
    color: Color.black,
    fontSize: FontSize.size_mini,
    marginTop: 14,
    textAlign: "left",
  },
  dechetsDeConstruction: {
    fontSize: FontSize.size_10xl,
    color: Color.darkslategray,
    width: 297,
    textAlign: "left",
    fontFamily: FontFamily.skModernistRegular,
  },
  adresse: {
    fontWeight: "700",
    fontFamily: FontFamily.skModernistBold,
  },
  prsDuMagasin: {
    fontFamily: FontFamily.skModernistRegular,
  },
  adressePrsContainer: {
    width: 295,
    marginTop: 14,
  },
  catgorieHygineContainer: {
    width: 300,
    marginTop: 14,
  },
  descriptionLeContainer: {
    width: 299,
    marginTop: 14,
  },
  constructionAndDemolitionWa: {
    width: 303,
    height: 198,
    marginTop: 14,
    borderRadius: Border.br_xl,
  },
  dechetsDeConstructionParent: {
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 306,
    paddingLeft: Padding.p_12xs,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Border.br_xl,
  },
});

export default FrameComponent41;
