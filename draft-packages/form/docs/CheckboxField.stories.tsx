import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import { CheckboxField, CheckedStatus } from "@kaizen/draft-form"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

export default {
  tags: ["autodocs"],
  title: "Components/Checkbox/Checkbox Field",
  component: CheckboxField,
  parameters: {
    docs: {
      description: {
        component: 'import { CheckboxField } from "@kaizen/draft-form";',
      },
    },
  },
  argTypes: {
    checkedStatus: {
      control: "disabled",
    },
  },
} satisfies Meta<typeof CheckboxField>

export const InteractiveKaizenSiteDemo: StoryFn<
  typeof CheckboxField
> = args => {
  const [status, setStatus] = useState<CheckedStatus>()
  const onCheckHandler = (): void => {
    const newStatus = status === "on" ? "off" : "on"
    setStatus(newStatus)
  }
  return (
    <CheckboxField
      {...args}
      onCheck={onCheckHandler}
      checkedStatus={status}
      labelText="label"
    />
  )
}
InteractiveKaizenSiteDemo.storyName = "Checkbox Field"

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader headings={["Base", "Disabled"]} />
      <StoryWrapper.Row rowTitle="On">
        <CheckboxField
          checkedStatus="on"
          labelText="Label"
          reversed={isReversed}
        />
        <CheckboxField
          checkedStatus="on"
          labelText="Label"
          disabled
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Off">
        <CheckboxField
          checkedStatus="off"
          labelText="Label"
          reversed={isReversed}
        />
        <CheckboxField
          checkedStatus="off"
          labelText="Label"
          disabled
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Mixed">
        <CheckboxField
          checkedStatus="mixed"
          labelText="Label"
          reversed={isReversed}
        />
        <CheckboxField
          checkedStatus="mixed"
          labelText="Label"
          disabled
          reversed={isReversed}
        />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="No Bottom Margin">
        <div>
          <CheckboxField
            checkedStatus="off"
            labelText="Label"
            noBottomMargin
            reversed={isReversed}
          />
          <CheckboxField
            checkedStatus="off"
            labelText="Label"
            noBottomMargin
            reversed={isReversed}
          />
        </div>
      </StoryWrapper.Row>
    </StoryWrapper>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
  controls: { disable: true },
}
