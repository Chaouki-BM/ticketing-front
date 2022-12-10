import {StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button, Card, Input, Modal, Toggle, Text} from '@ui-kitten/components';
import {useDispatch, useSelector} from 'react-redux';
import {addUserApi} from '../redux/actions/user.actions';
const EditUserModal = ({isVisible, handleClose}) => {
  const dispatch = useDispatch();
  const [isAdmin, setIsAdmin] = useState(false);
  const {token} = useSelector(state => state.auth);
  const {selectedUser} = useSelector(state => state.users);
  const [userInfo, setUserInfo] = useState({
    name: '',
    firstName: '',
    email: '',
    password: '',
    role: 0,
  });

  const addUser = () => {
    let data = {...userInfo, role: isAdmin ? 0 : 1};
    dispatch(addUserApi(data, token));
    handleClose();
  };
  useEffect(() => {
    if (selectedUser) {
      setUserInfo({
        ...userInfo,
        firstName: selectedUser.firstName,
        name: selectedUser.name,
        email: selectedUser.email,
      });
      selectedUser.role == 0 ? setIsAdmin(true) : setIsAdmin(false);
    }
  }, [selectedUser]);
  return (
    <Modal
      visible={isVisible}
      backdropStyle={styles.backdrop}
      onBackdropPress={handleClose}>
      <Card disabled={true}>
        <Input
          placeholder="Name"
          size="large"
          style={styles.inputStyle}
          value={userInfo.name}
          onChangeText={text => setUserInfo({...userInfo, name: text})}
        />
        <Input
          placeholder="FirstName"
          size="large"
          style={styles.inputStyle}
          value={userInfo.firstName}
          onChangeText={text => setUserInfo({...userInfo, firstName: text})}
        />
        <Input
          placeholder="Email"
          size="large"
          style={styles.inputStyle}
          value={userInfo.email}
          onChangeText={text => setUserInfo({...userInfo, email: text})}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          size="large"
          style={styles.inputStyle}
          value={userInfo.password}
          onChangeText={text => setUserInfo({...userInfo, password: text})}
        />
        <View style={styles.toggleView}>
          <Text style={styles.toggleText}>ADMIN:</Text>
          <Toggle checked={isAdmin} onChange={checked => setIsAdmin(checked)} />
        </View>

        <View style={styles.btnRow}>
          <Button onPress={addUser}>Confirmer</Button>
          <Button status="danger" onPress={handleClose}>
            Annuler
          </Button>
        </View>
      </Card>
    </Modal>
  );
};

export default EditUserModal;

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  inputStyle: {
    minWidth: 250,
    marginVertical: 10,
  },
  toggleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  toggleText: {
    fontSize: 20,
    fontWeight: '400',
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
