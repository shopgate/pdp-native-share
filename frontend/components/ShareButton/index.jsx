import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from '../../connector';

/**
 * ShareButton component
 */
class ShareButton extends Component {
  static propTypes = {
    shareItem: PropTypes.func.isRequired,
    shareParams: PropTypes.shape(),
    show: PropTypes.bool,
  };

  static defaultProps = {
    shareParams: null,
    show: true,
  };
  /**
   * Handles the share button click
   * Show's share screen for app
   */
  handleClick = () => {
    this.props.shareItem();
  }
  /**
   * Renders the components
   * @returns {JSX}
   */
  render() {
    if (!this.props.shareParams || !this.props.show) {
      return null;
    }
    return (
      <button onClick={this.handleClick}>Something to click</button>
    );
  }
}

export default connect(ShareButton);
