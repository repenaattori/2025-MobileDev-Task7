import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    container: {
        flex:1,
        marginTop: Constants.statusBarHeight+10,
        gap: 10,
        margin: 20
    },
    textField:{
        borderWidth: 1
    }
});
  