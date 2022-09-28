import { Grid } from "@mui/material";
import React from "react";
import Chip from "../../atoms/chip";

interface CurrencyChipsProps {
  labels: string[];
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const CurrencyChips = ({ labels, onClick }: CurrencyChipsProps) => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      {labels.map((label, index) => {
        return (
          <Grid item key={index} onClick={() => onClick}>
            <Chip label={label} variant="filled"></Chip>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CurrencyChips;
