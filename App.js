import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MainMenu from './components/01main-menu/MainMenu';
import { menu } from './components/01main-menu/StyleMainMenu';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhonePage from './components/PhoneCards/phonePage';
const Stack = createNativeStackNavigator();

const App = () => {



  return (

    <NavigationContainer>
      <SafeAreaView style={menu.SafeAreaView} >
        {/* <ScrollView style={menu.scrollView}> */}
     
        
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          <Stack.Screen name={"MainMenu"} component={MainMenu}   />

          <Stack.Screen name={"PhonePage"} component={PhonePage} />


          </Stack.Navigator>
        {/* </ScrollView> */}
      </SafeAreaView>
    </NavigationContainer>


    // <SafeAreaView style={menu.SafeAreaView} >
    //   <ScrollView style={menu.scrollView}
    //   // contentInsetAdjustmentBehavior="automatic"
    //   >
    //     <MainMenu />

    //   </ScrollView>
    // </SafeAreaView>







  );
};




export default App;
