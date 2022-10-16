import { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, FlatList } from "react-native";  
import {  Task } from "../Task";
import { styles } from './styles'

export function Home() {

    const [participant, setParticipant] = useState<string[]>([])
    const [participantName, setParticipantName] = useState('')
    const [count,setCount] = useState(0)

    function adicionarTarefa() {
        setParticipant((prevState) => [...prevState, participantName])
        setCount(count + 1)
        setParticipantName('')
        
    }
    function excluirTarefa(name:String) {
      setParticipant((prevState) => prevState.filter(participant => participant !== name))
      setCount(count - 1)
    }
    
    return (
        <View>
            <View style={styles.corFundo}>
                <Image
                    source={require('../../assets/Logo.png')}
                    style={styles.imagem}
                />
                <View style={styles.flex}>
                    <TextInput
                        //onChangeText={text => setParticipantsName(text)}
                        onChangeText={setParticipantName}
                        value={participantName}
                        style={styles.textInput}
                        placeholder='Adicione uma nova tarefa'
                    />
                    <TouchableOpacity style={styles.button} onPress={adicionarTarefa}>
                        <Image source={require('../../assets/Layer.png')} />

                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.corLista}>
                <Text style={styles.corAdicionados}>{`Criados ${count}`}</Text>
                <FlatList
                    data={participant}
                    renderItem={({ item }) =>(
                        <Task
                            name={item}
                            onRemove={() => excluirTarefa(`${item}`)}
                        />
                        
                    )}
                />
            </View>
        </View>

    );
}