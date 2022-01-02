import React, { forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef, useCoTheme } from '@co-design/styles';
import { Text, SharedTextProps } from '../Text/Text';
import useStyles from './Anchor.style';

interface _SharedTextProps extends SharedTextProps {
  underlineOnHover?: boolean;
}

export type AnchorProps<C extends React.ElementType> = PolymorphicComponentProps<C, _SharedTextProps>;

type AnchorComponent = <C extends React.ElementType = 'a'>(props: AnchorProps<C>) => React.ReactElement;

export const Anchor: AnchorComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'a'>(
    { component, color, underlineOnHover = true, className, co, overrideStyles, ...props }: AnchorProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const theme = useCoTheme();
    const { classes, cx } = useStyles({ color: color || theme.primaryColor, underlineOnHover }, { co, overrideStyles, name: 'Anchor' });
    const buttonProps = component === 'button' ? { type: 'button' } : null;

    return <Text component={(component || 'a') as any} ref={ref} className={cx(classes.root, className)} {...buttonProps} {...props} />;
  },
);

Anchor.displayName = '@co-design/core/Anchor';
