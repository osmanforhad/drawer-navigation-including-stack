import { Text, View } from "react-native";
import styles from "../styles/style";

const CustomText = (props) => {
    return (
        <View>
            <Text style={styles.textStle}>{props.title}</Text>
        </View>
    );
};

export default CustomText;