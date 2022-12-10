import {Button, Card, Icon, Text, Modal} from '@ui-kitten/components';
import React from 'react';
import {useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {fixErrorApi} from '../redux/actions/errors.actions';
import {BASE_URL} from '../utils/apiHelpers';

const FixedError = ({isVisible, handleClose}) => {
  const dispatch = useDispatch();

  const {token} = useSelector(state => state.auth);
  const {selectedItem} = useSelector(state => state.errors);
  return (
    <Modal
      visible={isVisible}
      backdropStyle={styles.backdrop}
      onBackdropPress={handleClose}>
      <Card disabled={true}>
        {selectedItem && selectedItem.resolutionImg && (
          <Image
            source={{uri: `${BASE_URL}/${selectedItem.resolutionImg}`}}
            style={{
              width: 250,
              height: 250,
              resizeMode: 'contain',
              margin: 10,
            }}
          />
        )}
        <Text>{selectedItem.resolutionDescription}</Text>

        <View style={styles.btnRow}>
          <Button status="danger" onPress={handleClose}>
            Fermer
          </Button>
        </View>
      </Card>
    </Modal>
  );
};

export default FixedError;

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
