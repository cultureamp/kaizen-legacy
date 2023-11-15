import React, { ReactNode } from "react"
import { TabPanels as ReachTabPanels } from "@reach/tabs"
export interface TabPanelsProps {
  children: ReactNode
}

/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const TabPanels = (props: TabPanelsProps): JSX.Element => {
  const { children } = props
  return <ReachTabPanels>{children}</ReachTabPanels>
}
