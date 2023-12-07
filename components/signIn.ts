import { Button, StyleSheet, Text, View, ToastAndroid, Alert } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import firestore from '@react-native-firebase/firestore'
const fireData = firestore()
import AsyncStorage from '@react-native-async-storage/async-storage'


GoogleSignin.configure({
    scopes: [], // what API you want to access on behalf of the user, default is email and profile
    webClientId: '446699533292-ich0j59g4a0ccdhgirb1q3na6hn53658.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
   });



export async function signUp() {

        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();

            const User = {
                id: userInfo.user.id,
                name: userInfo.user.name,
                email: userInfo.user.email,
                photo: userInfo.user.photo,
                userRole: 'Author',
                createdAt: firestore.FieldValue.serverTimestamp(),
                favourites: [],
                cart:[],
                paymentHistory:[],
                orderHistory:[]
            }

            const checkUid = await fireData.collection('Users').doc(`${User.id}`).get()

            // console.log(checkUid.exists)

            if (checkUid.exists) {
                await fireData.collection('Users').doc(`${User.id}`).get()
                    .then(snap => {
                        // console.log(snap.data());
                        AsyncStorage.setItem('User', JSON.stringify(snap.data()))
                       
                        ToastAndroid.show(
                            'Signed In Successfully!',
                            ToastAndroid.LONG,
                        );
                    })


            } else {
                await fireData.collection('Users').doc(`${User.id}`).set(User)
                    .then(() => {
                        fireData.collection('Users').doc(`${User.id}`).get().then((snap) => {
                            AsyncStorage.setItem('User', JSON.stringify(snap.data()))
                            
                            ToastAndroid.show(
                                'New User Registered Successfully!',
                                ToastAndroid.LONG,
                            );
                        })
                    })
            }

        } catch (error:any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                Alert.alert("Error", error.message)
                // user cancelled the login flow
                console.log(error)
            } else if (error.code === statusCodes.IN_PROGRESS) {
                Alert.alert("Error", error.message)
                // operation (e.g. sign in) is in progress already
                console.log(error)
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                Alert.alert("Error", error.message)
                // play services not available or outdated
                console.log(error)
            } else {
                Alert.alert("Error", error.message)
                // some other error happened
                console.log(error)
            }
        }
    };