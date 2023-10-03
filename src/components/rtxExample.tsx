/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { useGetPokemonByNameQuery } from '../services/pokemon';

function RtxExample(props: any) {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
  return (
    <>
      <View style={styles.container}>
        <Text>RtxExample</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {error ? (
          <Text>Oh no, there was an error</Text>
        ) : isLoading ? (
          <Text>Loading...</Text>
        ) : data ? (
          <>
            <Text>{data.species.name}</Text>
            <Image
              source={{ uri: data.sprites.front_shiny }}
              style={{ width: 100, height: 100 }}
            />
          </>
        ) : null}
      </View>
      <View style={styles.footer}>
        <Button
          title="Go to Counter"
          onPress={() => props.navigation.navigate('Counter')}
        />
      </View>
    </>
  );
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

export default RtxExample;

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
