import React, {Component} from 'react';
import {DatePickerIOS, View, StyleSheet, TimePickerAndroid, DatePickerAndroid, Platform, TouchableOpacity, Text} from 'react-native';

export default class TimePickScreen extends Component {
  constructor(props) {
    super(props);
    this.state= {
      hour: null,
      minute: null,
      year: null,
      month: null,
      day: null,
      lat: null,
      lon: null,
      chosenDate: new Date(),
    }
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    let minutes = newDate.getMinutes();
    let year = newDate.getFullYear();
    let date = newDate.getDate();
    let month = newDate.getMonth()+1;
    let hours;
    if(newDate.getHours().toString().length == 1 ){
      console.log('entre');
      hours = '0'+newDate.getHours().toString();
    }
    else{
      hours = newDate.getHours();
    }
    this.setState({
      chosenDate: newDate,
      hour: newDate.getHours(),
      minute: minutes,
      year: year,
      day: date,
      month: month,
    });
  }

  componentDidMount(){
    this.setState({
      lat: this.props.navigation.getParam('lat'),
      lon: this.props.navigation.getParam('lon'),
    });
  }

  sendDateLoc(){
    this.props.navigation.navigate('OriginDestiny',{
      lat: this.state.lat,
      lon: this.state.lon,
      hour: this.state.hour,
      minute: this.state.minute,
      year: this.state.year,
      month: this.state.month,
      day: this.state.day,
    });
  }



  async sarasa(){
    try {
        const {action, hour, minute} = await TimePickerAndroid.open({
          hour: 12,
          minute: 0,
          is24Hour: false, // Will display '2 PM'
        });
        if (action !== TimePickerAndroid.dismissedAction) {
          if(minute.toString().length == 1){
            let minuto = '0'+minute.toString();
            this.setState({
              hour: hour,
              minute: minuto,
            });
          }
          else{
            this.setState({
              hour: hour,
              minute: minute,
            });
          }
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
          date: new Date(),
        });
        if (action !== DatePickerAndroid.dismissedAction) {
          this.setState({
            year: year,
            month: month + 1,
            day: day,
          });
        }
      } catch ({code, message}) {
        console.warn('Cannot open date picker', message);
      }
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
                      <Text style={styles.blackfont}>SELECT TIME</Text>
                  </TouchableOpacity>
                  <View style={styles.dateContainer}>
                      {this.state.hour == null ? null : <Text style={styles.dateFont}>{this.state.hour} : {this.state.minute}</Text>}
                  </View>
                </View>
                <View style={{flex: 1}}>
                  <TouchableOpacity style={styles.button} onPress={this.sarasa2.bind(this)}>
                      <Text style={styles.blackfont}>SELECT DATE</Text>
                  </TouchableOpacity>
                  <View style={styles.dateContainer}>
                      {this.state.day == null ? null : <Text style={styles.dateFont}>{this.state.day} / {this.state.month} / {this.state.year}</Text>}
                  </View>
                </View>
            </View>
            }
            
        </View>
        <View style={styles.footer}>
        <TouchableOpacity style={styles.purplebutton} onPress={this.sendDateLoc.bind(this)} >
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
      backgroundColor: 'orange',
      borderRadius: 12,
      width: '80%',
      paddingVertical: '5%',
      padding: '4%',
  },
  dateContainer: {
    paddingTop: '25%',
    width: '100%',

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
    fontSize: 16,
  },
  blackfont: {
    color: 'black',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dateFont: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  }
});