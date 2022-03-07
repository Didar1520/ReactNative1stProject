import { Text, SafeAreaView, View, Button, StyleSheet, Pressable, Image, ScrollView } from "react-native"
import React from 'react';
import { Header } from "react-native/Libraries/NewAppScreen";
import { menu } from "./StyleMainMenu";
import MainButton from "../main-button/MainButton";
import HeaderNav from "../headerNav/headerNav";
import { useNavigation } from "@react-navigation/core";

const MainMenu = () => {
    const navigation = useNavigation()
    const otherImg = require('./img/hotel.png')
    const handleTouchNav=()=>{
        navigation.navigate('PhonePage')
    }
    return (
        <ScrollView style={menu.scrollView} >
        <View  >
                <HeaderNav propsText='Телефоны служб' />

            <View>
                <Text style={menu.title}>Медицина</Text>
            </View>
            <ScrollView style={menu.horizontalScroll} horizontal={true} >
                    <Pressable >
                        
                        <MainButton goToPhonePage={handleTouchNav} Style={menu.phone_button} propsText={'Единый телефон служб'} />
                    </Pressable>
                    <MainButton onPress={() => alert('sasa')} Style={menu.phoneButton_withoutText} />

            </ScrollView>
            <ScrollView style={menu.horizontalScroll} horizontal={true} >
                <MainButton Style={menu.phoneButton_withoutText} />
                <MainButton Style={menu.phoneButton_withoutText}/>

            </ScrollView>
            <ScrollView style={menu.horizontalScroll} horizontal={true} >
                <MainButton Style={menu.phoneButton_withoutText}  />
                <MainButton Style={menu.phoneButton_withoutText}/>

            </ScrollView>
            <ScrollView horizontal={true} style={{marginBottom:40}} >
                <MainButton Style={menu.phoneButton_withoutText}  />
                <MainButton Style={menu.phoneButton_withoutText} />

            </ScrollView>

            <ScrollView horizontal={true} style={{ marginBottom: 40 }} >
                <Pressable style={menu.addButton} >
                    <View >
                        <Image style={menu.phoneButton_image}
                           
                        />
                    </View>
                    <Text style={menu.addButton_text} >
                        +
                    </Text>

                </Pressable>
                <MainButton propsText={'Отель Rixos'} otherImg={otherImg} Style={menu.userPhoneButton} />
                <MainButton propsText={'Отель Rixos'} otherImg={otherImg} Style={menu.userPhoneButton} />


            </ScrollView>



            

        </View>
        </ScrollView>
    )
}




export default MainMenu