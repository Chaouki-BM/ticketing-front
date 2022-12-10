import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icon} from '@ui-kitten/components';
import MenuItem from '../components/MenuItem';
const MainAdmin = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MenuItem
        iconName={'people-outline'}
        title="utilisateurs"
        handePress={() => {
          navigation.navigate('users');
          console.log('Users clicked..');
        }}
      />
      <MenuItem
        iconName={'hard-drive-outline'}
        title="Equipement"
        handePress={() => {
          navigation.navigate('devices');
          console.log('Equipement clicked..');
        }}
      />
      <MenuItem
        iconName={'alert-circle-outline'}
        title="Erreurs"
        handePress={() => {
          navigation.navigate('errors');
          console.log('Errors clicked..');
        }}
      />
    </View>
  );
};

export default MainAdmin;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
  },
  menuItem: {
    width: '100%',
    height: 80,
    borderRadius: 10,
    backgroundColor: '#D6E4FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3366FF',
  },
  btnText: {
    fontSize: 20,
    fontWeight: '600',
  },
});
