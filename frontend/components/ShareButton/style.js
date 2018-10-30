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
};

const buttoniOSThemeiOSIcon = css(buttonProto).toString();

const buttoniOSThemeMaterialIcon = css({
  ...buttonProto,
  strokeWidth: 0.25,
}).toString();

const buttonMaterialThemeMaterialIcon = css({
  minWidth: 56,
  height: 56,
  fontSize: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}).toString()

const buttonMaterialThemeiOSIcon = css({
  ...buttonProto,
  boxShadow: '0 8px 13px rgba(0, 0, 0, 0.25)',
}).toString();

const ripple = css({
  padding: 8,
  fontSize: 24,
}).toString();

export default {
  buttoniOSThemeiOSIcon,
  buttoniOSThemeMaterialIcon,
  buttonMaterialThemeMaterialIcon,
  buttonMaterialThemeiOSIcon,
  ripple,
};

