import { css } from 'glamor';
import { iOSIconStyles } from '../../config';

const iOSButtons = css({
  position: 'absolute',
  right: 62,
  top: -20,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
}, iOSIconStyles).toString();

export default { iOSButtons };
