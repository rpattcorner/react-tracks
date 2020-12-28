import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as TuneContext } from '../context/TuneContext';

const TuneCreateScreen = ({ navigation }) => {
  const { state, importTune } = useContext(TuneContext);
  const [tuneSource, setTuneSource] = useState('');
//   const [password, setPassword] = useState('');
  const [tuneId, setTuneId] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3></Text>
      </Spacer>
      <Input
        secureTextEntry
        label="Tune ID"
        value={tuneId}
        onChangeText={setTuneId}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="Tune Source"
        value={tuneSource}
        onChangeText={setTuneSource}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {/* <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      /> */}

      <Spacer>
        <Button title="Sign Up" onPress={() => importTune({ tuneId, tuneSource })} />
      </Spacer>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // marginBottom: 250,
  },
});

export default TuneCreateScreen;
