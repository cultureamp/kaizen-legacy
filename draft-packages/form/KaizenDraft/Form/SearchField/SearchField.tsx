import React, { useState } from "react"
import { v4 } from "uuid"
import { InputSearch, InputSearchProps, Label } from "../Primitives"
import styles from "./SearchField.module.scss"

export interface SearchFieldProps extends Omit<InputSearchProps, "id"> {
  id?: string
  labelText: string
  disabled?: boolean
  reversed?: boolean
  secondary?: boolean
}

/**
 * @deprecated Please use the same component from `@kaizen/components`
 */
export const SearchField = ({
  id: propsId,
  labelText,
  disabled,
  reversed = false,
  secondary = false,
  classNameOverride,
  ...restProps
}: SearchFieldProps): JSX.Element => {
  const showVisibleLabel = !secondary
  const [id] = useState<string>(propsId || v4())

  return (
    <div className={classNameOverride}>
      {showVisibleLabel && (
        <Label
          htmlFor={id}
          labelText={labelText}
          reversed={reversed}
          disabled={disabled}
          classNameOverride={styles.label}
        />
      )}
      <InputSearch
        aria-label={!showVisibleLabel ? labelText : undefined}
        id={id}
        disabled={disabled}
        reversed={reversed}
        secondary={secondary}
        {...restProps}
      />
    </div>
  )
}

SearchField.displayName = "SearchField"
