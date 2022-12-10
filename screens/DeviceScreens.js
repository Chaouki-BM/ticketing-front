import {StyleSheet, FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
import {Button, Icon} from '@ui-kitten/components';
import UserItem from '../components/UserItem';
import AddUserModal from '../components/AddUserModal';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllUsersApi} from '../redux/actions/user.actions';
import {SET_SELECTED_EQUIPMENT, SET_SELECTED_USER} from '../redux/types';
import EditUserModal from '../components/EditUserModal';
import AddEquipmentModal from '../components/AddEquipementModal';
import EquipItem from '../components/EquipItem';
import {getAllEquipApi} from '../redux/actions/equip.action';
import EditEquipmentModal from '../components/EditEquipmentModal';

const DeviceScreens = () => {
  const [isAddVisivible, setIsAddVisible] = useState(false);
  const [isEditUserVisible, setIsEditUserVisible] = useState(false);
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.auth);
  const {equipList} = useSelector(state => state.equipment);
  const handleAddUser = () => {
    setIsAddVisible(true);
  };
  const handleCloseAdd = () => {
    setIsAddVisible(false);
  };
  const handleCloseEditUser = () => {
    setIsEditUserVisible(false);
  };
  useEffect(() => {
    dispatch(getAllEquipApi(token));
  }, []);
  return (
    <View style={styles.container}>
      <AddEquipmentModal
        isVisible={isAddVisivible}
        handleClose={handleCloseAdd}
      />
      <EditEquipmentModal
        isVisible={isEditUserVisible}
        handleClose={handleCloseEditUser}
      />

      <Button
        accessoryLeft={
          <Icon
            name="plus-square-outline"
            fill="#FFF"
            style={{width: 30, height: 30}}
          />
        }
        onPress={handleAddUser}>
        Nouveau Equipement
      </Button>
      <FlatList
        data={equipList}
        renderItem={({item}) => {
          return (
            <EquipItem
              key={item._id}
              ipAdr={item.equipIP}
              service={item.service}
              iconName={'hard-drive-outline'}
              handleDelete={() => {}}
              handleEdit={() => {
                setIsEditUserVisible(true);
                dispatch({
                  type: SET_SELECTED_EQUIPMENT,
                  payload: item,
                });
              }}
            />
          );
        }}
      />

      {/* <UserItem
        name={'Chaouki Ben Miled'}
        role="ADMIN"
        iconName={'people-outline'}
        handleDelete={() => {}}
        handleEdit={() => {}}
      />
      <UserItem
        name={'Chaouki Ben Miled'}
        role="ADMIN"
        iconName={'people-outline'}
        handleDelete={() => {}}
        handleEdit={() => {}}
      />
      <UserItem
        name={'Chaouki Ben Miled'}
        role="ADMIN"
        iconName={'people-outline'}
        handleDelete={() => {}}
        handleEdit={() => {}}
      /> */}
    </View>
  );
};

export default DeviceScreens;

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
});
