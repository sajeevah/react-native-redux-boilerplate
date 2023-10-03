import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { decrement, increment } from '../features/counter/counterSlice';
import { connect } from 'react-redux';
import { RootState } from '../app/store';
class Counter extends React.Component<any, any> {
  incrementCount = () => {
    this.props.dispatch(increment());
  };

  decrementCount = () => {
    this.props.dispatch(decrement());
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <Button title="increment" onPress={() => this.incrementCount()} />
          <Text>{this.props.count}</Text>
          <Button title="decrement" onPress={() => this.decrementCount()} />
        </View>
        <View style={styles.footer}>
          <Button
            title="Go to RtxExample"
            onPress={() => this.props.navigation.navigate('RtxExample')}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

const mapStateToProps = (state: RootState) => {
  return {
    count: state.counter.value,
  };
};

export default connect(mapStateToProps)(Counter);

// const mapStateToProps = (state) => {
//   return {
//     count: state.counter.value
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
