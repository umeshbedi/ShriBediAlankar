import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'


type btnType = {
    text?:string | number,
    index?: number,
    backgroundColor?: 'grey' | string,
    color?: 'white' | string
    onPress?:()=>void
}

export default function MyButton({ text, index, backgroundColor, color, onPress }: btnType) {

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
                textAlign:'center'
            }}
            >{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})