import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending Places</Text>
      
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://media.digitalnomads.world/wp-content/uploads/2021/07/20115822/kathmandu-digital-nomads.jpg',
          }}
          style={styles.cardImage}
        />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Nepal - BKT</Text>
          <Text style={styles.cardLabel}>Kathmandu</Text>
          <Text style={styles.cardDesc}>
            Kathmandu, officially the Kathmandu Metropolitan City, is the seat of the federal government and the most populous city in Nepal. 
          </Text>
          <Text style={styles.cardFooter}>12 min ago</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    
    backgroundColor: '#f8f8f8',
  },
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical: 10,
  },
  cardElevated: {
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardImage: {
    height: 180,
    width: '100%',
  },
  cardBody: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  cardLabel: {
    fontSize: 16,
    color: '#555',
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    lineHeight: 20, ///line gap
  },
  cardFooter: {
    fontSize: 12,
    color: '#888',
    textAlign: 'right',
  },
});
