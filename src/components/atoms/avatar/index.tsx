import React from "react";
import {Avatar as MuiAvatar} from "@mui/material"

interface AvatarProps {
  children?: any;
  src?: string;
  alt?: string;
}

const Avatar= ({src,alt,children}: AvatarProps) => {
  return (
    <MuiAvatar src={src} alt={alt}>{children}</MuiAvatar>
  );
};
export default Avatar;