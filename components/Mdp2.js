import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Mdp2 = () => {
  const [rectangleDropdown1Open, setRectangleDropdown1Open] = useState(false);
  const [rectangleDropdown1Value, setRectangleDropdown1Value] = useState("");
  const [rectangleDropdown1Items, setRectangleDropdown1Items] = useState([
    { value: "CategorieA", label: "CategorieA" },
    { value: "CategorieB", label: "CategorieB" },
    { value: "CategorieC", label: "CategorieC" },
    { value: "CategorieD", label: "CategorieD" },
  ]);

  return (
    <View style={styles.mdp}>
      <Text style={styles.catgorie}>Catégorie *</Text>
      <View style={styles.motdepassform}>
        <View
          style={styles.wrapper}
          bottomOffset={20}
          dropDownDirection="BOTTOM"
        >
          <DropDownPicker
            style={styles.dropdownpicker}
            open={rectangleDropdown1Open}
            setOpen={setRectangleDropdown1Open}
            value={rectangleDropdown1Value}
            setValue={setRectangleDropdown1Value}
            placeholder="Choisir..."
            items={rectangleDropdown1Items}
            labelStyle={styles.rectangleDropdown1Value}
            textStyle={styles.rectangleDropdown1Text}
            dropDownContainerStyle={styles.rectangleDropdown1dropDownContainer}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleDropdown1Value: {
    fontFamily: "SF Pro Display_regular",
  },
  rectangleDropdown1Text: {
    fontFamily: "Simah_regular",
  },
  rectangleDropdown1dropDownContainer: {
    backgroundColor: "#fcfcfc",
    borderStyle: "solid",
    borderColor: "#032a3b",
    borderWidth: 1.5,
  },
  catgorie: {
    fontSize: FontSize.size_lgi,
    fontFamily: FontFamily.skModernistRegular,
    color: Color.darkslategray,
    textAlign: "left",
    width: 101,
  },
  dropdownpicker: {
    backgroundColor: Color.gray_100,
    borderColor: "#032a3b",
    borderWidth: 1.5,
    borderStyle: "solid",
  },
  wrapper: {
    flex: 1,
    borderRadius: Border.br_mini,
    height: 52,
    borderStyle: "solid",
  },
  motdepassform: {
    flexDirection: "row",
    paddingTop: Padding.p_21xl,
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: -23,
    alignSelf: "stretch",
  },
  mdp: {
    marginTop: 32,
    alignSelf: "stretch",
  },
});

export default Mdp2;
