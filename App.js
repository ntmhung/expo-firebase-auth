import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';



export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyB3CaVRwGQsga_igJNyFjKMou82RkrTq-8",
      authDomain: "sample-one-time-password-969d8.firebaseapp.com",
      databaseURL: "https://sample-one-time-password-969d8.firebaseio.com",
      projectId: "sample-one-time-password-969d8",
      storageBucket: "sample-one-time-password-969d8.appspot.com",
      messagingSenderId: "663293983340"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm/>
        <SignInForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
