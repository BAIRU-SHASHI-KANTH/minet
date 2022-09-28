import { Grid } from "@mui/material";
import React from "react";
import Avatar from "../../atoms/avatar";
import Icon from "../../atoms/icon";

interface AccountDropdownProps {
  avatarSrc: string;
}
const AccountDropdown = ({ avatarSrc }: AccountDropdownProps) => {
  return (
    <Grid container direction="row" spacing={2}>
      <Avatar src={avatarSrc} />
      <Icon src={"dropdown"}/>
    </Grid>
  );
};

export default AccountDropdown;
