import React from "react"
import GenericButton, { GenericProps } from "./components/GenericButton"

export interface PaginationLinkProps extends GenericProps {
  pageNumber: number
  isActive?: boolean
  /* A description for screen readers to understand because label used here is a number */
  "aria-label": string
}

/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const PaginationLink = (props: PaginationLinkProps): JSX.Element => (
  <GenericButton
    {...props}
    paginationLink
    label={`${props.pageNumber}`}
    aria-label={props["aria-label"]}
  />
)

PaginationLink.defaultProps = {
  reversed: false,
  isActive: false,
}

PaginationLink.displayName = "PaginationLink"
