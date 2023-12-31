import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import Highlight from "react-highlight"
import { Paragraph } from "../../../typography/src/Paragraph"
import { Select } from "../../src/Select/Select"
import { groupedMockItems, singleMockItems } from "../MockData"
import { selectControls } from "../controls/selectControls"

export default {
  tags: ["autodocs"],
  title: "Components/Select",
  component: Select,
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      source: { type: "code" },
      description: {
        component: 'import { Select } from "@kaizen/select".',
      },
    },
  },
  argTypes: {
    ...selectControls,
  },
} satisfies Meta<typeof Select>

export const DefaultStory: StoryFn<typeof Select> = props => (
  <Select {...props} />
)

DefaultStory.storyName = "Select"
DefaultStory.args = {
  label: "label",
  items: singleMockItems,
  isFullWidth: false,
  description: "This is a description",
  isDisabled: false,
  placeholder: "Placeholder",
  defaultOpen: false,
  selectedKey: undefined,
}
DefaultStory.parameters = {
  docs: { source: { type: "code" } },
}

export const WithSections: StoryFn<typeof Select> = () => (
  <>
    <Select label="label" items={groupedMockItems} placeholder="Placeholder" />
    <div style={{ marginTop: 4 }}>
      <Paragraph variant="body">Items: </Paragraph>
      <Highlight className="json">
        {JSON.stringify(groupedMockItems, null, 2)}
      </Highlight>
    </div>
  </>
)
