# Shopgate Connect - Native Share Extension

[![GitHub license](http://dmlc.github.io/img/apache2.svg)](LICENSE)
[![Build Status](https://travis-ci.org/shopgate/ext-pdp-native-share.svg?branch=master)](https://travis-ci.org/shopgate/ext-pdp-native-share) [![Coverage Status](https://coveralls.io/repos/github/shopgate/ext-pdp-native-share/badge.svg?branch=master)](https://coveralls.io/github/shopgate/ext-pdp-native-share?branch=master)

This extension will create a button for the native share app command on product detail pages for iOS and Android devices.
This extension will also add a Configuration field to the Connect merchant admin to determine which svg icon to use. 'ios' or 'gmd'

## Configuration

Set the following values in your Shopgate Connect Admin:
* `iOSIcon` - (ios/gmd) Defaults to "ios". Set to "gmd" in order to use the GMD icon on the iOS theme.
* `iOSIconStyles` - (json) Styles for iOs button component.
* `gmdIcon` - (ios/gmd) Defaults to "gmd". Set to "ios" in order to use the iOS icon on the GMD theme.
* `useWithStickyButtons` - (true/false) Defaults to "false". Set to "true" in order to make it compatible with sticky-pdp-buttons extension.

### Example

```json
{
  "iOSIcon": "gmd",
  "gmdIcon": "ios",
  "useWithStickyButtons": false,
  "iOSIconStyles": {
    "right": "16px",
    "top": "-80px"
  }
}
```

## Changelog

See [CHANGELOG.md](CHANGELOG.md) file for more information.

## Contributing

See [CONTRIBUTING.md](docs/CONTRIBUTING.md) file for more information.

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.

## License

This extension is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.
