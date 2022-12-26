import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Button, Alert } from 'react-native'
import React, { useCallback, useEffect, useReducer, useState } from 'react'
import colors from '../../constants/colors'

import { useDispatch } from 'react-redux';
import { signUp } from '../store/actions/auth.action';
import Input from '../components/Input';



const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";
const formReducer = (state, action) => {
    if(action.type === FORM_INPUT_UPDATE) {
        const updateValues = {
            ...state.inputValues,
            [action.input]: action.isValid
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        };
        let updatedFormIsValid = true
        for(const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities [key]
        };
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updateValues,
        };
    };
    return state;
};

const AuthScreen = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState(null);

  const [formState, formDispatch] = useReducer(formReducer, {
    inputValues:{
        email: "",
        password: "",
    },
    inputValidities:{
        email: false,
        password: false,
    },
    formIsValid: false,
  });


  useEffect (() => {
    if (error) {
        Alert.alert("Ocurrió un error", error, [{text: "Ok"}])
    }
  }, [error]);



  const handleSignUp = () => {
    dispatch (signUp(email, password))
  };


  const onInputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) =>{
        formDispatch({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier,
        })
    },
    [formDispatch],
  );



  return (
    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={50} style={styles.screen}>
        <View style={styles.container}>
            <Text style={styles.title}>Dreams Graphics: Login</Text>
            <View>
                <Input 
                id="email"
                label= "Email"
                keyboardType="email-address"
                placeholder="Ingresa tu correo electrónico"
                required
                autoCapitalize="none"
                errorText = "Por favor ingresá un email válido"
                onInputChange={onInputChangeHandler}
                initialValue=""
                />

               <Input
                id="password"
                label="Password"
                keyboardType="default"
                placeholder="Ingresa tu contraseña"
                required
                secureTextEntry
                minlength={6}
                autoCapitalize='none'
                //onChangeText={setPassword}
                initialValue=""
                />

            </View>

            <View style={styles.button}>
                <Button title='Registrarme' color={colors.inicial} onPress={handleSignUp} />
            </View>

        </View>
    </KeyboardAvoidingView>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },

    container: {
        width: "80%",
        maxWidth: 400,
        backgroundColor: "#fff",
        height: "auto",
        padding: 20,

    },

    title: {
        fontSize: 24,
        marginBottom: 18,
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    button:{
        marginTop:10,
    }
    
})