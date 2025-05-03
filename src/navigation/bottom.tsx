import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, SCREENS } from '../utils/constants';
import bottomTabs from '../utils/data/bottomTabs';
import { View, Text} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabRouter = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTransparent: false,
        // headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000',
        },
        tabBarActiveTintColor: COLORS.primary,
        // tabBarLabel: '',
        tabBarLabelStyle: {
          // marginBottom: -25,
        },
        headerShadowVisible: false,
        headerTitleStyle: {
          color: COLORS.black,
          fontWeight: 'bold',
          fontSize: 30,
        },
      }}
    >
      {bottomTabs.map(({ name, component, headerTitle }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            headerTitle,
            tabBarStyle: {
              backgroundColor: '#1C1C1C',
              paddingTop: 10,
            },
            headerStyle: {
              backgroundColor: '#1C1C1C',
          },
            headerTitleStyle: {
              color: '#fff',
              fontSize: 30,
            },
            tabBarIcon: ({ color, focused }) => {
              const IconComponent = bottomTabs.find(tab => tab.name === name)?.Icon;
              return (
                <View style={{ alignItems: 'center' }}>
                  <View
                    style={[
                      {
                        // width: 10,
                        // height: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        // borderRadius: 20,
                        marginBottom: 4
                      },
                      // focused && { backgroundColor: '#7acca6' },
                    ]}
                  >
                    {IconComponent && <IconComponent width={32} height={32} color={focused ? '#FFDC00' : color} />}
                    {/*<Text style={{ color: focused ? "yellow" : color, fontSize: 9, width: 40, ma }}>*/}
                    {/*  {name}*/}
                    {/*</Text>*/}
                  </View>
                </View>
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabRouter;
