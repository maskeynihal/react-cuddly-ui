import React from "react";
import { Meta, Story } from "@storybook/react";

import { Button } from "./index";
import { ButtonProps } from "./Button";
import { action } from "@storybook/addon-actions";

export default {
  component: Button,
  title: "Components/Button",
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: "Default Button",
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  children: "Primary Button",
  type: "primary",
};
