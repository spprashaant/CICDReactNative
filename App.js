/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';

export default class App extends React.Component {
  constructor() {
    super();
    this.checkPreviousSession();
  }
  async checkPreviousSession() {
    const didCrash = await Crashes.hasCrashedInLastSession();
    if (didCrash) {
      const report = await Crashes.lastSessionCrashReport();
      alert("Sorry about that crash, we're working on a solution");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Calculate inflation"
          onPress={() =>
            Analytics.trackEvent('calculate_inflation', {
              Internet: 'Cellular',
              GPS: 'On',
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

//export default App;
