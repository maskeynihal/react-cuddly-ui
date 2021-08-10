import React from "react";
import { Meta, Story } from "@storybook/react";

import { Link } from "./index";
import { LinkProps } from "./Link";

export default {
  component: Link,
  title: "Components/Link",
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const NormalLink = Template.bind({});
NormalLink.args = {
  children: "Click Me",
  href: "http://example.com/",
};
