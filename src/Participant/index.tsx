import { TouchableOpacity, View, Text, Image } from "react-native";
import { styles } from "./styles"
import {useState} from "react"
import { CheckBox } from "react-native-elements";


type Props = {
    name: String
    onRemove: () => void
    
}

export function Participant({ name,onRemove }: Props) {
    const [checked,setChecked] = useState(false)
    return (
        <View style={styles.container}>
            <CheckBox 
            checked={checked}
            onPress={() => setChecked(true)}
            />
            <Text style={styles.text}>
                {name}
            </Text>
            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Image source={require('../../assets/trash.png')} />
            </TouchableOpacity>


        </View>
    );
}