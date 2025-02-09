import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const FlatCard = () => {
  return (
    <View>

      <Text style={styles.headingText}>FlatCard</Text>
    
      <View style={styles.container}>

        <View style={[styles.cardOne,styles.card]}>
          <Text>RED</Text>
        </View>

        <View style={[styles.cardTwo,styles.card]}>
          <Text>Green</Text>
        </View>

        <View style={[styles.cardThree,styles.card]}>
          <Text>Blue</Text>
        </View>

        <View style={[styles.cardOne,styles.card]}>
          <Text>RED</Text>
        </View>


        <View style={[styles.cardOne,styles.card]}>
          <Text>RED</Text>
        </View>

        </View>

    </View>


  );
};

const styles = StyleSheet.create({

  headingText : {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal : 8,
    textAlign: 'center'
  },

  container:{
      flex: 1,
      flexDirection: 'row',
      padding: 8
  },
  card: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
      width: 110,
      height: 100,
      borderRadius: 4,
      margin: 8
  },

  cardOne: {
      backgroundColor: '#742717'
  },
  cardTwo: {
    backgroundColor: '#001aff'
},
cardThree: {
  backgroundColor: '#00ff3c'
}

});

export default FlatCard;
