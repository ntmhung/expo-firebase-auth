/**
 * Created by minhhung on 7/13/18.
 */
import React, {Component} from "react";
import {View, Text} from "react-native";
import axios from "axios";
import {FormLabel, FormInput, Button} from "react-native-elements";

const FIREBASE_ROOT_URL = 'https://us-central1-sample-one-time-password-969d8.cloudfunctions.net';

class SignUpForm extends Component {
    state = {phone: ''};

    /**
     * Arrow function do not need to bind(this) to get proper this (the class) inside function
     *
     * Async keyword let Babel knows the function contains async code
     *
     * Await keyword tell Babel that the function return a promise, then do not execute function simultaneously
     */
    handleSubmit = async() => {
        try {
            await axios.post(`${FIREBASE_ROOT_URL}/createUser`, {phone: this.state.phone});

            await axios.post(`${FIREBASE_ROOT_URL}/requestOneTimePassword`, {phone: this.state.phone})
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
                <Button
                    title="Submit"
                    onPress={this.handleSubmit.bind(this)}
                />
            </View>
        )
    }

}

export default SignUpForm;
