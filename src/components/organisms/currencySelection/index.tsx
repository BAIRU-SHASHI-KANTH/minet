import { Grid } from "@mui/material";
import React from "react";

interface CurrencyChipsProps {
  labels : string[],
  onClick : React.MouseEventHandler<HTMLButtonElement>,
}
const CurrencyChips = ({labels,onClick}:CurrencyChipsProps) => {
  return(
    <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
  {/* map labels using Chip component. */}
  </Grid>
  );
};

export default CurrencyChips;