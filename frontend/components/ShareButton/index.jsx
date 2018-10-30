import React, { Component } from 'react';
import ShareIconiOS from '@shopgate/pwa-ui-ios/icons/ShareIcon';
import ShareIconGmd from '@shopgate/pwa-ui-material/icons/ShareIcon';
import Ripple from '@shopgate/pwa-ui-shared/Ripple';
import PropTypes from 'prop-types';
import styles from './style';
import getConfig from '../../helpers/getConfig';
import connect from '../../connector';

const { gmdIcon, iOSIcon } = getConfig();
/**
 * ShareButton component
 */
class ShareButton extends Component {
  static propTypes = {
    shareItem: PropTypes.func.isRequired,
    iOSTheme: PropTypes.bool.isRequired,
    shareParams: PropTypes.shape(),
  };

  static defaultProps = {
    shareParams: null,
  };
  /**
   * Gets the icon style.
   * @returns {string}
   */
  static getIconStyle(iOSTheme) {
    if (iOSTheme) {
      return iOSIcon === 'ios' ? styles.buttoniOSThemeiOSIcon : styles.buttoniOSThemeMaterialIcon;
    }
    return gmdIcon === 'gmd' ? styles.buttonMaterialThemeMaterialIcon : styles.buttonMaterialThemeiOSIcon;
  }

  /**
   * Renders the share icon depending on theme
   * @returns {JSX}
   */
  static renderIcon = (iOSTheme) => {
    if (iOSTheme) {
      return iOSIcon === 'ios' ? <ShareIconiOS /> : <ShareIconGmd />;
    }

    return gmdIcon === 'gmd' ? <ShareIconGmd /> : <ShareIconiOS />;
  }

  /**
   * Handles the share button click
   * Show's share screen for app
   * @param {Object} event The click event object
   */
  handleClick = () => {
    this.props.shareItem();
  }

  /**
   * Renders the components
   * @returns {JSX}
   */
  render() {
    if (!this.props.shareParams || this.props.shareParams.deepLink === undefined) {
      return null;
    }
    const { iOSTheme } = this.props;

    return (
      <button
        className={this.constructor.getIconStyle(iOSTheme)}
        data-test-id="shareIcon"
        type="button"
      >
        <Ripple className={iOSTheme ? `${styles.ripple}` : ''} onComplete={this.handleClick}>
          {this.constructor.renderIcon(iOSTheme)}
        </Ripple>
      </button>
    );
  }
}

export default connect(ShareButton);
