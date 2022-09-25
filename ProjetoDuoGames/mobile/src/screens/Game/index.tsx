
import { Background } from '../../components/Background';
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles';
import { useRoute, useNavigation } from '@react-navigation/native'
import { RouteParams } from '../../@types/navigation';
import { View, TouchableOpacity,Image,FlatList,Text } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { DuoCard ,DuoCardProps} from '../../components/DuoCard';
import {useEffect, useState} from "react"


export function Game() {

  const [duos,setDuo] = useState<DuoCardProps[]>([]);

  const route = useRoute();
  const game = route.params as RouteParams;
  const navegation = useNavigation();

  function handGolBack() {
    navegation.goBack();

  }
  useEffect(() => {
    //Recomendando usar o Ip em vez do termo localhost quando está fazendo no Mobile
    fetch(`http://192.168.0.106:3333/game/${game.id}/ads`).then(response => response.json())
    .then(data => setDuo(data));
  }, []);


  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handGolBack}>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={24}
            />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />
          <View />
        </View>
        <Image
          source={{uri:game.bannerUrl}}
          style={styles.cover}
          resizeMode="cover"
        />
        <Heading
          title={game.title}
          subtitle="Conecte-se e comece a jogar!"
        />
        
        <FlatList
          data ={duos}
          keyExtractor={item=> item.id}
          renderItem={({item})=>(
            <DuoCard data ={item}
            onConnect={() => {}}
            
            
            />
          )}
          
          horizontal
          style={styles.containerList}
          contentContainerStyle={[duos.length>0? styles.contentList :styles.emptyTextContent]}
          showsVerticalScrollIndicator = {false}
          ListEmptyComponent ={()=>(
            
            <Text style = {styles.emptyText}>
              Não há anúncios publicados :(
                
            </Text>
            
          )}
          
        />
        
          
      </SafeAreaView>
    </Background>
  );
}