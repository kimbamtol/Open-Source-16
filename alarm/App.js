import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Task from './components/Task';
import SignScreen from './components/Sign';
import LogScreen from './components/Log';
import TestScreen from './crawls/Test';
import BackgroundAnimation from './anime/backgroundanime';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

const __USER = '__login__';

async function logout(navigation) {
  await AsyncStorage.removeItem(__USER);
  navigation.push('Home');

}

async function loginCheck(navigation) {
  // 비동기 작업 수행
  try {
    const value = await AsyncStorage.getItem(__USER);
    if (value != null) {
      setTimeout(() => {
        navigation.replace('Menu', { currentUser: value });
      }, 4000);
    }
    else {
      setTimeout(() => {
        navigation.replace('Log');
      }, 4000);

    }
  } catch (error) {
    console.error(error);
  }
}


function HomeScreen({ navigation }) {
  useEffect(
    () => {
      loginCheck(navigation);
    },
    []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'black' }}>
      <Text style={{ textAlign: 'center', fontSize: 60, color: '#fff' }}>Loading...</Text>
      <Text style={{ textAlign: 'center', fontSize: 15, color: '#fff' }}>로딩이 너무 길어지면 앱을 재시작해주세요.</Text>
      <BackgroundAnimation />
    </View>
  );

}
function MenuScreen({ route, navigation }) {
  const { currentUser } = route.params

  return (
    <ImageBackground source={require('./assets/images/background1.jpg')} style={{ flex: 1, width: '100%', height: '100%' }}>
      <View style={{ height: '100%', flexDirection: 'column', justifyContent: "space-around", alignItems: 'center' }}>
        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Main', { currentUser: currentUser })}>
          <Text style={styles.buttonText}>main</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Test')}>
          <Text style={styles.buttonText}>weather</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => logout(navigation)}>
          <Text style={styles.buttonText}>logout</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

function MainScreen({ route, navigation }) {
  const { currentUser } = route.params
  return (
    <Task name={currentUser} />
  )
}

const Stack = createNativeStackNavigator();

function App() {
  // 앱 시작시 Firebase 및 FCM 초기화
  useEffect(() => {
    const initializeFirebase = async () => {
      try {
        await messaging().registerDeviceForRemoteMessages();
        console.log('Firebase 성공');
      } catch (error) {
        console.error('Firebase 오류:', error);
      }
    };

    initializeFirebase();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: true }} name="Test" component={TestScreen} />
        <Stack.Screen name="Log" component={LogScreen} />
        <Stack.Screen options={{ headerShown: true }} name="Main" component={MainScreen} />
        <Stack.Screen options={{ headerShown: true }} name="Sign" component={SignScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  link: {
    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 10,
    width: '80%',
    height: '10%',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 50,
  },
});

export default App;
