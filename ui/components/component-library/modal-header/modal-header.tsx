import React from 'react';
import classnames from 'classnames';

import { HeaderBase, ButtonIcon, BUTTON_ICON_SIZES, IconName } from '..';

import { ModalHeaderProps } from './modal-header.types';

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  className = '',
  children,
  onClickCloseButton,
  closeButtonProps,
  onClickBackButton,
  backButtonProps,
  startAccessory,
  endAccessory,
  ...props
}) => {
  return (
    <HeaderBase
      className={classnames('mm-modal-header', className)}
      startAccessory={
        startAccessory ||
        (onClickBackButton && (
          <ButtonIcon
            iconName={IconName.ArrowLeft}
            onClick={onClickBackButton}
            size={BUTTON_ICON_SIZES.SM}
            {...backButtonProps}
          />
        ))
      }
      endAccessory={
        endAccessory ||
        (onClickCloseButton && (
          <ButtonIcon
            iconName={IconName.Close}
            onClick={onClickCloseButton}
            size={BUTTON_ICON_SIZES.SM}
            {...closeButtonProps}
          />
        ))
      }
      {...props}
    >
      {children}
    </HeaderBase>
  );
};
