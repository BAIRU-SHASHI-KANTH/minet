import { Grid } from "@mui/material";
import React from "react";
import AccountDropDown from "../../molecules/accountDropdown";

interface HeaderProps {
    accountDetails:object[]
}
const Header = ({accountDetails}) => {
  return (
    <Grid container direction="row">
      {/* button components for buy and sell options
        accountDropDown */}
    </Grid>
  );
};

export default Header;