import React from 'react';
import { LinearGradientProps } from './LinearGradient';
import { Stop, Defs, RadialGradient as SvgRadialGradient } from '@vx/primitives';

export type RadialGradientProps = Pick<
  LinearGradientProps,
  | 'id'
  | 'from'
  | 'to'
  | 'fromOffset'
  | 'fromOpacity'
  | 'toOffset'
  | 'toOpacity'
  | 'rotate'
  | 'transform'
  | 'children'
> &
  React.SVGProps<SVGRadialGradientElement>; // passed as rest props to radialGradient

export default function RadialGradient({
  children,
  id,
  from,
  to,
  fromOffset = '0%',
  fromOpacity = 1,
  toOffset = '100%',
  toOpacity = 1,
  rotate,
  transform,
  ...restProps
}: RadialGradientProps) {
  return (
    <Defs>
      <SvgRadialGradient
        id={id}
        gradientTransform={rotate ? `rotate(${rotate})` : transform}
        {...restProps}
      >
        {!!children && children}
        {!children && <Stop offset={fromOffset} stopColor={from} stopOpacity={fromOpacity} />}
        {!children && <Stop offset={toOffset} stopColor={to} stopOpacity={toOpacity} />}
      </SvgRadialGradient>
    </Defs>
  );
}
