import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon, Button} from '@ui-kitten/components';
const EquipItem = ({
  iconName,
  handleEdit,
  handleDelete,
  ipAdr,
  service,
  item,
}) => {
  const EditIcon = props => {
    return (
      <Icon
        {...props}
        name={'edit-2-outline'}
        fill="#FFF"
        style={{width: 20, height: 20}}
      />
    );
  };
  const DeleteIcon = props => {
    return (
      <Icon
        {...props}
        name={'trash-2-outline'}
        fill="#FFF"
        style={{width: 20, height: 20}}
      />
    );
  };
  return (
    <View style={styles.menuItem}>
      <View style={styles.iconContainer}>
        <Icon fill="#FFF" name={iconName} style={{width: 30, height: 30}} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.btnText}>{ipAdr}</Text>
        <Text style={styles.btnSubText}>{service}</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button
          style={styles.button}
          status="danger"
          accessoryLeft={DeleteIcon}
          onPress={handleDelete}
        />
        <Button
          style={styles.button}
          status="success"
          accessoryLeft={EditIcon}
          onPress={handleEdit}
        />
      </View>
    </View>
  );
};

export default EquipItem;

const styles = StyleSheet.create({
  menuItem: {
    width: '95%',
    height: 80,
    borderRadius: 10,
    backgroundColor: '#D6E4FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
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
  btnSubText: {
    fontSize: 18,
    fontWeight: '400',
  },
  nameContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  btnContainer: {
    flexDirection: 'row',
  },
  button: {
    margin: 3,
  },
});
