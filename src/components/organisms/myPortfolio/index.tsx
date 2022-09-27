import { Grid } from "@mui/material";
import React from "react";

interface MyPortfolioProps {
    data : object[],
    onClick : React.MouseEventHandler<HTMLButtonElement>
}

const MyPortfolio = ({data,onClick}:MyPortfolioProps) => {
  return (
    <Grid container direction="row">
        {
            // details , on click display analysis
        }
    </Grid>
  );
};

export default MyPortfolio;