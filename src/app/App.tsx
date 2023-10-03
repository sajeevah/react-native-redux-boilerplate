import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Counter from '../components/counter';
import Pokemon from '../components/pokemon';

const Stack = createNativeStackNavigator();
class App extends React.Component<any, any> {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Counter">
          <Stack.Screen name="Counter" component={Counter} />
          <Stack.Screen name="Pokemon" component={Pokemon} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
