import React from 'react';
import Counter from '../components/counter';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
class App extends React.Component<any, any> {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Counter">
          <Stack.Screen name="Counter" component={Counter} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
