import React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import AppText from './Content';
import * as globalStyles from '../public/css/main';

const Title = ({ style, children }) => (
  <AppText style={[styles.title, style]}>
    {children}
  </AppText>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: 'HelveticaNeue-CondensedBold',
    fontSize: 18,
    color: globalStyles.HEADER_TEXT_COLOR,
    backgroundColor: `${globalStyles.BG_COLOR}99`
  }
});

export default Title;
