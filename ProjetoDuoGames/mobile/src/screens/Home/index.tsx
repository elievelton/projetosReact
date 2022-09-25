import React, { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import { styles } from './styles';
import logoImage from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { SafeAreaView } from 'react-native-safe-area-context'

import { useNavigation } from '@react-navigation/native'



export function Home() {

  const [games, setgames] = useState<GameCardProps[]>([]);

  const navegation = useNavigation();

  function handleopenNavigation({ id, title, bannerUrl }: GameCardProps) {

    navegation.navigate("game", { id, title, bannerUrl });
  }

  useEffect(() => {
    //Recomendando usar o Ip em vez do termo localhost quando está fazendo no Mobile
    fetch("http://192.168.0.106:3333/game").then(response => response.json()).then(data => setgames(data));
  }, []);
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImage} style={styles.logo}></Image>
        <Heading title='Encontre seu Duo' subtitle='Selecione o game que deseja jogar...' />
        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={() => handleopenNavigation(item)}

            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}


        />

      </SafeAreaView>



    </Background>
  );
}
