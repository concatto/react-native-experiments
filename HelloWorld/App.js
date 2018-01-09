import React from 'react';
import { Button, Alert, StyleSheet, Text, TextInput, View } from 'react-native';

class Echo extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {text: ""};
  }
  
  render() {
    return (
      <View>
        <TextInput placeholder="Type here"
          value={this.state.text}
          onChangeText={text => this.setState({text})}
        />
        <Text>{this.props.prefix + this.state.text}</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Does this work? Reload? Alright!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Echo prefix="Content is: "/>
        <Button onPress={() => Alert.alert("Hello!")} title="Press me"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
