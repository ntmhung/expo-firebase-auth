/**
 * Created by minhhung on 7/14/18.
 */
import React, {Component} from "react";
import {View, Text} from "react-native";
import axios from "axios";
import firebase from 'firebase';
import {FormLabel, FormInput, Button} from "react-native-elements";

const FIREBASE_ROOT_URL = 'https://us-central1-sample-one-time-password-969d8.cloudfunctions.net';

class SignInForm extends Component {

    state = {phone: '', code: ''};

    handleSubmit = async() => {
        const {phone, code} = this.state;
        try {
            let {data} = await axios.post(`${FIREBASE_ROOT_URL}verifyOneTimePassword`, {
                phone: phone,
                code: code
            });

            firebase.auth().signInWithCustomToken(data.token);

        } catch (error) {
            console.log(error);
        }

    };

    render() {
        return (
            <View>
                <View style={{marginBottom: 10}}>
                    <FormLabel>Enter phone number</FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={phone=>this.setState({phone})}
                    />
                </View>

                <View style={{marginBottom: 10}}>
                    <FormLabel>Enter OTP code</FormLabel>
                    <FormInput
                        value={this.state.code}
                        onChangeText={code=>this.setState({code})}
                    />
                </View>

                <Button
                    title="Submit"
                    onPress={this.handleSubmit.bind(this)}
                />
            </View>
        )
    }

}

export default SignInForm;
