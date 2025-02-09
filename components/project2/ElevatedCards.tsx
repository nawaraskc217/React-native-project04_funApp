import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

function ElevatedCards(){

return(

    <View>
        <Text style={styles.headingText}> Elevated cards</Text>
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>
                    Tap
                </Text>
            </View>

            <View style={[styles.card,styles.cardElevated]}>
                <Text>
                    me
                </Text>
            </View>

            <View style={[styles.card,styles.cardElevated]}>
                <Text>
                    To
                </Text>
            </View>

            <View style={[styles.card,styles.cardElevated]}>
                <Text>
                    scroll
                </Text>
            </View>

            <View style={[styles.card,styles.cardElevated]}>
                <Text>
                    more.....
                </Text>
            </View>

            <View style={[styles.card,styles.cardElevated]}>
                <Text>
                    👨‍🦳👩‍🦰👱‍♂️
                </Text>
            </View>

        </ScrollView>
    </View>
)
    
}


const styles = StyleSheet.create({

  headingText : {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal : 8,
    textAlign: 'center'
  },
  container:{
    // flex: 1,
    // flexDirection: 'row',
    padding: 8


  },
  card: {
    flex: 1, alignItems: 'center',
     justifyContent: 'center',
width: 100, height: 100, borderRadius:4,
margin : 10, color : '#123456'
  },
  cardElevated : {
backgroundColor: '#234567',
shadowOpacity: 0.4,
shadowRadius : 2,
elevation: 120,
shadowColor: '#001aff',
    shadowOffset: {
        width: 1, height: 1
    }
  },
  

})

export default ElevatedCards
