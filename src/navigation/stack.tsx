import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../utils/constants';
import BottomTabRouter from './bottom';
import {NavigationContainer} from '@react-navigation/native';
import StartScreen from '../screens/start';
import AllTrainingsScreen from '../screens/AllTrainingsScreen.tsx';
import {TouchableOpacity} from 'react-native';
import HeadBackSvg from '../assets/svg/HeadBackSvg.tsx';
import {View, StyleSheet, ScrollView, Text, ImageBackground} from 'react-native';
import CreateTrainingScreen from '../screens/CreateTrainingScreen.tsx';
import TrainingDetainlAddScreen from '../screens/TrainingDetainlAddScreen.tsx';
import StoryScreen1 from '../screens/SingleStoryScreen1.tsx';
import StoryScreen3 from '../screens/StoryScreen3.tsx';
import StoryScreen2 from '../screens/StoryScreen2.tsx';
import TrainingAddedSCreen from '../screens/TrainingAddedSCreen.tsx';
import GameScreen from '../screens/GameScreen.tsx';
import UWinScreen from '../screens/UWinScreen.tsx';
import TimeEndScreen from '../screens/TimeEndScreen.tsx';

// import Loader from '../screens/loader';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name={SCREENS.Loader} component={Loader} /> */}
        <Stack.Screen name={SCREENS.Start} component={StartScreen} />
        <Stack.Screen name={SCREENS.BottomRouter} component={BottomTabRouter} />
        <Stack.Screen
          name={SCREENS.AllTrainingsScreen}
          component={AllTrainingsScreen}
          options={({ navigation, route }) => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: '#000'
            },
            // title: "Тренировки",
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
              >
                <HeadBackSvg/>
                <Text style={{ fontSize: 16, marginLeft: 5, color: '#fff', fontWeight: 'bold' }}>Back</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name={SCREENS.CreateTrainingScreen}
          component={CreateTrainingScreen}
          options={({ navigation, route }) => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: '#000'
            },
            // title: "Тренировки",
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
              >
                <HeadBackSvg/>
                <Text style={{ fontSize: 16, marginLeft: 5, color: '#fff', fontWeight: 'bold' }}>Back</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name={SCREENS.TrainingDetainlAddScreen}
          component={TrainingDetainlAddScreen}
          options={({ navigation, route }) => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: '#000'
            },
            // title: "Тренировки",
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
              >
                <HeadBackSvg/>
                <Text style={{ fontSize: 16, marginLeft: 5, color: '#fff', fontWeight: 'bold' }}>Back</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name={SCREENS.StoryScreen1}
          component={StoryScreen1}
          options={({ navigation, route }) => ({
            headerShown: false,
            headerStyle: {
              backgroundColor: '#000'
            },
            // title: "Тренировки",
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
              >
                <HeadBackSvg/>
                <Text style={{ fontSize: 16, marginLeft: 5, color: '#fff', fontWeight: 'bold' }}>Back</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name={SCREENS.StoryScreen3}
          component={StoryScreen3}
          options={({ navigation, route }) => ({
            headerShown: false,
            headerStyle: {
              backgroundColor: '#000'
            },
            // title: "Тренировки",
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
              >
                <HeadBackSvg/>
                <Text style={{ fontSize: 16, marginLeft: 5, color: '#fff', fontWeight: 'bold' }}>Back</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name={SCREENS.StoryScreen2}
          component={StoryScreen2}
          options={({ navigation, route }) => ({
            headerShown: false,
            headerStyle: {
              backgroundColor: '#000'
            },
            // title: "Тренировки",
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
              >
                <HeadBackSvg/>
                <Text style={{ fontSize: 16, marginLeft: 5, color: '#fff', fontWeight: 'bold' }}>Back</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name={SCREENS.TrainingAddedSCreen}
          component={TrainingAddedSCreen}
          options={({ navigation, route }) => ({
            headerShown: false,
            headerStyle: {
              backgroundColor: '#000'
            },
            // title: "Тренировки",
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
              >
                <HeadBackSvg/>
                <Text style={{ fontSize: 16, marginLeft: 5, color: '#fff', fontWeight: 'bold' }}>Back</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name={SCREENS.GameScreen}
          component={GameScreen}
          options={({ navigation, route }) => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: '#000'
            },
            // title: "Тренировки",
            headerTitle: 'f',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
              >
                <HeadBackSvg/>
                <Text style={{ fontSize: 16, marginLeft: 5, color: '#fff', fontWeight: 'bold' }}>Back</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name={SCREENS.UWinScreen}
          component={UWinScreen}
          options={({ navigation, route }) => ({
            headerShown: false,
            headerStyle: {
              backgroundColor: '#000'
            },
            // title: "Тренировки",
            headerTitle: 'f',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
              >
                <HeadBackSvg/>
                <Text style={{ fontSize: 16, marginLeft: 5, color: '#fff', fontWeight: 'bold' }}>Back</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name={SCREENS.TimeEndScreen}
          component={TimeEndScreen}
          options={({ navigation, route }) => ({
            headerShown: false,
            headerStyle: {
              backgroundColor: '#000'
            },
            // title: "Тренировки",
            headerTitle: 'f',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
              >
                <HeadBackSvg/>
                <Text style={{ fontSize: 16, marginLeft: 5, color: '#fff', fontWeight: 'bold' }}>Back</Text>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
