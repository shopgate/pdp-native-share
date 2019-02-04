import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShareIconiOS from '@shopgate/pwa-ui-ios/icons/ShareIcon';
import ShareIconGmd from '@shopgate/pwa-ui-material/icons/ShareIcon';
import Ripple from '@shopgate/pwa-ui-shared/Ripple';
import { withPageProductId } from '@shopgate/pwa-extension-kit/connectors';
import { env } from '@shopgate/pwa-extension-kit'
import styles from './style';
import getConfig from '../../helpers/getConfig';
import connect from '../../connector';

/**
 * ShareButton component
 */
class ShareButton extends Component {
  static propTypes = {
    shareItem: PropTypes.func.isRequired,
    shareParams: PropTypes.shape(),
  };

  static defaultProps = {
    shareParams: null,
  };

  static config = getConfig();

  /**
   * Gets the icon style.
   * @returns {string}
   */
  static getIconStyle() {
    if (env.isIOSTheme()) {
      return this.config.iOSIcon === 'ios' ? styles.buttoniOSThemeiOSIcon : styles.buttoniOSThemeMaterialIcon;
    }
    return this.config.gmdIcon === 'gmd' ? styles.buttonMaterialThemeMaterialIcon : styles.buttonMaterialThemeiOSIcon;
  }

  /**
   * Renders the share icon depending on theme
   * @returns {JSX}
   */
  static renderIcon() {
    if (env.isIOSTheme()) {
      return this.config.iOSIcon === 'ios' ? <ShareIconiOS /> : <ShareIconGmd />;
    }

    return this.config.gmdIcon === 'gmd' ? <ShareIconGmd /> : <ShareIconiOS />;
  }

  /**
   * Handles the share button click
   * Show's share screen for app
   * @param {Object} event The click event object
   */
  handleClick = () => {
    this.props.shareItem();
  };

  /**
   * Renders the components
   * @returns {JSX}
   */
  render() {
    if (!this.props.shareParams || this.props.shareParams.deepLink === undefined) {
      return null;
    }

    return (
      <button
        className={this.constructor.getIconStyle()}
        data-test-id="shareIcon"
        type="button"
      >
        <Ripple className={styles.ripple(env.isIOSTheme())} onComplete={this.handleClick}>
          {this.constructor.renderIcon()}
        </Ripple>
      </button>
    );
  }
}

export default withPageProductId(connect(ShareButton));
