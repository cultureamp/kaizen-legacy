import React from "react"
import classnames from "classnames"
import { Icon } from "@kaizen/component-library"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"

import { useMenuTriggerContext } from "../../../provider/MenuTriggerProvider"
import styles from "./TriggerButtonBase.module.scss"

export type TriggerButtonBaseProps = {
  children: React.ReactNode
  classNameOverride?: string // TODO: migrate it to use OverrideClassName<T> and omit the props controlled by React-Aria
  disabled?: boolean
}

export const TriggerButtonBase = ({
  children,
  classNameOverride,
  disabled,
}: TriggerButtonBaseProps): JSX.Element => {
  const { buttonProps, buttonRef, menuTriggerState } = useMenuTriggerContext()

  return (
    <button
      disabled={disabled}
      type="button"
      {...buttonProps}
      ref={buttonRef}
      className={classnames(styles.button, classNameOverride)}
    >
      {children}

      <Icon
        icon={menuTriggerState.isOpen ? chevronUp : chevronDown}
        role="presentation"
        classNameOverride={styles.icon}
      />
    </button>
  )
}

TriggerButtonBase.displayName = "TriggerButtonBase"
