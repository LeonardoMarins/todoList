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
    const [count,setCount] = useState(0)

    function checkedes() {
        if(checked == true)
        setCount(count + 1)
        console.log(count)
    }


    return (
        <View style={styles.container}>
            <CheckBox
            checked={checked}
            onPress={() => setChecked(!checked)}
            checkedColor="blue"
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