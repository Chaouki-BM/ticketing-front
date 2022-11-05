import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import MainAdmin from './screens/MainAdmin';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import UsersScreen from './screens/UsersScreen';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <View style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="login"
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="login" component={LoginScreen} />
              <Stack.Screen name="main" component={MainScreen} />
              <Stack.Screen name="admin" component={MainAdmin} />
              <Stack.Screen name="users" component={UsersScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </ApplicationProvider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
});
