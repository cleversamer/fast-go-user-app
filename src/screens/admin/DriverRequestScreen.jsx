import { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import useScreen from "../../hooks/useScreen";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import useLocale from "../../hooks/useLocale";
import CircularAvatar from "../../components/common/CircularAvatar";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import CustomButton from "../../components/buttons/CustomButton";
import screens from "../../static/screens.json";

export default function DriverRequestScreen({ navigation, route }) {
  const { driver } = route.params;
  const screen = useScreen();
  const { i18n, lang } = useLocale();
  const [car, setCar] = useState(null);
  const [isLoadingCar, setIsLoadingCar] = useState(true);

  useEffect(() => {
    // TODO: load driver's car
    const timeoutId = setTimeout(() => {
      setCar(true);
    }, 2500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: screen.getVerticalPixelSize(15),
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
    },
    contentContainer: {
      gap: screen.getVerticalPixelSize(15),
    },
    avatarContainer: {
      alignSelf: "center",
    },
    avatar: {
      width: screen.getHorizontalPixelSize(100),
      height: screen.getVerticalPixelSize(100),
      borderWidth: screen.getHorizontalPixelSize(1),
      borderColor: "#ababab",
    },
    boxContainer: {
      borderWidth: screen.getHorizontalPixelSize(1),
      borderColor: "#ababab",
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      paddingVertical: screen.getVerticalPixelSize(10),
      borderRadius: screen.getHorizontalPixelSize(8),
      gap: screen.getVerticalPixelSize(10),
    },
    itemContainer: {
      flexDirection: lang === "ar" ? "row-reverse" : "row",

      alignItems: "center",
      gap: screen.getHorizontalPixelSize(7),
    },
    icon: {
      color: theme.primaryColor,
      fontSize: screen.getResponsiveFontSize(30),
    },
    imageIcon: {
      width: screen.getHorizontalPixelSize(30),
      height: screen.getHorizontalPixelSize(30),
    },
    boxTitle: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(14),
    },
    itemText: {
      fontFamily: "cairo-600",
      fontSize: screen.getResponsiveFontSize(14),
    },
    buttonsContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: screen.getHorizontalPixelSize(10),
    },
    buttonContainer: {
      flex: 1,
    },
    rejectButtonContainer: {
      backgroundColor: "#f00",
    },
    buttonText: {
      fontFamily: "cairo-800",
      fontSize: screen.getResponsiveFontSize(18),
    },
    imagesContainer: {
      gap: screen.getVerticalPixelSize(10),
    },
    imagesTitle: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(15),
    },
    imagesListContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: screen.getHorizontalPixelSize(10),
    },
    imageContainer: {
      flex: 1,
      maxWidth: screen.getHorizontalPixelSize(120),
      height: screen.getHorizontalPixelSize(90),
      borderRadius: screen.getHorizontalPixelSize(3),
      borderColor: "#ababab",
      borderWidth: screen.getHorizontalPixelSize(0.5),
    },
    image: {
      width: "100%",
      height: "100%",
    },
  });

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  const handleApproveDriver = () => {};

  const handleRejectDriver = () => {};

  const getOpenPhotoHandler = (url) => () => {
    try {
      const source = { uri: url };
      navigation.navigate(screens.photoDisplay, { source });
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <DefaultScreenTitle title={i18n("driverRequest")} onPrev={handleGoBack} />

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.avatarContainer}
          onPress={getOpenPhotoHandler(driver.avatarURL)}
        >
          <CircularAvatar url={driver?.avatarURL} imageStyle={styles.avatar} />
        </TouchableOpacity>

        <View style={styles.boxContainer}>
          <View style={styles.itemContainer}>
            <AntDesign name="idcard" style={styles.icon} />
            <Text style={styles.boxTitle}>{i18n("driverInfo")}</Text>
          </View>

          <View style={styles.itemContainer}>
            <Ionicons name="person" style={styles.icon} />
            <Text style={styles.itemText}>
              {driver.firstName} {driver.lastName}
            </Text>
          </View>

          <View style={styles.itemContainer}>
            <Entypo name="phone" style={styles.icon} />
            <Text style={styles.itemText}>{driver.phone.full}</Text>
          </View>

          <View style={styles.itemContainer}>
            <Feather name="mail" style={styles.icon} />
            <Text style={styles.itemText}>
              {driver.email || i18n("notSpecified")}
            </Text>
          </View>
        </View>

        <View style={styles.imagesContainer}>
          <Text style={styles.imagesTitle}>{i18n("requiredDocuments")}</Text>

          <View style={styles.imagesListContainer}>
            <TouchableOpacity
              style={styles.imageContainer}
              onPress={getOpenPhotoHandler(driver.avatarURL)}
            >
              <Image source={{ uri: driver.avatarURL }} style={styles.image} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.imageContainer}
              onPress={getOpenPhotoHandler(driver.avatarURL)}
            >
              <Image source={{ uri: driver.avatarURL }} style={styles.image} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.imageContainer}
              onPress={getOpenPhotoHandler(driver.avatarURL)}
            >
              <Image source={{ uri: driver.avatarURL }} style={styles.image} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.imageContainer}
              onPress={getOpenPhotoHandler(driver.avatarURL)}
            >
              <Image source={{ uri: driver.avatarURL }} style={styles.image} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.boxContainer}>
          <View style={styles.itemContainer}>
            <FontAwesome5 name="taxi" style={styles.icon} />
            <Text style={styles.boxTitle}>{i18n("carInfo")}</Text>
          </View>

          <View style={styles.itemContainer}>
            <Image
              source={require("../../assets/icons/car-number.png")}
              resizeMode="contain"
              style={styles.imageIcon}
            />
            <Text style={styles.itemText}>ABC-123</Text>
          </View>

          <View style={styles.itemContainer}>
            <AntDesign name="calendar" style={styles.icon} />
            <Text style={styles.itemText}>11-11-2018</Text>
          </View>

          <View style={styles.itemContainer}>
            <MaterialCommunityIcons name="taxi" style={styles.icon} />
            <Text style={styles.itemText}>Toyota</Text>
          </View>

          <View style={styles.itemContainer}>
            <Ionicons name="color-palette-sharp" style={styles.icon} />
            <Text style={styles.itemText}>أسود</Text>
          </View>
        </View>

        <View style={styles.imagesContainer}>
          <Text style={styles.imagesTitle}>{i18n("requiredDocuments")}</Text>

          <View style={styles.imagesListContainer}>
            <TouchableOpacity
              style={styles.imageContainer}
              onPress={getOpenPhotoHandler(driver.avatarURL)}
            >
              <Image source={{ uri: driver.avatarURL }} style={styles.image} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.imageContainer}
              onPress={getOpenPhotoHandler(driver.avatarURL)}
            >
              <Image source={{ uri: driver.avatarURL }} style={styles.image} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.imageContainer}
              onPress={getOpenPhotoHandler(driver.avatarURL)}
            >
              <Image source={{ uri: driver.avatarURL }} style={styles.image} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.imageContainer}
              onPress={getOpenPhotoHandler(driver.avatarURL)}
            >
              <Image source={{ uri: driver.avatarURL }} style={styles.image} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <CustomButton
          onPress={handleRejectDriver}
          text={i18n("reject")}
          textStyle={styles.buttonText}
          containerStyle={[
            styles.buttonContainer,
            styles.rejectButtonContainer,
          ]}
        />

        <CustomButton
          onPress={handleApproveDriver}
          text={i18n("approve")}
          containerStyle={[styles.buttonContainer, styles.approveButton]}
          textStyle={styles.buttonText}
        />
      </View>
    </SafeAreaView>
  );
}
