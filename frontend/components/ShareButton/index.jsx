import React, { Component } from 'react';
import ShareIconiOS from '@shopgate/pwa-ui-ios/icons/ShareIcon';
import ShareIconGmd from '@shopgate/pwa-ui-material/icons/ShareIcon';
import Ripple from '@shopgate/pwa-ui-shared/Ripple';
import PropTypes from 'prop-types';
import styles from './style';
import isiOSTheme from '../../helpers/isiOSTheme';
import getConfig from '../../helpers/getConfig';
import connect from '../../connector';

const { gmdIcon, iOSIcon } = getConfig();
const iOSTheme = isiOSTheme();
/**
 * ShareButton component
 */
class ShareButton extends Component {
  static propTypes = {
    shareItem: PropTypes.func.isRequired,
    onRippleComplete: PropTypes.func,
    shareParams: PropTypes.shape(),
  };

  static defaultProps = {
    onRippleComplete: () => {},
    shareParams: null,
  };
  /**
   * Gets the icon style.
   * @returns {string}
   */
  static getIconStyle() {
    if (iOSTheme) {
      return iOSIcon === 'ios' ? styles.buttoniOSThemeiOSIcon : styles.buttoniOSThemeMaterialIcon;
    }
    return gmdIcon === 'gmd' ? styles.buttonMaterialThemeMaterialIcon : styles.buttonMaterialThemeiOSIcon;
  }

  /**
   * Renders the share icon depending on theme
   * @returns {JSX}
   */
  static renderIcon = () => {
    if (iOSTheme) {
      return iOSIcon === 'ios' ? <ShareIconiOS /> : <ShareIconGmd />;
    }

    return gmdIcon === 'gmd' ? <ShareIconGmd /> : <ShareIconiOS />;
  }

  onRippleComplete = () => {
    this.props.onRippleComplete(this.handleClick());
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

    return (
      <div className={iOSTheme ? styles.iOSButtons : styles.androidButtons}>
        <button
          className={this.constructor.getIconStyle()}
          data-test-id="shareIcon"
        >
          <Ripple className={`${styles.ripple}`} onComplete={this.onRippleComplete}>
            {this.constructor.renderIcon()}
          </Ripple>
        </button>
      </div>
    );
  }
}

export default connect(ShareButton);
