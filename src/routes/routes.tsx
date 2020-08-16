import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Bird from '../screens/Bird';

const { Navigator, Screen } = createStackNavigator();

const routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="Home" component={Home}/>
        <Screen name="Bird" component={Bird}/>
      </Navigator>
    </NavigationContainer>
  );
}

export default routes;