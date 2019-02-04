import { connect } from 'react-redux';
import shareItem from '@shopgate/pwa-core/commands/shareItem';
import { getShareParams } from './selectors';

/**
 * Maps state to props
 * @param {Object} state State.
 * @param {Object} props props.
 * @returns {Object}
 */
const mapStateToProps = (state, props) => ({
  shareParams: getShareParams(state, props),
  shareItem: () => {
    shareItem(getShareParams(state, props));
  },
});

export default connect(mapStateToProps);
