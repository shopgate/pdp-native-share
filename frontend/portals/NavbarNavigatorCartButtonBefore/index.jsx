import React from 'react';
import { ITEM_PATTERN } from '@shopgate/pwa-common-commerce/product/constants';
import { withPageState } from '@shopgate/pwa-extension-kit/connectors';
import ShareButton from '../../components/ShareButton';
import isiOSTheme from '../../helpers/isiOSTheme';

const NavbarNavigatorCartButtonBefore =  ({ pattern, ...otherProps }) => {
  if (pattern !== ITEM_PATTERN) {
    return null;
  }
  if (isiOSTheme()) {
    return null;
  }
  return <ShareButton {...otherProps} />;
};

export default withPageState(NavbarNavigatorCartButtonBefore);
