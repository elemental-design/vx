import React from 'react';
import cx from 'classnames';
import { Platform, Rect } from '@vx/primitives';

import { AddSVGProps } from '../types';

export type BarProps = {
  /** className to apply to rect element. */
  className?: string;
  /** reference to rect element. */
  innerRef?: React.Ref<SVGRectElement>;
};

export default function Bar({
  className,
  innerRef,
  ...restProps
}: AddSVGProps<BarProps, SVGRectElement>) {
  return <Rect ref={innerRef} className={Platform.OS === 'web' && cx('vx-bar', className)} {...restProps} />;
}
