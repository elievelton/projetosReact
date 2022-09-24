
import { Background } from '../../components/Background';
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles';
import { useRoute } from '@react-navigation/native'
import { RouteParams } from '../../@types/navigation';
import {View, TouchableOpacity, Image} from 'react-native'
import {Entypo} from'@expo/vector-icons'
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png';


export function Game() {



  const route = useRoute();
  const game = route.params as RouteParams;


  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Entypo
              name = 'chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={24}
            />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo}/>
        </View>
      </SafeAreaView>
    </Background>
  );
}