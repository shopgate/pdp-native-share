import React from 'react';
import isIOSTheme from '@shopgate-ps/pwa-extension-kit/env/helpers/isIOSTheme';
import ShareButton from '../../components/ShareButton';
import styles from './styles';

export default (props) => {
  if (!isIOSTheme()) {
    return null;
  }
  return (
    <div className={styles.iOSButtons}>
      <ShareButton {...props} />
    </div>
  );
};
