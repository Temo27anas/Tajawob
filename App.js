const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Loading from "./screens/Loading";
import Main from "./screens/Main";
import SuccessDeleteReportFR from "./screens/SuccessDeleteReportFR";
import SuccessEditReportFR from "./screens/SuccessEditReportFR";
import EditReport3FR from "./screens/EditReport3FR";
import EditReport2FR from "./screens/EditReport2FR";
import EditReportFR1 from "./screens/EditReportFR1";
import SuccessChangeProfileFR from "./screens/SuccessChangeProfileFR";
import ChangeProfile2FR from "./screens/ChangeProfile2FR";
import ChangeProfile1FR from "./screens/ChangeProfile1FR";
import HistoryFR from "./screens/HistoryFR";
import NewProfileFR from "./screens/NewProfileFR";
import SuccessSignUpFR from "./screens/SuccessSignUpFR";
import SignupFR from "./screens/SignupFR";
import LoginFR from "./screens/LoginFR";
import SuccessNewReportFR from "./screens/SuccessNewReportFR";
import NewReport3FR from "./screens/NewReport3FR";
import NewReport2FR from "./screens/NewReport2FR";
import NewReportFR1 from "./screens/NewReportFR1";
import MainFR from "./screens/MainFR";
import SelectLanguage from "./screens/SelectLanguage";
import DrawerFR from "./screens/DrawerFR";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    "DM Mono_light": require("./assets/fonts/DM_Mono_light.ttf"),
    "DM Sans_regular": require("./assets/fonts/DM_Sans_regular.ttf"),
    "DM Sans_bold": require("./assets/fonts/DM_Sans_bold.ttf"),
    Nunito_regular: require("./assets/fonts/Nunito_regular.ttf"),
    Nunito_medium: require("./assets/fonts/Nunito_medium.ttf"),
    Nunito_semibold: require("./assets/fonts/Nunito_semibold.ttf"),
    Nunito_bold: require("./assets/fonts/Nunito_bold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="SelectLanguage"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="Loading"
                component={Loading}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Main"
                component={Main}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SuccessDeleteReportFR"
                component={SuccessDeleteReportFR}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SuccessEditReportFR"
                component={SuccessEditReportFR}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EditReport3FR"
                component={EditReport3FR}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EditReport2FR"
                component={EditReport2FR}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EditReportFR1"
                component={EditReportFR1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SuccessChangeProfileFR"
                component={SuccessChangeProfileFR}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ChangeProfile2FR"
                component={ChangeProfile2FR}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ChangeProfile1FR"
                component={ChangeProfile1FR}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HistoryFR"
                component={HistoryFR}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NewProfileFR"
                component={NewProfileFR}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SuccessSignUpFR"
                component={SuccessSignUpFR}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignupFR"
                component={SignupFR}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LoginFR"
                component={LoginFR}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SuccessNewReportFR"
                component={SuccessNewReportFR}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NewReport3FR"
                component={NewReport3FR}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NewReport2FR"
                component={NewReport2FR}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NewReportFR1"
                component={NewReportFR1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MainFR"
                component={MainFR}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SelectLanguage"
                component={SelectLanguage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DrawerFR"
                component={DrawerFR}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : (
            <Loading />
          )}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
