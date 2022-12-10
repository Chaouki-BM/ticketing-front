import {
  Button,
  Card,
  IndexPath,
  Modal,
  Select,
  SelectItem,
  Input,
  Text,
} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addEquipApi} from '../redux/actions/equip.action';
const EditEquipmentModal = ({isVisible, handleClose}) => {
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const [selectedTypeIndex, setSelectedTypeIndex] = React.useState(
    new IndexPath(0),
  );
  const data = ['Ressource Humaine', 'Comptabilité', 'Support', 'Maintenance'];
  const typeData = ['Serveur', 'P.C', 'Imprimante', 'Routeur'];
  const displayValue = data[selectedIndex.row];
  const displayTypeValue = typeData[selectedTypeIndex.row];
  const [ipAdr, setIpAdr] = useState('');
  const {token} = useSelector(state => state.auth);
  const {selectedEquip} = useSelector(state => state.equipment);
  const handleAddEquip = () => {
    let info = {
      equipIP: ipAdr,
      service: displayValue,
      isOnline: true,
      equipType: selectedTypeIndex.row,
    };
    dispatch(addEquipApi(info, token));
    handleClose();
  };
  useEffect(() => {}, [selectedEquip]);
  const renderOption = title => <SelectItem title={title} />;
  return (
    <Modal
      visible={isVisible}
      backdropStyle={styles.backdrop}
      onBackdropPress={handleClose}>
      <Card disabled={true}>
        <Select
          style={styles.select}
          placeholder="Choisir Un Service"
          value={displayValue}
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex(index)}>
          {data.map(renderOption)}
        </Select>
        <Select
          style={styles.select}
          placeholder="Choisir Un Type"
          value={displayTypeValue}
          selectedIndex={selectedTypeIndex}
          onSelect={index => setSelectedTypeIndex(index)}>
          {typeData.map(renderOption)}
        </Select>
        <Input
          placeholder="Adresse IP"
          size="large"
          style={styles.inputStyle}
          value={ipAdr}
          onChangeText={text => setIpAdr(text)}
          //   value={userInfo.firstName}
          //   onChangeText={text => setUserInfo({...userInfo, firstName: text})}
        />
        <View style={styles.btnRow}>
          <Button status="success" onPress={handleAddEquip}>
            Confirmer
          </Button>
          <Button status="danger" onPress={handleClose}>
            Annuler
          </Button>
        </View>
      </Card>
    </Modal>
  );
};

export default EditEquipmentModal;

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
  select: {
    marginVertical: 10,
  },
});
