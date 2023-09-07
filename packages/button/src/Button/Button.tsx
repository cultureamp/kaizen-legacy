import React, { forwardRef, Ref } from "react"
import GenericButton, {
  GenericProps,
  ButtonFormAttributes,
  BadgeProps,
  ButtonRef,
  WorkingProps,
  WorkingUndefinedProps,
} from "./components/GenericButton"

export type ButtonProps = GenericProps &
  ButtonFormAttributes &
  (WorkingProps | WorkingUndefinedProps) & {
    label: string
    primary?: boolean
    destructive?: boolean
    secondary?: boolean
    /** @default "regular" */
    size?: "small" | "regular"
    badge?: BadgeProps
    type?: "submit" | "reset" | "button"
    fullWidth?: boolean
    iconPosition?: "start" | "end"
    icon?: React.SVGAttributes<SVGSymbolElement>
    disabled?: boolean
  }

/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const Button = forwardRef(
  (props: ButtonProps, ref: Ref<ButtonRef | undefined>) => (
    <GenericButton {...props} ref={ref} />
  )
)

Button.defaultProps = {
  fullWidth: false,
  primary: false,
  secondary: false,
  destructive: false,
  disabled: false,
  reversed: false,
  iconPosition: "start",
  newTabAndIUnderstandTheAccessibilityImplications: false,
}

Button.displayName = "Button"
