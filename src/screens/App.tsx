import React, {useState, useEffect, useContext} from 'react';
import {LogBox, Platform, SafeAreaView, StatusBar, View} from 'react-native';
import {colors} from '../assets/colors/colors';
import MainNavigation from '../navigators/MainNavigation';

// import Loader from "../api/Loader";
LogBox.ignoreAllLogs();

const App = (props: any) => {
  const [initialRouteName, setInitialRouteName] = useState('WelcomeScreen');
  const [navigation, setNavigation] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      {initialRouteName !== '' ? (
        <MainNavigation initialRouteName={initialRouteName} />
      ) : null}
    </View>
  );
};

export default App;
