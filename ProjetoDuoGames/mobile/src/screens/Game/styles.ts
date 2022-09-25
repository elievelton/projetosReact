import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  header:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:32,
    marginTop:28,
    justifyContent:'space-between',
      },
    logo:{
      width: 102,
      height: 60,
    },
    cover:{
      width: 311,
      height: 160,
      borderRadius:8,
      marginTop:32,
    },
    containerList:{
      width: "100%",

    },
    contentList:{
      paddingLeft:32,
      paddingRight:64,
      alignItems: "flex-start",

    },
    emptyText: {
      color: THEME.COLORS.CAPTION_300,
      fontSize: THEME.FONT_SIZE.SM,
      fontFamily: THEME.FONT_FAMILY.REGULAR
    },
    emptyTextContent: {

      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    robor:{
      flex:1,
      paddingLeft:10,
    }

});