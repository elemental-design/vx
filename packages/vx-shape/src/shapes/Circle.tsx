import React from 'react';
import cx from 'classnames';
import { Platform, Circle as SvgCircle } from '@vx/primitives';

import { AddSVGProps } from '../types';

export type CircleProps = {
  /** className to apply to circle element. */
  className?: string;
  /** reference to circle element. */
  innerRef?: React.Ref<SVGCircleElement>;
};

export default function Circle({
  className,
  innerRef,
  ...restProps
}: AddSVGProps<CircleProps, SVGCircleElement>) {
  return <SvgCircle ref={innerRef} className={Platform.OS === 'web' && cx('vx-circle', className)} {...restProps} />;
}
