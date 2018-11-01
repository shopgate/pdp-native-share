import React from 'react';
import ShareButton from '../../components/ShareButton';
import isiOSTheme from '../../helpers/isiOSTheme';

export default (props) => {
  if (isiOSTheme()) {
    return null;
  }
  return <ShareButton {...props} />;
};
