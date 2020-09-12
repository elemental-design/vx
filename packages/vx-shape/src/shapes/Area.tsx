import React from 'react';
import cx from 'classnames';
import { Platform, Path } from '@vx/primitives';

import { AddSVGProps, BaseAreaProps } from '../types';
import { area } from '../util/D3ShapeFactories';

export type AreaProps<Datum> = BaseAreaProps<Datum>;

export default function Area<Datum>({
  children,
  x,
  x0,
  x1,
  y,
  y0,
  y1,
  data = [],
  defined = () => true,
  className,
  curve,
  innerRef,
  ...restProps
}: AddSVGProps<AreaProps<Datum>, SVGPathElement>) {
  const path = area<Datum>({ x, x0, x1, y, y0, y1, defined, curve });
  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (children) return <>{children({ path })}</>;
  return (
    <Path ref={innerRef} className={Platform.OS === 'web' && cx('vx-area', className)} d={path(data) || ''} {...restProps} />
  );
}
