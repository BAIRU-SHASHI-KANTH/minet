import { Grid } from "@mui/material";
import React from "react";
import Avatar from "../../atoms/avatar";
import TypographyTag from "../../atoms/typographyTag";

interface card {
  src: string;
  type: string;
  value: string;
}
interface PortfolioCardProps {
  cardDetails: card[];
}
const PortfolioCard = ({ cardDetails }: PortfolioCardProps) => {
  return (
    <Grid container direction="row" justifyContent="flex-start">
      {cardDetails.map(({ src, type, value }, index) => {
        return (
          <Grid item key={index}>
            <Avatar src={src} />
            <TypographyTag variant="body1">{type}</TypographyTag>
            <TypographyTag variant="subtitle1">{value}</TypographyTag>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PortfolioCard;
