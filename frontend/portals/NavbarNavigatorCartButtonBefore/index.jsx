import React from 'react';
import { ITEM_PATTERN } from '@shopgate/pwa-common-commerce/product/constants';
import { withPageState } from '@shopgate/pwa-extension-kit/connectors';
import { env } from '@shopgate/pwa-extension-kit'
import ShareButton from '../../components/ShareButton';

const NavbarNavigatorCartButtonBefore =  ({ pattern, ...otherProps }) => {
  if (pattern !== ITEM_PATTERN) {
    return null;
  }
  if (env.isIOSTheme()) {
    return null;
  }
  return <ShareButton {...otherProps} />;
};

export default withPageState(NavbarNavigatorCartButtonBefore);
