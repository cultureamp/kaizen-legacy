/* eslint import/no-extraneous-dependencies: 0 */

import { defaultTheme } from "@kaizen/design-tokens"
import { tokens } from "@kaizen/design-tokens/js"

export const backgrounds = [
  { name: "White", value: defaultTheme.color.white },
  { name: "Gray 100", value: defaultTheme.color.gray["100"] },
  { name: "Gray 300", value: defaultTheme.color.gray["300"] },
  { name: "Purple 700", value: defaultTheme.color.purple["700"] },
  { name: "Blue 500", value: defaultTheme.color.blue["500"] },
  { name: "Green 500", value: defaultTheme.color.green["500"] },
  { name: "Yellow 500", value: defaultTheme.color.yellow["500"] },
  { name: "Orange 500", value: defaultTheme.color.orange["500"] },
  { name: "Red 500", value: defaultTheme.color.red["500"] },
]

// This is a temporary duplication until we find a way for storybook to like the above ^^ tokens with css variables rather than concretes.
export const cssVarBackgrounds = [
  { name: "White", value: tokens.color.white },
  { name: "Gray 100", value: tokens.color.gray["100"] },
  { name: "Gray 300", value: tokens.color.gray["300"] },
  { name: "Purple 700", value: tokens.color.purple["700"] },
  { name: "Blue 500", value: tokens.color.blue["500"] },
  { name: "Green 500", value: tokens.color.green["500"] },
  { name: "Yellow 500", value: tokens.color.yellow["500"] },
  { name: "Orange 500", value: tokens.color.orange["500"] },
  { name: "Red 500", value: tokens.color.red["500"] },
]
