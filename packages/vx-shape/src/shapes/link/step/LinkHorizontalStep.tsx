import React from 'react';
import cx from 'classnames';
import { path as d3Path } from 'd3-path';
import { Platform, Path } from '@vx/primitives';

import { SharedLinkProps, AccessorProps, AddSVGProps } from '../../../types';
import { getX, getY, getSource, getTarget } from '../../../util/accessors';

export function pathHorizontalStep<Link, Node>({
  source,
  target,
  x,
  y,
  percent,
}: Required<AccessorProps<Link, Node>> & { percent: number }) {
  return (link: Link) => {
    const sourceData = source(link);
    const targetData = target(link);

    const sx = x(sourceData);
    const sy = y(sourceData);
    const tx = x(targetData);
    const ty = y(targetData);

    const path = d3Path();
    path.moveTo(sx, sy);
    path.lineTo(sx + (tx - sx) * percent, sy);
    path.lineTo(sx + (tx - sx) * percent, ty);
    path.lineTo(tx, ty);

    return path.toString();
  };
}

type LinkHorizontalStepProps<Link, Node> = {
  percent?: number;
} & AccessorProps<Link, Node> &
  SharedLinkProps<Link>;

export default function LinkHorizontalStep<Link, Node>({
  className,
  innerRef,
  data,
  path,
  percent = 0.5,
  x = getX,
  y = getY,
  source = getSource,
  target = getTarget,
  children,
  ...restProps
}: AddSVGProps<LinkHorizontalStepProps<Link, Node>, SVGPathElement>) {
  const pathGen = path || pathHorizontalStep({ source, target, x, y, percent });
  if (children) return <>{children({ path: pathGen })}</>;
  return (
    <Path
      ref={innerRef}
      className={Platform.OS === 'web' && cx('vx-link vx-link-horizontal-step', className)}
      d={pathGen(data) || ''}
      {...restProps}
    />
  );
}
