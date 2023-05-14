import { StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import * as theme from "../../constants/theme";

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
      boxStyles={styles.boxStyles}
      dropdownStyles={styles.dropdownStyles}
      dropdownTextStyles={styles.dropdownTextStyles}
      inputStyles={styles.inputStyles}
    />
  );
}

const styles = StyleSheet.create({
  boxStyles: {
    borderColor: theme.primaryColor,
    borderWidth: 2,
    flexDirection: "row-reverse",
  },
  dropdownStyles: {
    borderColor: theme.primaryColor,
    borderWidth: 2,
  },
  dropdownTextStyles: {
    fontFamily: "cairo-600",
    fontSize: 13,
  },
  inputStyles: {
    fontFamily: "cairo-600",
    fontSize: 13,
  },
});
