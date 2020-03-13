import React, {Component} from 'react';
import {DatePickerIOS, View, StyleSheet, TimePickerAndroid, DatePickerAndroid, Platform, TouchableOpacity, Text} from 'react-native';

export default class TimePickScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {chosenDate: new Date()};

    this.setDate = this.setDate.bind(this);
  }

  async sarasa(){
    try {
        const {action, hour, minute} = await TimePickerAndroid.open({
          hour: 14,
          minute: 0,
          is24Hour: false, // Will display '2 PM'
        });
        if (action !== TimePickerAndroid.dismissedAction) {
          // Selected hour (0-23), minute (0-59)
        }
      } catch ({code, message}) {
        console.warn('Cannot open time picker', message);
      }
  }

  async sarasa2(){
    try {
        const {action, year, month, day} = await DatePickerAndroid.open({
          // Use `new Date()` for current date.
          // May 25 2020. Month 0 is January.
          date: new Date(2020, 4, 25),
        });
        if (action !== DatePickerAndroid.dismissedAction) {
          // Selected year, month (0-11), day
        }
      } catch ({code, message}) {
        console.warn('Cannot open date picker', message);
      }
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>

        </View>
        <View style={styles.body}>
            {Platform.OS === 'ios' ? 
                <DatePickerIOS
                date={this.state.chosenDate}
                onDateChange={this.setDate}
                />
              :
              <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                <TouchableOpacity style={styles.button} onPress={this.sarasa.bind(this)} >
                    <Text>asdasdas</Text>
                </TouchableOpacity>
                </View>
                <View style={{flex: 1}}>
                <TouchableOpacity style={styles.button} onPress={this.sarasa2.bind(this)}>
                    <Text>sdasdasd 2</Text>
                </TouchableOpacity>
                </View>
            </View>
            }
            
        </View>
        <View style={styles.footer}>
        <TouchableOpacity style={styles.purplebutton} >
          <Text style={styles.whitefont}>NEXT</Text>
        </TouchableOpacity>
        </View>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
    backgroundColor: "#e3e3e3"
  },
  header:{
      flex:1,
  },
  body:{
      flex: 8,
  },
  footer:{
      flex: 1,
  },
  button:{
      alignSelf: 'center',
      backgroundColor: 'blue',
  },
  purplebutton: {
    alignSelf: 'center',
    backgroundColor: '#3A0D5E',
    paddingHorizontal: '30%',
    paddingVertical: '5%',
    padding: '4%',
    borderRadius: 12,
    width: '95%',
  },
  whitefont: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
});