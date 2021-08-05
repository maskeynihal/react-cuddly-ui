import React from "react";
import { Meta, Story } from "@storybook/react";

import { Button } from "./index";
import { ButtonProps } from "./Button";

export default {
  component: Button,
  title: "Components/Button",
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: "Default Button",
  type: "default",
};

export const Primary: React.VFC<{}> = () => <Button>Primary</Button>;
