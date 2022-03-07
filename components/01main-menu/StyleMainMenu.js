import { StyleSheet, StatusBar} from "react-native"

export const menu = StyleSheet.create({
   
    SafeAreaView:{
        paddingTop:58,
        paddingBottom:74,
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16
        // paddingTop: StatusBar.currentHeight
    },
    scrollView:{
        // horizontal: true
        // flexGrow:1
        
    },
    horizontalScroll:{
        marginBottom: 98
    },
    border:{
        borderWidth: 2,
        borderColor: "red",
        borderStyle: "solid",
    },
  
    title: {
        borderRadius: 2,
        fontSize: 24,
        color: 'black',
        fontWeight: '700',
        marginBottom: 24

    },
 
    phone_button: {
        backgroundColor: "#59A4F2",
        height: 83,
        width: 250,
        left: 0,
        top: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingTop: 16,
        paddingRight: 20,
        paddingBottom: 16,
        paddingLeft: 20,
        flexDirection:"row",
        marginRight: 20,
    },
    phoneButton_withoutText:{
        backgroundColor: "#59A4F2",
        height: 83,
        width: 223,
        left: 0,
        top: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingTop: 16,
        paddingRight: 20,
        paddingBottom: 16,
        paddingLeft: 20,
        flexDirection: "row",
        marginRight: 20,
    },
    phone_text:{
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 16,
        color: "#FFFFFF",
        flexShrink: 1
    },
    footer: {
        color: 'red'

    },
    phoneButton_image:{
        marginRight:18
    },

    addButton: {
        borderWidth: 1,
        borderColor: "#F1564A",
        borderStyle: "dashed",
        boxSizing: "border-box",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        width: 83,
        height: 83,
        alignItems: 'center',
        justifyContent: "center",
        marginRight: 20,
        
        },
    addButton_text:{
        color: '#F1564A',
        fontSize: 35
    },
    regularButton: {
        color: 'red'

    },
    userPhoneButton:{
        backgroundColor: "#59A4F2",
        height: 83,
        width: 159,
        left: 0,
        top: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingTop: 16,
        paddingRight: 20,
        paddingBottom: 16,
        paddingLeft: 20,
        flexDirection: "row",
        marginRight: 20,
    },

});