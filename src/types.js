// @flow

// In case you are wondering, the reason for User[Configuration] separation
// is because $Shape<> does not work with covariant types.
// @see http://imgur.com/a/qdolZ

type CookieType = {|
  +name: string,
  +value: string
|};

export type UserDeviceMetricsOverrideType = {
  +deviceScaleFactor?: number,
  +fitWindow?: boolean,
  +height?: number,
  +mobile?: boolean,
  +width?: number
};

export type DeviceMetricsOverrideType = {
  +deviceScaleFactor: number,
  +fitWindow: boolean,
  +height: number,
  +mobile: boolean,
  +width: number
};

type FormatStylesType = (styles: string) => Promise<string>;

export type UserConfigurationType = {
  +cookies?: $ReadOnlyArray<CookieType>,
  +delay?: number,
  +deviceMetricsOverride?: UserDeviceMetricsOverrideType,
  +extractStyles?: boolean,
  +formatStyles?: FormatStylesType,
  +inlineStyles?: boolean
};

export type ConfigurationType = {|
  +cookies: $ReadOnlyArray<CookieType>,
  +delay: number,
  +deviceMetricsOverride: DeviceMetricsOverrideType,
  +extractStyles: boolean,
  +formatStyles?: FormatStylesType,
  +inlineStyles: boolean
|};
