import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon, Button} from '@ui-kitten/components';
import {useDispatch} from 'react-redux';
import {SET_SELECTED_ERROR_ID, SET_SELECTED_ERROR_ITEM} from '../redux/types';
const ErrorItem = ({
  equipement,
  description,
  id,
  showModal,
  isResolved,
  item,
}) => {
  const dispatch = useDispatch();
  const handleFixModal = () => {
    dispatch({
      type: SET_SELECTED_ERROR_ID,
      payload: id,
    });
    showModal();
  };
  const showFixDetails = () => {
    dispatch({
      type: SET_SELECTED_ERROR_ITEM,
      payload: item,
    });
    showModal();
  };
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
        <Icon
          fill="#FFF"
          name={'alert-triangle-outline'}
          style={{width: 30, height: 30}}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.btnText}>{equipement.equipIP}</Text>
        <Text style={styles.btnSubText}>{description}</Text>
      </View>
      <View style={styles.btnContainer}>
        {!isResolved ? (
          <Button
            style={styles.button}
            status="danger"
            onPress={handleFixModal}>
            Fix Now
          </Button>
        ) : (
          <Button style={styles.button} status="success" onPress={showFixDetails}>
            Show Details
          </Button>
        )}
      </View>
    </View>
  );
};

export default ErrorItem;

const styles = StyleSheet.create({
  menuItem: {
    width: '95%',
    height: 180,
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
    maxWidth: 150,
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
