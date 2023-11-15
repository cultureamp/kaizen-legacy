import React from "react"
import { HeadingProps } from "@kaizen/typography"
import GenericNotification, {
  NotificationType,
} from "./components/GenericNotification"
import styles from "./components/GenericNotification.module.scss"

export type InlineNotificationProps = {
  type: NotificationType
  children?: React.ReactNode
  autohide?: boolean
  autohideDelay?: "short" | "long"
  persistent: boolean
  hideCloseIcon: boolean
  onHide?: () => void
  automationId?: string
  noBottomMargin?: boolean
  forceMultiline?: boolean
  headingProps?: HeadingProps
  isSubtle?: boolean
  /**
   * **Deprecated:** Use headingProps
   * @deprecated
   */
  title?: string
}

/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const InlineNotification = ({
  persistent,
  hideCloseIcon,
  isSubtle,
  ...otherProps
}: InlineNotificationProps): JSX.Element => (
  <GenericNotification
    style="inline"
    persistent={persistent || hideCloseIcon}
    classNameOverride={isSubtle ? styles.subtle : undefined}
    {...otherProps}
  />
)

InlineNotification.defaultProps = {
  autohideDelay: "short",
  autohide: false,
  hideCloseIcon: false,
  persistent: false,
}

InlineNotification.displayName = "InlineNotification"
