import { View,TouchableOpacity,Text} from 'react-native';
import {GameController} from 'phosphor-react-native'

import { styles } from './styles';
import{DuoInfo} from'../DuoInfo'
import { THEME } from '../../theme';

export interface DuoCardProps{
    id: string;
    name: string;
    hoursStart: string;
    hoursEnd: string;    
    useVoiceChannel:boolean;
    weekDays: string[],
    yearsPlaying:number;

}
interface Props{
    data : DuoCardProps,
    onConnect:()=>void;
}

export function DuoCard({data, onConnect}:Props) {
  return (
    <View style={styles.container}>
        <DuoInfo
            label='Nome'
            value={data.name}
        />
        <DuoInfo
            label='Tempo de Jogo'
            value={`${data.yearsPlaying} anos`}
        />
        <DuoInfo
            label='Disponibilidade'
            value={`${data.weekDays.length} dias \u2022 ${data.hoursStart} - ${data.hoursEnd}`}
        />
        <DuoInfo
            label='Chamada de audio'
            value={data.useVoiceChannel? "Sim":"Não"}
            colorValue={data.useVoiceChannel? '#2f2':THEME.COLORS.ALERT}
        />
        <TouchableOpacity style = {styles.button} onPress={onConnect}>
            <GameController color={THEME.COLORS.TEXT} size={20}/>
            
        <Text style={styles.buttonTitle}>
            Conectar
        </Text>
        </TouchableOpacity>
    </View>
  );
}