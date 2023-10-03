import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class Pokemon extends React.Component<any, any> {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text>Pokemon</Text>
        </View>
        <View style={styles.footer}>
          <Button
            title="Go to Counter"
            onPress={() => this.props.navigation.navigate('Counter')}
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

// const mapStateToProps = (state: RootState) => {
//   return {
//     count: state.counter.value,
//   };
// };

// export default connect(mapStateToProps)(Counter);

export default Pokemon;

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
