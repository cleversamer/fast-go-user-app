import { StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { AntDesign } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";
import useScreen from "../../hooks/useScreen";

const defaultOptions = [
  {
    key: 1,
    value: "خيار 1",
  },
  {
    key: 2,
    value: "خيار 2",
  },
];

export default function SelectInput({
  options = defaultOptions,
  placeholder,
  onChange,
}) {
  const screen = useScreen();
  const { lang } = useLocale();

  const styles = StyleSheet.create({
    arBoxStyles: {
      borderColor: theme.primaryColor,
      borderWidth: screen.getHorizontalPixelSize(1.5),
      flexDirection: "row-reverse",
    },
    enBoxStyles: {
      borderColor: theme.primaryColor,
      borderWidth: screen.getHorizontalPixelSize(1.5),
      flexDirection: "row",
    },
    dropdownStyles: {
      borderColor: theme.primaryColor,
      borderWidth: screen.getHorizontalPixelSize(1.5),
    },
    arDropdownTextStyles: {
      fontFamily: "cairo-600",
      fontSize: 13,
      textAlign: "right",
    },
    enDropdownTextStyles: {
      fontFamily: "cairo-600",
      fontSize: 13,
      textAlign: "left",
      textTransform: "capitalize",
    },
    inputStyles: {
      fontFamily: "cairo-600",
      fontSize: 13,
      color: "#747474",
      textTransform: "capitalize",
    },
    arrowDownIcon: {
      fontSize: 20,
      color: theme.primaryColor,
    },
  });

  const handleSelect = (value) => {
    try {
      onChange(value);
    } catch (err) {}
  };

  return (
    <SelectList
      save="value"
      data={options}
      setSelected={handleSelect}
      placeholder={placeholder}
      arrowicon={<AntDesign name="down" style={styles.arrowDownIcon} />}
      search={false}
      boxStyles={lang === "ar" ? styles.arBoxStyles : styles.enBoxStyles}
      dropdownStyles={styles.dropdownStyles}
      inputStyles={styles.inputStyles}
      dropdownTextStyles={
        lang === "ar"
          ? styles.arDropdownTextStyles
          : styles.enDropdownTextStyles
      }
    />
  );
}
