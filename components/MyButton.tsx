import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

type btnType = {
    text?: string | number,
    index?: number,
    backgroundColor?: 'grey' | string,
    color?: 'white' | string,
    icon?: string,
    onPress?: () => void
}

export default function MyButton({ text, index, backgroundColor, color, onPress, icon }: btnType) {

    return (
        <TouchableOpacity
            activeOpacity={.5}
            style={{
                backgroundColor: backgroundColor,
                paddingHorizontal: 17,
                paddingVertical: 10,
                borderRadius: 30,
            }}
            onPress={onPress}
        >
            <Text style={{
                color: color,
                textAlign: 'center'
            }}
            >{icon!=undefined?<FontAwesome6 name={icon} />:null} {text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})