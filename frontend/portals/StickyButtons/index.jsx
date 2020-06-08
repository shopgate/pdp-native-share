import React from 'react';
import { css } from 'glamor';
import ShareButton from '../../components/ShareButton';
import { useWithStickyButtons } from '../../config';

const button = css({
  marginRight: 15,
  marginBottom: 6,
}).toString();

const rippleButton = css({
  fontSize: 29,
}).toString();

export default (props) => {
  if (!useWithStickyButtons) {
    return null;
  }

  return (
    <div className={button}>
      <ShareButton rippleClassname={rippleButton} {...props} />
    </div>
  );
};
