import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getAllErrorsApi} from '../redux/actions/errors.actions';
import ErrorItem from '../components/ErrorItem';
import FixErrorModal from '../components/FixErrorModal';
import {useState} from 'react';
import FixedError from '../components/FixedError';

const ErrorsScreen = () => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.auth);
  const {errorList} = useSelector(state => state.errors);
  const [visible, setVisible] = useState(false);
  const [fixedVisible, setFixedVisible] = useState(false);
  const handleShowModal = () => {
    setVisible(true);
  };
  const handleClosModal = () => {
    setVisible(false);
  };
  const handleFixShowModal = () => {
    setFixedVisible(true);
  };
  const handleClosFixedModal = () => {
    setFixedVisible(false);
  };
  useEffect(() => {
    dispatch(getAllErrorsApi(token));
  }, []);
  return (
    <View style={styles.container}>
      <FixErrorModal isVisible={visible} handleClose={handleClosModal} />
      <FixedError isVisible={fixedVisible} handleClose={handleClosFixedModal} />
      <FlatList
        data={errorList}
        renderItem={({item}) => (
          <ErrorItem
            key={item._id}
            equipement={item.equipment}
            description={item.errorDescription}
            showModal={item.isResolved ? handleFixShowModal : handleShowModal}
            isResolved={item.isResolved}
            id={item._id}
            item={item}
          />
        )}></FlatList>
    </View>
  );
};

export default ErrorsScreen;

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
