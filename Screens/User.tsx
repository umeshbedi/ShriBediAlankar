import { Button, StyleSheet, Text, View, ToastAndroid, Alert, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import firestore from '@react-native-firebase/firestore'
const fireData = firestore()
import AsyncStorage from '@react-native-async-storage/async-storage'
import { signUp } from '../components/signIn'
import MyButton from '../components/MyButton'
import { Color } from '../components/myTheme'


GoogleSignin.configure({
    scopes: [], // what API you want to access on behalf of the user, default is email and profile
    webClientId: '446699533292-ich0j59g4a0ccdhgirb1q3na6hn53658.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
});


export default function User() {
    const [localUser, setLocalUser] = useState(null)
    const [isActive, setIsActive] = useState<number>(0)
    async function getLocalUser() {
        await AsyncStorage.getItem('User', (err, res: any) => {
            const tempLocalUser = JSON.parse(res)
            if (tempLocalUser != null) {
                fireData.doc(`Users/${tempLocalUser.id}`)
                    .onSnapshot((snap: any) => {
                        setLocalUser(snap.data())
                    })
            }
            else if (err) {
                Alert.alert("Error", err.message)
            }
            else { signUp() }
        })
    };

    useEffect(() => {
        getLocalUser()
    }, [])

    async function Signout() {
        await GoogleSignin.signOut().then(() => {
            AsyncStorage.removeItem('User', () => {
                ToastAndroid.show(
                    'Signed Out Successfully!',
                    ToastAndroid.LONG,
                );
                setLocalUser(null);
            })
        })
    }

    function UserInfo() {
        return (
            <>
                <Text>This is User Section</Text>
            </>
        )
    }
    function Favouite() {
        return (
            <>
                <Text>This is Favourite Section</Text>
            </>
        )
    }
    function OrderHistory() {
        return (
            <>
                <Text>This is Order Section</Text>
            </>
        )
    }
    function PaymentHistory() {
        return (
            <>
                <Text>This is Payment Section</Text>
            </>
        )
    }


    const ButtonArr = [
        { text: "User Info", element: () => <UserInfo /> },
        { text: "My Favouites", element: () => <Favouite /> },
        { text: "Order History", element: () => <OrderHistory /> },
        { text: "Payment History", element: () => <PaymentHistory /> },

    ]

    const [section, setSection] = useState(<UserInfo />)

    return (
        <View>
            <Header />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingBottom: "5%", paddingLeft: "5%" }}>
                <View style={{ paddingRight: 30, flexDirection: 'row' }}>
                    {ButtonArr.map((item, index) => (
                        <View style={{ marginRight: 10 }} key={index}>
                            <MyButton text={item.text} color={index == isActive ? 'white' : 'grey'} backgroundColor={index == isActive ? Color.gold : "white"} onPress={() => { setIsActive(index); setSection(item.element) }} />
                        </View>
                    ))}
                </View>
            </ScrollView>
            <View>
                {section}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})