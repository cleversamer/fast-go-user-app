import { StyleSheet, View, Text } from "react-native";
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
  title,
  value,
  options = defaultOptions,
  placeholder,
  onChange,
}) {
  const screen = useScreen();
  const { lang } = useLocale();

  const styles = StyleSheet.create({
    container: {
      gap: screen.getVerticalPixelSize(7),
    },
    title: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(15),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
    },
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
      fontSize: screen.getResponsiveFontSize(13),
      textAlign: "right",
    },
    enDropdownTextStyles: {
      fontFamily: "cairo-600",
      fontSize: screen.getResponsiveFontSize(13),
      textAlign: "left",
      textTransform: "capitalize",
    },
    inputStyles: {
      fontFamily: "cairo-600",
      fontSize: screen.getResponsiveFontSize(13),
      color: "#000",
      textTransform: "capitalize",
    },
    arrowDownIcon: {
      fontSize: screen.getResponsiveFontSize(20),
      color: theme.primaryColor,
    },
  });

  const handleSelect = (value) => {
    try {
      const index = options.findIndex((o) => o.value === value);
      onChange(options[index].key);
    } catch (err) {}
  };

  return (
    <View style={styles.container}>
      {!!title && <Text style={styles.title}>{title}</Text>}

      <SelectList
        save="value"
        defaultOption={{ key: value, value }}
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
    </View>
  );
}
