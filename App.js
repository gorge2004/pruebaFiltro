import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Root} from 'native-base';
import FriendsList from './profile/friendsList';
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { loading: true };
    _isMounted = false;


}
async componentDidMount() {
  this._isMounted = true;

  if(this._isMounted){
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }
   
  }
  componentWillUnmount() {
    this._isMounted = false
  }
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }

    return (
      <Root>
           <FriendsList />
      </Root>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
