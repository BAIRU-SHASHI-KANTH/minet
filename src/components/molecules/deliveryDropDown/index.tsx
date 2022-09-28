import { Grid, Menu, MenuItem } from "@mui/material";
import React from "react";
import Button from "../../atoms/button";
import Icon from "../../atoms/icon";
import TypographyTag from "../../atoms/typographyTag";

interface DeliveryDropdownProps {
  data: {time:string,fee:number}
}
const DeliveryDropdown = ({ data }: DeliveryDropdownProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container direction="row" spacing={2}>
      
      <Grid item>
      <Icon src={"transportModeIcon"} />
      </Grid>

      <Grid item>
        <TypographyTag variant="body1">{data.time}</TypographyTag>
        <TypographyTag variant="caption">{data.fee}</TypographyTag>
      </Grid>

      <Grid item>
        <Button
          variant="contained"
          onClick={handleClick}
        >
          <Icon src={"downArrow"}/>
        </Button>
        
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} disableRipple>
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
          </MenuItem>
        </Menu>
        </Grid>
    </Grid>
  );
};

export default DeliveryDropdown;
