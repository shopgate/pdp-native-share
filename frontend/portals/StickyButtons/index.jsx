import React from 'react';
import { css } from 'glamor';
import ShareButton from '../../components/ShareButton';
import { useWithStickyButtons } from '../../config';
import styles from '../../components/ShareButton/style';

const button = css({
  marginRight: 15,
  marginBottom: 6,
}).toString();

const shareButton = css({
  minWidth: 44,
  height: 44,
}).toString();

const rippleButton = css({
  fontSize: '29px !important',
}).toString();

export default (props) => {
  if (!useWithStickyButtons) {
    return null;
  }

  return (
    <div className={button}>
      <ShareButton
        className={`${styles.buttoniOSThemeiOSIcon} ${shareButton}`}
        rippleClassname={rippleButton}
        {...props}
      />
    </div>
  );
};
