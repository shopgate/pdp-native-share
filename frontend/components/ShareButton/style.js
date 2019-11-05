import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

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
  zIndex: 1,
  boxShadow: themeConfig.shadows.buttons.elevated,
};

const buttoniOSThemeiOSIcon = css(buttonProto).toString();

const buttoniOSThemeMaterialIcon = css({
  ...buttonProto,
  strokeWidth: 0.25,
}).toString();

const buttonMaterialThemeMaterialIcon = css({
  padding: 0,
  marginLeft: -16,
  outline: 0,
  minWidth: 56,
  height: 56,
  fontSize: '1.35rem',
}).toString();

const buttonMaterialThemeiOSIcon = css({
  ...buttonProto,
  boxShadow: themeConfig.shadows.buttons.elevated,
}).toString();

/**
 * Ripple style.
 * @param {boolean} isIos Is iOS theme?
 * @returns {string}
 */
const ripple = (isIos) => {
  if (isIos) {
    return css({
      padding: 8,
      fontSize: 24,
    }).toString();
  }

  return css({
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }).toString();
};

export default {
  buttoniOSThemeiOSIcon,
  buttoniOSThemeMaterialIcon,
  buttonMaterialThemeMaterialIcon,
  buttonMaterialThemeiOSIcon,
  ripple,
};

