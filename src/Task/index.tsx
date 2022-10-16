import { TouchableOpacity, View, Text, Image } from "react-native";
import { styles } from "./styles"
import { useState } from "react"
import { CheckBox } from "react-native-elements";

type Props = {
    name: String
    onRemove: () => void

}


export function Task({ name, onRemove }: Props) {

    const [checked, setChecked] = useState(false)
    const [count1, setCount1] = useState(0)


    function checkedes() {
        if (!checked) {

            setCount1(count1 + 1)
        } else {
            setCount1(count1 - 1)
        }
    }

    return (
        <>
            <View style={styles.container}>
                <CheckBox
                    checked={checked}
                    onPress={() => setChecked(!checked)}
                    onPressIn={checkedes}
                    checkedColor="blue"
                    checkedIcon={'dot-circle-o'}
                    uncheckedIcon={<Image source={require('../../assets/check.png')}/>}
                />
                <View style={styles.text}>
                    <Text style={!checked ? { color: "#FFFFFF" } : { textDecorationLine: "line-through" }}>
                        {name}
                    </Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={onRemove}>
                    <Image source={require('../../assets/trash.png')} />
                </TouchableOpacity>


            </View>
        </>
    );
}
