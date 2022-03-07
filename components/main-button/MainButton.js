import { Text, SafeAreaView, View, Button, StyleSheet, Pressable, Image, } from "react-native"
import React from 'react';
import { Header } from "react-native/Libraries/NewAppScreen";
import { menu } from "../01main-menu/StyleMainMenu";


const MainButton = (props) => {
    
    return (
        <View >
            <Pressable style={props.Style} onPress={props.goToPhonePage}>
                <View >
                    {
                        props.otherImg ? <Image style={menu.phoneButton_image} source={props.otherImg}
                        /> :  <Image style={menu.phoneButton_image}
                        source={require('../main-button/img/button_img.png')}
                    />
                    }
                   
                </View>
                <Text style={menu.phone_text} >
                    {props.propsText}
                </Text>

            </Pressable>
        </View>
    )
}

export default MainButton