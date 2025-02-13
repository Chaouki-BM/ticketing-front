import {StyleSheet, FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
import {Button, Icon} from '@ui-kitten/components';
import UserItem from '../components/UserItem';
import AddUserModal from '../components/AddUserModal';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllUsersApi} from '../redux/actions/user.actions';
import {SET_SELECTED_USER} from '../redux/types';
import EditUserModal from '../components/EditUserModal';

const UsersScreen = () => {
  const [isAddVisivible, setIsAddVisible] = useState(false);
  const [isEditUserVisible, setIsEditUserVisible] = useState(false);
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.auth);
  const {userList} = useSelector(state => state.users);
  const handleAddUser = () => {
    setIsAddVisible(true);
  };
  const handleCloseAddUser = () => {
    setIsAddVisible(false);
  };
  const handleCloseEditUser = () => {
    setIsEditUserVisible(false);
  };
  useEffect(() => {
    dispatch(getAllUsersApi(token));
  }, []);
  return (
    <View style={styles.container}>
      <AddUserModal
        isVisible={isAddVisivible}
        handleClose={handleCloseAddUser}
      />
      <EditUserModal
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
        Nouveau Utilisateur{' '}
      </Button>
      <FlatList
        data={userList}
        renderItem={({item}) => (
          <UserItem
            key={item._id}
            name={`${item.firstName} ${item.name}`}
            role={item.role == 0 ? 'ADMIN' : 'USER'}
            iconName={'people-outline'}
            handleDelete={() => {}}
            handleEdit={() => {
              console.log('Clicked edit');
              setIsEditUserVisible(true);
              dispatch({
                type: SET_SELECTED_USER,
                payload: item,
              });
            }}
          />
        )}
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

export default UsersScreen;

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
