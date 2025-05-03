import {Dimensions} from 'react-native';
import AllTrainingsScreen from '../../screens/AllTrainingsScreen.tsx';
import UWinScreen from '../../screens/UWinScreen.tsx';

export enum SCREENS {
  BottomRouter = 'BottomRouter',
  Loader = 'Loader',
  Start = 'Start',
  FIRST_T = 'History',
  SECOND_T =  'Yoga',
  THIRD_T = 'Arrow',
  ZFOURTH_T = 'Settings',
  AllTrainingsScreen='AllTrainingsScreen',
  CreateTrainingScreen='CreateTrainingScreen',
  TrainingDetainlAddScreen='TrainingDetainlAddScreen',
  StoryScreen1='StoryScreen1',
  StoryScreen3='StoryScreen3',
  StoryScreen2='StoryScreen2',
  GameScreen='GameScreen',
  TrainingAddedSCreen="TrainingAddedSCreen",
  UWinScreen="UWinScreen",
  TimeEndScreen="TimeEndScreen"
}
export const {width:SCREEN_WIDTH, height:SCREEN_HEIGHT} = Dimensions.get('screen');

export enum COLORS {
  black = '#000000',
  primary = "#F8F8F8",
  white = '#FFFFFF',
  blue = '#2D62EE',
  red = 'red',
  gray = 'gray',
}
