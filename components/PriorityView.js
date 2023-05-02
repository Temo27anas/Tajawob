import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const PriorityView = () => {
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
      <Text style={[styles.prioritDuRapport, styles.motDePasseTypo]}>
        Priorité du rapport*
      </Text>
      <View style={styles.motdepassform}>
        <View style={styles.wrapper} zIndex={-9}>
          <DropDownPicker
            style={styles.dropdownpicker}
            open={rectangleDropdown1Open}
            setOpen={setRectangleDropdown1Open}
            value={rectangleDropdown1Value}
            setValue={setRectangleDropdown1Value}
            placeholder="Choisir..."
            items={rectangleDropdown1Items}
            dropDownContainerStyle={styles.rectangleDropdown1dropDownContainer}
          />
        </View>
        <Text style={[styles.motDePasse, styles.motDePasseTypo]}>
          Mot de passe
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleDropdown1dropDownContainer: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#032a3b",
    borderWidth: 1.5,
  },
  motDePasseTypo: {
    textAlign: "left",
    fontSize: FontSize.size_lgi,
  },
  prioritDuRapport: {
    fontFamily: FontFamily.skModernistRegular,
    color: Color.darkslategray,
  },
  dropdownpicker: {
    backgroundColor: Color.white,
    borderColor: "#032a3b",
    borderWidth: 1.5,
    borderStyle: "solid",
  },
  wrapper: {
    borderRadius: Border.br_mini,
    height: 52,
    borderStyle: "solid",
    flex: 1,
  },
  motDePasse: {
    fontWeight: "500",
    fontFamily: FontFamily.nunitoMedium,
    color: Color.gray_200,
    display: "none",
    marginLeft: -299,
    flex: 1,
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
    paddingTop: Padding.p_11xs,
    marginTop: 32,
    alignSelf: "stretch",
  },
});

export default PriorityView;
