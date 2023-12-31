import React from "react"
import GenericButton, {
  GenericProps,
  ButtonFormAttributes,
  BadgeProps,
  WorkingProps,
  WorkingUndefinedProps,
} from "./components/GenericButton"

export type IconButtonProps = GenericProps &
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
    icon?: React.SVGAttributes<SVGSymbolElement>
    disabled?: boolean
  }

/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const IconButton = (props: IconButtonProps): JSX.Element => (
  <GenericButton iconButton {...props} />
)

IconButton.defaultProps = {
  primary: false,
  destructive: false,
  disabled: false,
  reversed: false,
  secondary: false,
}

IconButton.displayName = "IconButton"
