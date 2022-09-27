import { Menu } from "@mui/material";
import React from "react";
import Icon from "../../atoms/icon";
import TypographyTag from "../../atoms/typographyTag";

interface DeliveryDropdownProps {
  time : string,
  fee: number
}
const DeliveryDropdown = ({time,fee}:DeliveryDropdownProps) => {
  return <div>
   {/* TransportIcon */}
  <TypographyTag>{time}</TypographyTag>
  <TypographyTag>{fee}</TypographyTag>
  {/* menu dropdown items */}
</div>;
};

export default DeliveryDropdown;