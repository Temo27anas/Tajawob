import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const GroupComponent = () => {
  return (
    <View style={styles.vectorParent}>
      <Image
        style={[styles.groupChild, styles.groupChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <Text style={[styles.text, styles.textTypo2]}>بلغ عن خطا</Text>
      <Image
        style={[styles.constructionAndDemolitionWa, styles.groupChildLayout]}
        resizeMode="cover"
        source={require("../assets/construction-and-demolition-waste-0-2.png")}
      />
      <Text style={[styles.text1, styles.textTypo2]}>تفاصيل</Text>
      <Text style={[styles.text2, styles.textLayout]}>الصنف : النظافة</Text>
      <View style={[styles.tarikhTabligh, styles.text6Layout]}>
        <Text style={[styles.text3, styles.textTypo1]}>10/04/2020</Text>
        <Text
          style={[styles.text4, styles.textLayout]}
        >{`تاريخ التبليغ : `}</Text>
      </View>
      <Text
        style={[styles.text5, styles.textTypo]}
      >{`تعليق:  صاحب المشروع رفض كليا تنظيف المكان 
 بعد طلب الامر منه بحجة الوسائل اللوجيستيكية`}</Text>
      <Text style={[styles.text6, styles.textTypo]}>مخلفات بنائية</Text>
      <Text style={[styles.text7, styles.textLayout]}>
        العنوان : قرب متجر طارق، وسط المدينة
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  textTypo2: {
    color: Color.crimson_200,
    textAlign: "left",
    fontFamily: FontFamily.simahRegular,
    textTransform: "uppercase",
    position: "absolute",
  },
  textLayout: {
    height: 30,
    position: "absolute",
  },
  text6Layout: {
    width: 172,
    left: 144,
  },
  textTypo1: {
    textAlign: "right",
    color: Color.black,
    fontSize: FontSize.size_mini,
  },
  textTypo: {
    height: 60,
    fontFamily: FontFamily.simahRegular,
    textTransform: "uppercase",
    position: "absolute",
  },
  groupChild: {
    left: 0,
    borderRadius: Border.br_xl,
    top: 0,
    height: 479,
    width: 330,
  },
  text: {
    top: 13,
    left: 13,
    fontSize: FontSize.size_mid,
    textDecoration: "underline",
    width: 75,
    height: 34,
    textAlign: "left",
  },
  constructionAndDemolitionWa: {
    top: 281,
    left: 1,
    width: 329,
    height: 198,
  },
  text1: {
    top: 5,
    left: 242,
    fontSize: FontSize.size_5xl,
    width: 69,
    height: 48,
    textAlign: "left",
  },
  text2: {
    top: 132,
    left: 221,
    width: 95,
    textAlign: "right",
    color: Color.black,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.simahRegular,
    height: 30,
    textTransform: "uppercase",
  },
  text3: {
    top: 4,
    fontFamily: FontFamily.dMSansRegular,
    width: 83,
    height: 21,
    textTransform: "uppercase",
    textAlign: "right",
    color: Color.black,
    fontSize: FontSize.size_mini,
    left: 0,
    position: "absolute",
  },
  text4: {
    left: 98,
    width: 74,
    textAlign: "right",
    color: Color.black,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.simahRegular,
    height: 30,
    textTransform: "uppercase",
    top: 0,
  },
  tarikhTabligh: {
    top: 169,
    height: 30,
    position: "absolute",
  },
  text5: {
    top: 206,
    left: 26,
    width: 290,
    textAlign: "right",
    color: Color.black,
    fontSize: FontSize.size_mini,
  },
  text6: {
    top: 38,
    fontSize: FontSize.size_11xl,
    color: Color.darkslategray,
    width: 172,
    left: 144,
    textAlign: "left",
  },
  text7: {
    top: 98,
    left: 85,
    width: 231,
    textAlign: "right",
    color: Color.black,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.simahRegular,
    height: 30,
    textTransform: "uppercase",
  },
  vectorParent: {
    top: 841,
    left: 16,
    height: 479,
    width: 330,
    position: "absolute",
  },
});

export default GroupComponent;
