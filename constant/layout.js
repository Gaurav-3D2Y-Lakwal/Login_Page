import { Dimensions } from "react-native";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default {
    height,
    width,
    isSmallDevice: width< 375,
}