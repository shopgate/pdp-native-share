import React from 'react';
import ShareButton from '../../components/ShareButton';
import isiOSTheme from '../../helpers/isiOSTheme';
import styles from './styles';

export default (props) => {
  if (!isiOSTheme()) {
    return null;
  }
  return (
    <div className={styles.iOSButtons}>
      <ShareButton {...props} />
    </div>
  );
};
