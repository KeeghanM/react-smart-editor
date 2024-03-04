import { StoryFn, Meta } from "@storybook/react"
import SmartEditor from "./SmartEditor"

export default {
  title: "SmartEditor",
  component: SmartEditor,
} as Meta<typeof SmartEditor>

const Template: StoryFn<typeof SmartEditor> = (args) => (
  <SmartEditor {...args} />
)

export const Default = Template.bind({})
Default.args = {
  theme: "light",
  onChange: (v: string) => null,
}
