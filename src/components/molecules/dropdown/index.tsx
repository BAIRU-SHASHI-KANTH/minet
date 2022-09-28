import { Menu, MenuItem } from "@mui/material";
import React from "react";
import Button from "../../atoms/button";
import Icon from "../../atoms/icon";
import TypographyTag from "../../atoms/typographyTag";

interface DropdownProps {
  items: string[];
}

const Dropdown = ({ items }: DropdownProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        <TypographyTag variant="body1">Dropdown</TypographyTag>
        <Icon src="downArrow" />
      </Button>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {items.map((item, key) => {
          return (
            <MenuItem onClick={handleClose} key={key} disableRipple>
              {item}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default Dropdown;
