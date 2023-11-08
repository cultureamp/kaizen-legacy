import React from "react"
import styles from "./ToolbarSection.module.scss"

export interface ToolbarSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}
/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const ToolbarSection = (props: ToolbarSectionProps): JSX.Element => (
  <div className={styles.toolbarSection} {...props}></div>
)

ToolbarSection.displayName = "ToolbarSection"
