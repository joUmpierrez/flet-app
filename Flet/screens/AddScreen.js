import React from 'react';
import { ScrollView, StyleSheet, Text, Button } from 'react-native';

export default function AddScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>AJAAJAJ amigooo</Text>
    </ScrollView>
  );
}

AddScreen.navigationOptions = {
  title: 'Add',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
