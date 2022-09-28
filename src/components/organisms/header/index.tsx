import { Grid } from "@mui/material";
import React from "react";
import Button from "../../atoms/button";
import TypographyTag from "../../atoms/typographyTag";
import AccountDropDown from "../../molecules/accountDropdown";

interface Account {
  src: string;
  username: string;
}

interface HeaderProps {
  accountDetails: Account;
}
const Header = ({ accountDetails }: HeaderProps) => {
  return (
    <Grid container direction="row" justifyContent="space-around">
      <Grid item>
        <TypographyTag variant="h4">Dashboard</TypographyTag>
      </Grid>
      <Grid item>
        <Button>SELL</Button>
        <Button>BUY</Button>
        <AccountDropDown avatarSrc={accountDetails.src} />
      </Grid>
    </Grid>
  );
};

export default Header;
