import {Button, Card, Icon, Input, Modal} from '@ui-kitten/components';
import React from 'react';
import {useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {fixErrorApi} from '../redux/actions/errors.actions';

const FixErrorModal = ({isVisible, handleClose}) => {
  const dispatch = useDispatch();

  const {token} = useSelector(state => state.auth);
  const {selectedErrorId} = useSelector(state => state.errors);
  const [image, setImage] = useState(null);
  const [resolutionDescription, setResolutionDescription] = useState('');
  const getImage = async () => {
    let result = await launchCamera();
    console.log('result', result);
    setImage(result.assets[0]);
  };
  const handleFixError = () => {
    let data = new FormData();
    let photo = {
        uri: image.uri,
        type: image.type,
        name: image.fileName,
      };
    data.append('image', photo);
    data.append('resolutionDescription', resolutionDescription);
    dispatch(fixErrorApi(token, data, selectedErrorId));
    handleClose(); 
  };

  return (
    <Modal
      visible={isVisible}
      backdropStyle={styles.backdrop}
      onBackdropPress={handleClose}>
      <Card disabled={true}>
        {image && (
          <Image
            source={{uri: image.uri}}
            style={{
              width: '100%',
              height: 100,
              resizeMode: 'contain',
              margin: 10,
            }}
          />
        )}
        <Button
          status="primary"
          onPress={getImage}
          accessoryLeft={() => (
            <Icon
              name={'camera-outline'}
              fill="#FFF"
              style={{width: 30, height: 30}}
            />
          )}>
          Prendre une image{' '}
        </Button>
        <Input
          placeholder="Action de correction "
          size="large"
          style={styles.inputStyle}
          value={resolutionDescription}
          onChangeText={text => setResolutionDescription(text)}
        />
        <View style={styles.btnRow}>
          <Button status="success" onPress={handleFixError}>Confirmer</Button>
          <Button status="danger" onPress={handleClose}>
            Annuler
          </Button>
        </View>
      </Card>
    </Modal>
  );
};

export default FixErrorModal;

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
