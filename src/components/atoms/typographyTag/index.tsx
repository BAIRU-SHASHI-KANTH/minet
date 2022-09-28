import React from "react";
import { Typography } from "@mui/material";

type TagProps = {
    children: React.ReactNode;
    variant?:
      | "h4"
      | "h6"
      | "subtitle1"
      | "subtitle2"
      | "body1"
      | "body2"
      | "button"
      | "caption"
      | "overline";
    color?: string;
  };

const TypographyTag = ({ variant,color,children }: TagProps) => {
  return (
  <Typography variant={variant} color={color}>{children}</Typography>
  );
};

export default TypographyTag;