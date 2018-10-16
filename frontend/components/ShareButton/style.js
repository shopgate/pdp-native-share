import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const androidButtons = css({
  position: 'absolute',
  right: 130,
  padding: 8,
  top: -30,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  zIndex: 1,
}).toString();

const iOSButtons = css({
  position: 'absolute',
  right: 68,
  top: -30,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  zIndex: 1,
}).toString();

const buttonProto = {
  display: 'block',
  position: 'relative',
  background: '#fff',
  borderRadius: '50%',
  padding: 0,
  fontSize: 20,
  lineHeight: 1,
  color: themeConfig.colors.accent,
  outline: 0,
};

const buttonFlat = css(buttonProto).toString();

const button = css({
  ...buttonProto,
  boxShadow: '0 8px 13px rgba(0, 0, 0, 0.25)',
}).toString();

const ripple = css({
  padding: 10,
}).toString();

export default {
  androidButtons,
  iOSButtons,
  buttonFlat,
  button,
  ripple,
};

