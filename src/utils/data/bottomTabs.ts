import FIRST_T_SCREEN from '../../screens/tabs/FIRST_T';
import SECOND_T from '../../screens/tabs/SECOND_T';
import THIRD_T from '../../screens/tabs/THIRD_T';
import ZFOURTH from '../../screens/tabs/ZFOURTH';
import {SCREENS} from '../constants';
import BookSvg from '../../assets/svg/BookSvg.tsx';
import YogaSvg from '../../assets/svg/YogaSvg.tsx';
import GameSvg from '../../assets/svg/GameSvg.tsx';
import SettingsSvg from '../../assets/svg/SettingsSvg.tsx';

const bottomTabs = [
  {
    name: SCREENS.FIRST_T,
     component: FIRST_T_SCREEN,
    headerTitle: "Rama History",
    Icon: BookSvg
  },
  {
    name:
    SCREENS.SECOND_T,
    component: SECOND_T,
    headerTitle: "Rama Yoga",
    Icon: YogaSvg
  },
  {
    name: SCREENS.THIRD_T,
    component: THIRD_T,
    headerTitle: "Rama's Arrow",
    Icon: GameSvg
  },
  {
    name: SCREENS.ZFOURTH_T,
    component: ZFOURTH,
    headerTitle: "Settings",
    Icon: SettingsSvg
  },
];

export default bottomTabs;
