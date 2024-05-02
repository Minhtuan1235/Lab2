import React from 'react';
import { StyleSheet, View } from 'react-native';
import DetailListItem from '../Component/DetailListItem';
const Options = () => {
    return (
      <View style={styles.container}>
        <DetailListItem title="Update Profile" />
        <DetailListItem title="Change Language" />
        <DetailListItem title="Sign Out" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
    },
  });
  
  export default Options;