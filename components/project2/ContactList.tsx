import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contactListOfPeople = [
        {
          uid: 1,
          name: "Steve Jobs",
          status: "Active",
          imageUrl: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
          uid: 2,
          name: "John Doe",
          status: "Inactive",
          imageUrl: "https://randomuser.me/api/portraits/men/2.jpg"
        },
        {
          uid: 3,
          name: "Jane Smith",
          status: "Active",
          imageUrl: "https://randomuser.me/api/portraits/women/3.jpg"
        },
        {
          uid: 4,
          name: "Alice Brown",
          status: "Pending",
          imageUrl: "https://randomuser.me/api/portraits/women/4.jpg"
        }
      ];
      
    
      


  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={true}>

            {contactListOfPeople.map(({uid,name,status,imageUrl})=>(
                <View key={uid} style={styles.userCard}>

                    <Image source={{
                        uri: imageUrl
                    }}
                    style={styles.userImage}
                    />
                    <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                    </View>
                </View>
            ))}
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
         paddingHorizontal: 16, marginBottom: 4
    
  },
  userCard:{
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    marginBottom: 3,
    backgroundColor:'#5a445e', padding: 8, borderRadius:10
  },
  userImage:{
            width: 60, height:60, borderRadius: 60/2,
            margin: 14
  },


  userName:{
        fontSize: 16, fontWeight:'600',
        color: '#fc035e'


  },
  userStatus:{
 fontSize: 12, fontWeight:'600',
        color: '#abc7c4'
  }

});


