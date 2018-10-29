import { connect } from 'react-redux';
import shareItem from '@shopgate/pwa-core/commands/shareItem';
import { getShareParams } from './selectors';

/**
 * Maps state to props
 * @param {Object} state State.
 * @returns {Object}
 */
const mapStateToProps = state => ({
  shareParams: getShareParams(state),
  shareItem: () => {
    shareItem(getShareParams(state));
  },
});

export default connect(mapStateToProps);
