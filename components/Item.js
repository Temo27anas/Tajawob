import React, { useMemo } from "react";
import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Border, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Item = ({ propMarginLeft }) => {
  const itemStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    <Pressable style={[styles.item, styles.itemFlexBox, itemStyle]}>
      <View style={styles.constructionAndDemolitionWaParent}>
        <Image
          style={styles.constructionAndDemolitionWa}
          resizeMode="cover"
          source={require("../assets/construction-and-demolition-waste-0-22.png")}
        />
        <Text style={styles.dchetsDeConstruction}>déchets de construction</Text>
      </View>
      <View style={[styles.prsDuMagasinTariqCentreWrapper, styles.itemFlexBox]}>
        <Text
          style={[styles.prsDuMagasin, styles.ilYATypo]}
        >{`Près du magasin Tariq, centre
Ville
`}</Text>
      </View>
      <View style={styles.ilYA5JoursWrapper}>
        <Text style={[styles.ilYA, styles.ilYATypo]}>{`il y a 5 jours
`}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  ilYATypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.skModernistRegular,
  },
  constructionAndDemolitionWa: {
    marginTop: -86.5,
    top: "50%",
    left: -8,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    width: 219,
    height: 141,
    position: "absolute",
  },
  dchetsDeConstruction: {
    top: 44,
    left: 15,
    fontSize: FontSize.size_lgi,
    color: Color.white,
    textAlign: "center",
    width: 172,
    fontFamily: FontFamily.skModernistRegular,
    textTransform: "uppercase",
    position: "absolute",
  },
  constructionAndDemolitionWaParent: {
    width: 203,
    height: 139,
  },
  prsDuMagasin: {
    alignSelf: "stretch",
    textTransform: "capitalize",
    color: Color.darkslategray,
    textAlign: "left",
    height: 36,
  },
  prsDuMagasinTariqCentreWrapper: {
    width: 205,
    justifyContent: "center",
  },
  ilYA: {
    color: Color.crimson_200,
    textAlign: "right",
    width: 186,
    height: 16,
    textTransform: "uppercase",
    fontSize: FontSize.size_mini,
  },
  ilYA5JoursWrapper: {
    width: 191,
    paddingTop: Padding.p_xs,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  item: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#032a3b",
    borderWidth: 2,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_lgi,
    justifyContent: "center",
  },
});

export default Item;
