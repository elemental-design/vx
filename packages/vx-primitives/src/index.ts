declare module '@vx/primitives' {
  import { ReactNode, FunctionComponent } from 'react';
  import {
    CommonPathProps,
    ImageProps,
    LineProps,
    LinearGradientProps,
    PathProps,
    PatternProps,
    EllipseProps,
    DefinitionProps,
    CircleProps,
    SvgProps,
    PolygonProps,
    PolylineProps,
    RadialGradientProps,
    RectProps,
    StopProps,
    SymbolProps,
    TextProps,
    TextPathProps,
    TSpanProps,
    UseProps,
    GProps,
    // @ts-ignore
  } from 'react-native-svg';

  // type BaseSvgElement = FunctionComponent<{ className?: string | undefined, children?: ReactNode }>
  // type BaseProps = { className?: string; ref?: React.Ref<any> };
  type BaseProps = any;

  export const Defs: FunctionComponent<BaseProps & DefinitionProps>;
  export const Ellipse: FunctionComponent<BaseProps & EllipseProps>;
  export const G: FunctionComponent<BaseProps & GProps>;
  export const Image: FunctionComponent<BaseProps & ImageProps>;
  export const Line: FunctionComponent<BaseProps & LineProps>;
  export const LinearGradient: FunctionComponent<BaseProps & LinearGradientProps>;
  export const Path: FunctionComponent<BaseProps & PathProps>;
  export const Pattern: FunctionComponent<BaseProps & PatternProps>;
  export const Polygon: FunctionComponent<BaseProps & PolygonProps>;
  export const Polyline: FunctionComponent<BaseProps & PolylineProps>;
  export const RadialGradient: FunctionComponent<BaseProps & RadialGradientProps>;
  export const Rect: FunctionComponent<BaseProps & RectProps>;
  export const Stop: FunctionComponent<BaseProps & StopProps>;
  export const Circle: FunctionComponent<BaseProps & CircleProps>;
  export const Symbol: FunctionComponent<BaseProps & SymbolProps>;
  export const Text: FunctionComponent<BaseProps & TextProps>;
  export const TextPath: FunctionComponent<BaseProps & TextPathProps>;
  export const TSpan: FunctionComponent<BaseProps & TSpanProps>;
  export const Use: FunctionComponent<BaseProps & UseProps>;

  export const Platform: {
    OS: string;
    Version: number;
  } & {
    select?: ((_: any) => void) | undefined;
    inject?: ((_: { OS: string; Version: number }) => void) | undefined;
  };

  export const inject: (
    api: {
      [key: string]: any;
    } & {
      Platform: {
        OS: string;
        Version: number;
      };
    },
  ) => void;
}

const _core = require('./core');

module.exports = _core;