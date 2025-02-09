import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function Nawaras() {

  const [click,setClick]= useState(0)

  function handlePress(){
   
   
       setClick(click+1)
     
    
  }

  return (
<View>
    <View style={styles.container}>
    <TouchableOpacity  onPress={handlePress}>
      <Text style={styles.text}>Clicks are: {click}</Text>
    </TouchableOpacity>


   
  </View>
  <View style={styles.mainView}>

<View style={styles.card}>
  <Text style={styles.red}>RED</Text>
</View>

<View style={styles.card}>
  <Text style={styles.green}>Green</Text>
</View>

<View style={styles.card}>
  <Text style={styles.red}>RED</Text>
</View>

<View style={styles.card}>
  <Text style={styles.green}>Green</Text>
</View>

</View>
  </View>
  )
}

const styles=StyleSheet.create({
  card: {
width: 100, height: 500,
  },

  red: {
 backgroundColor: 'red', textAlign: 'center'
  },
   green:{
    backgroundColor: 'green',textAlign: 'center'
   },

  mainView:{
    flex: 1,
    flexDirection: 'row',

  },
  container:{
   alignItems: 'center'


  },
  text : {
    textAlign: 'center'
  }
})

