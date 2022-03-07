import { Text, SafeAreaView, View, Button, StyleSheet, Pressable, Image, ScrollView } from "react-native"
import React from 'react';
import { Header } from "react-native/Libraries/NewAppScreen";
import MainButton from "../main-button/MainButton";
import { styleHN } from "./styleHeaderNav";
import { menu } from "../01main-menu/StyleMainMenu";


const HeaderNav = ({ propsText }) => {

    return (
        <View style={styleHN.header} >
            <Image style={styleHN.headerButton_image}
                source={require('./images/arrow.png')}
            />
            <View style={styleHN.headerText}>
                <Text 
                 style={styleHN.header_text}
                    
                
                >
                    {propsText}
                </Text>
            </View>
        </View>


    )
}




export default HeaderNav