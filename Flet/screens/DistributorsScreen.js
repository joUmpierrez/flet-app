import React from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';

export default function DistributorsScreen() {
  return(
    <ScrollView style={styles.container}>
      <Text>Aca va todo lo de la pantalla Distributors</Text>
    </ScrollView>
  );
}

DistributorsScreen.navigationOptions = {
  title: 'Distributors',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
