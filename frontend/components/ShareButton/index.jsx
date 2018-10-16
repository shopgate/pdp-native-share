import React, { Component } from 'react';
import ShareIcon from '@shopgate/pwa-ui-ios/icons/ShareIcon';
import MaterialShareIcon from '@shopgate/pwa-ui-material/icons/MaterialShareIcon';
import Ripple from '@shopgate/pwa-ui-shared/Ripple';
import PropTypes from 'prop-types';
import styles from './style';
import connect from '../../connector';
/**
 * ShareButton component
 */
class ShareButton extends Component {
  static propTypes = {
    shareItem: PropTypes.func.isRequired,
    shareParams: PropTypes.shape().isRequired,
    iOSTheme: PropTypes.bool,
  };

  static defaultProps = {
    iOSTheme: true,
  };
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
  renderIcon() {
    if (this.props.iOSTheme) {
      return <ShareIcon />;
    }

    return <MaterialShareIcon />;
  }
  /**
   * Renders the components
   * @returns {JSX}
   */
  render() {
    if (!this.props.shareParams) {
      return null;
    }
    const buttons = this.props.iOSTheme ? styles.iOSButtons : styles.androidButtons;
    const className = this.props.iOSTheme ? styles.buttonFlat : styles.button;
    return (
      <div className={`${buttons}`}>
        <button
          className={`${className}`}
          onClick={this.handleClick}
          data-test-id="shareIcon"
        >
          <Ripple className={`${styles.ripple}`}>
            {this.renderIcon()}
          </Ripple>
        </button>
      </div>
    );
  }
}

export default connect(ShareButton);
