import React from "react"
import { Brand } from "@kaizen/brand"
import { Heading } from "@kaizen/typography"
import { Collapsible, CollapsibleProps } from ".."
import styles from "./ExpertAdviceCollapsible.module.scss"

export type ExpertAdviceCollapsibleProps = Omit<
  CollapsibleProps,
  "renderHeader" | "variant" | "group" | "separated"
>

/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const ExpertAdviceCollapsible = (
  props: ExpertAdviceCollapsibleProps
): JSX.Element => (
  <Collapsible
    {...props}
    noSectionPadding
    classNameOverride={styles.expertAdviceContainer}
    renderHeader={(): JSX.Element => (
      <>
        <div className={styles.expertAdviceHeader}>
          <Brand
            classNameOverride={styles.expertAdviceIcon}
            alt=""
            variant="collective-intelligence"
            reversed
          />
          <Heading
            variant="heading-4"
            tag="span"
            classNameOverride={styles.expertAdviceHeading}
          >
            {props.title}
          </Heading>
        </div>
      </>
    )}
  >
    <div className={styles.expertAdviceSection}>{props.children}</div>
  </Collapsible>
)

ExpertAdviceCollapsible.displayName = "ExpertAdviceCollapsible"
