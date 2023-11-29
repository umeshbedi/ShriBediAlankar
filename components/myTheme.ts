import { TextStyle, ViewStyle } from "react-native"

export const Color = {
    gold: "#D9AA55",
    lightGold: "#F2D16D",
    brown: "#733822",
    lightBrown: "#A66038",
    mud: "#898C74",
    lightGrey: "#f6f6f5",
    lightGrey2: "#B3AFA5",
    grey: "#827D76",
    greyWhite: "#f8f8f8",
    dark: "#26201A",
    yellow:"#feba00"
}
type fontType = {
    heading: TextStyle,
    para: TextStyle,
    subHeading: TextStyle
}
export const font: fontType = {
    heading: {
        fontSize: 23,
        fontWeight: "800",
        marginVertical: 5
    },
    para: {
        fontSize: 16,
    },
    subHeading: {
        fontSize: 17,
        fontWeight: "700",
    },
}

type viewType = {
    container: ViewStyle,
    input: ViewStyle
}
export const view: viewType = {
    container: {
        padding: "5%"
    },
    input: {
        paddingHorizontal: "5%"
    }
}