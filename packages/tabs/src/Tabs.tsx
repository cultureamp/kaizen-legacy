import React, { HTMLAttributes, ReactNode } from "react"
import { Tabs as ReachTabs, TabsKeyboardActivation } from "@reach/tabs"

export type TabsProps = {
  /**
   * Index of tab to show by default
   * Only works in uncontrolled mode (when no selectedIndex is provided)
   */
  defaultIndex?: number
  /**
   * Set the selected tab explictly.
   * Enabled controlled mode, meaning you're also responsible for updating this using the onChange callback
   */
  selectedIndex?: number
  /**
   * Adjusts keyboard behaviour:
   * auto: active tab is changed immediately on arrow press.
   * manual: tab is only focused on arrow press, user must then press enter/space to activate. Designed for usages where changing tab is an expensive operation.
   */
  keyboardActivation?: "auto" | "manual"
  /**
   * Callback on tab change
   */
  onChange?: (index: number) => void
  children: ReactNode
} & Omit<HTMLAttributes<HTMLDivElement>, "onChange">

/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const Tabs = (props: TabsProps): JSX.Element => {
  const {
    defaultIndex,
    selectedIndex,
    keyboardActivation = "auto",
    onChange,
    children,
    ...restProps
  } = props
  return (
    <ReachTabs
      defaultIndex={defaultIndex}
      index={selectedIndex}
      keyboardActivation={
        keyboardActivation === "auto"
          ? TabsKeyboardActivation.Auto
          : TabsKeyboardActivation.Manual
      }
      onChange={onChange}
      {...restProps}
    >
      {children}
    </ReachTabs>
  )
}

Tabs.displayName = "Tabs"
