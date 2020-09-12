import React from 'react';
import cx from 'classnames';
import { Platform, Line as SvgLine } from '@vx/primitives';

import { AddSVGProps } from '../types';

interface Point {
  x?: number;
  y?: number;
}

export type LineProps = {
  /** className to apply to line element. */
  className?: string;
  /** reference to line element. */
  innerRef?: React.Ref<SVGLineElement>;
  /** fill color applied to line element. */
  fill?: string;
  /** Starting x,y point of the line. */
  from?: Point;
  /** Ending x,y point of the line. */
  to?: Point;
};

export default function Line({
  from = { x: 0, y: 0 },
  to = { x: 1, y: 1 },
  fill = 'transparent',
  className,
  innerRef,
  ...restProps
}: AddSVGProps<LineProps, SVGLineElement>) {
  return (
    <SvgLine
      ref={innerRef}
      className={Platform.OS === 'web' && cx('vx-line', className)}
      x1={from.x}
      y1={from.y}
      x2={to.x}
      y2={to.y}
      fill={fill}
      {...restProps}
    />
  );
}
