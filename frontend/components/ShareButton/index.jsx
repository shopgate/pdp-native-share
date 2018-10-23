import React, { Component } from 'react';
import ShareIcon from '@shopgate/pwa-ui-shared/icons/ShareIcon';
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
   * Renders the share icon depending on theme
   * @returns {JSX}
   */
  renderIcon = () => {
    if (iOSTheme) {
      return <ShareIcon icon={iOSIcon} />;
    }
    return <ShareIcon icon={gmdIcon} />;
  }
  /**
   * Renders the components
   * @returns {JSX}
   */
  render() {
    if (!this.props.shareParams || this.props.shareParams.deepLink === undefined) {
      return null;
    }
    const buttonLocaation = iOSTheme ? styles.iOSButtons : styles.androidButtons;
    let iconStyle = styles.buttoniOSThemeiOSIcon;
    if (iOSTheme) {
      iconStyle = iOSIcon === 'ios' ? styles.buttoniOSThemeiOSIcon : styles.buttoniOSThemeMaterialIcon;
    } else {
      iconStyle = gmdIcon === 'gmd' ? styles.buttonMaterialThemeMaterialIcon : styles.buttonMaterialThemeiOSIcon;
    }
    return (
      <div className={`${buttonLocaation}`}>
        <button
          className={`${iconStyle}`}
          data-test-id="shareIcon"
        >
          <Ripple className={`${styles.ripple}`} onComplete={this.onRippleComplete}>
            {this.renderIcon()}
          </Ripple>
        </button>
      </div>
    );
  }
}

export default connect(ShareButton);
