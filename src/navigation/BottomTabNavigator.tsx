import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import CartScreen from '../screens/CartScreen';
import MyPageScreen from '../screens/MyPageScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderWidth: 0,
          elevation: 0,
          height: 60,
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.80)',
        },
      }}
      sceneContainerStyle={{backgroundColor: 'white'}}
      tabBarOptions={{
        activeTintColor: '#3f494a',
        labelStyle: {
          marginBottom: 10,
        },
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({color}) => (
            <Icon name="library-outline" color={color} size={30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color}) => (
            <Icon name="search-outline" color={color} size={30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color}) => (
            <Icon name="cart-outline" color={color} size={30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="MyPageScreen"
        component={MyPageScreen}
        options={{
          tabBarLabel: 'My Page',
          tabBarIcon: ({color}) => (
            <Icon name="person-outline" color={color} size={30} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
