import React from "react"
import classnames from "classnames"
import { BaseButton, BaseButtonProps } from "../BaseButton"
import styles from "./ActionButton.module.scss"

export type ActionButtonProps = Omit<BaseButtonProps, "icon">
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const ActionButton = ({
  classNameOverride,
  ...restProps
}: ActionButtonProps): JSX.Element => (
  <BaseButton
    classNameOverride={classnames(styles.actionButton, classNameOverride)}
    {...restProps}
  />
)

ActionButton.displayName = "ActionButton"
