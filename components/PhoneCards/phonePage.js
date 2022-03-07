import { Button, ScrollView, Text, TouchableHighlight, View } from "react-native"
import React from 'react';
import { stylePP } from "./stylePhonePage";
import HeaderNav from "../headerNav/headerNav";
import { menu } from "../01main-menu/StyleMainMenu";

const PhonePage = () => {
    return (
        <ScrollView style={menu.scrollView} >
            <View >
                <HeaderNav propsText='Карточка телефона' />
                <View >
                    <Text style={stylePP.header_title}>Скорая помощь</Text>
                </View>
                <View style={stylePP.headerBottom_title}  >
                    <Text style={stylePP.headerBottom_text} >112</Text>
                    <TouchableHighlight
                        style={stylePP.header_button}>
                        {/* <Button 
                            title="ПОЗВОНИТЬ"
                            accessibilityLabel="Learn more about this button"
                            color= '#F1564A'
                        /> */}
                        <Text style={stylePP.headerBottom_buttonText}>Позвонить</Text>
                      
                    </TouchableHighlight>
                </View>

                <View>
                    <Text style={stylePP.headerBottom_descr} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et sed tempor, at magna purus quam sit id. Ut id aliquam molestie tortor, amet, suspendisse mi. Dictum viverra accumsan a proin amet. Amet, velit consequat enim urna, pellentesque in cursus auctor. Erat a, sapien, nisl id et. Egestas rhoncus, commodo convallis mauris.
                    </Text>
                </View>

                <View style={stylePP.footer}>
                    <Text style={stylePP.footer_title}>Причины вызова </Text>
                    <Text style={stylePP.footer_list}>
                        Причина 1
                    </Text>
                    <Text style={stylePP.footer_list}>
                        Причина 1
                    </Text>
                    <Text style={stylePP.footer_list}>
                        Причина 1
                    </Text>
                </View>

            </View>
        </ScrollView>
    )
}

export default PhonePage