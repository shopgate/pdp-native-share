import React from 'react';
import ShareButton from '../../components/ShareButton';
import { env } from '@shopgate/pwa-extension-kit'
import styles from './styles';

export default (props) => {
  if (!env.isIOSTheme()) {
    return null;
  }
  return (
    <div className={styles.iOSButtons}>
      <ShareButton {...props} />
    </div>
  );
};
