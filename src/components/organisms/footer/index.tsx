import { Box, Button, Grid, Link } from "@mui/material";
import React from "react";

interface Link {
  name: string;
  url: string;
}
interface FooterProps {
  links: Link[];
}
const Footer = ({ links }: FooterProps) => {
  return (
    <div>
      <Grid container direction="row">
        {links.map((link) => {
          return <Link href={link.url}>{link.name}</Link>;
        })}
      </Grid>
      <Button>NEED HELP</Button>
    </div>
  );
};

export default Footer;
