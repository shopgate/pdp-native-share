import React from 'react';
import PropTypes from 'prop-types';
import { ITEM_PATTERN } from '@shopgate/pwa-common-commerce/product/constants';
import { withPageState } from '@shopgate-ps/pwa-extension-kit/connectors';
import isIOSTheme from '@shopgate-ps/pwa-extension-kit/env/helpers/isIOSTheme';
import ShareButton from '../../components/ShareButton';

/**
 * @returns {JSX}
 */
const NavbarNavigatorCartButtonBefore = ({ pattern, ...otherProps }) => {
  if (pattern !== ITEM_PATTERN) {
    return null;
  }
  if (isIOSTheme()) {
    return null;
  }
  return <ShareButton {...otherProps} />;
};

NavbarNavigatorCartButtonBefore.propTypes = {
  pattern: PropTypes.string,
};

NavbarNavigatorCartButtonBefore.defaultProps = {
  pattern: null,
};

export default withPageState(NavbarNavigatorCartButtonBefore);
