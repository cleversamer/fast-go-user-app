import { StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";

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
  const { lang } = useLocale();

  const handleSelect = (optIndex) => {
    onChange(options[optIndex - 1]);
  };

  return (
    <SelectList
      data={options}
      defaultOption={options[0]}
      setSelected={handleSelect}
      placeholder={placeholder}
      search={false}
      boxStyles={lang === "ar" ? styles.arBoxStyles : styles.enBoxStyles}
      dropdownStyles={styles.dropdownStyles}
      dropdownTextStyles={
        lang === "ar"
          ? styles.arDropdownTextStyles
          : styles.enDropdownTextStyles
      }
      inputStyles={styles.inputStyles}
    />
  );
}

const styles = StyleSheet.create({
  arBoxStyles: {
    borderColor: theme.primaryColor,
    borderWidth: 2,
    flexDirection: "row-reverse",
  },
  enBoxStyles: {
    borderColor: theme.primaryColor,
    borderWidth: 2,
    flexDirection: "row",
  },
  dropdownStyles: {
    borderColor: theme.primaryColor,
    borderWidth: 2,
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
  },
  inputStyles: {
    fontFamily: "cairo-600",
    fontSize: 13,
  },
});
