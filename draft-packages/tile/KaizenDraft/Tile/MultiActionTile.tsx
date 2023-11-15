import React from "react"
import { Box } from "@kaizen/component-library"
import Action from "./components/Action"
import {
  GenericTile,
  GenericTileProps,
  TileAction,
} from "./components/GenericTile"
import styles from "./MultiActionTile.module.scss"

export interface MultiActionTileProps extends Omit<GenericTileProps, "footer"> {
  primaryAction: TileAction
  secondaryAction?: TileAction
}

const renderActions = (
  primaryAction: TileAction,
  secondaryAction?: TileAction
): JSX.Element => (
  <div className={styles.actions}>
    {secondaryAction && (
      <Box mr={0.5}>
        <Action action={secondaryAction} secondary />
      </Box>
    )}
    <Action action={primaryAction} />
  </div>
)

/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const MultiActionTile = ({
  children,
  primaryAction,
  secondaryAction,
  ...restProps
}: MultiActionTileProps): JSX.Element => (
  <GenericTile
    footer={renderActions(primaryAction, secondaryAction)}
    {...restProps}
  >
    {children}
  </GenericTile>
)

MultiActionTile.displayName = "MultiActionTile"
