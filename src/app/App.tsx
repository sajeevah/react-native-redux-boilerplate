import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Counter from '../components/counter';
import RtxExample from '../components/rtxExample';

const Stack = createNativeStackNavigator();
class App extends React.Component<any, any> {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Counter">
          <Stack.Screen name="Counter" component={Counter} />
          <Stack.Screen name="RtxExample" component={RtxExample} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
