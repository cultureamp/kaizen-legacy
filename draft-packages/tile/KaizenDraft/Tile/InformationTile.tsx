import React from "react"
import { GenericTile, GenericTileProps } from "./components/GenericTile"

export type InformationTileProps = GenericTileProps

/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const InformationTile = (props: InformationTileProps): JSX.Element => (
  <GenericTile {...props} />
)

InformationTile.displayName = "InformationTile"
