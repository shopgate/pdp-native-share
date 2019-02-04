import React from 'react';
import ShareButton from '../../components/ShareButton';
import isIOSTheme from '@shopgate/pwa-extension-kit/env/helpers/isIOSTheme';
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
