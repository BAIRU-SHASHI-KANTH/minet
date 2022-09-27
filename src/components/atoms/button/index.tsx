import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";

const Button = ({ variant, onClick, children }: ButtonProps) => {
  return (
    <MuiButton variant={variant} onClick={onClick}>
      {children}
    </MuiButton>
  );
};

export default Button;