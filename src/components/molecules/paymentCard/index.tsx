import {
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import TypographyTag from "../../atoms/typographyTag";

interface Card {
  number : number,
  cardType : string,
  lastUsed : string
}
interface PaymentCardProps {
  paymentCardDetails : Card[]
}

const PaymentCard = ({ paymentCardDetails }:PaymentCardProps) => {
  return (
    <Grid container direction="column">
        <RadioGroup>
          {paymentCardDetails.map(({ number, cardType, lastUsed }) => {
            return (
            <FormControlLabel
              key={number}
              value={cardType}
              label={
                <>
                  <TypographyTag variant="body1">{number}</TypographyTag>
                  <TypographyTag variant="subtitle2">{lastUsed}</TypographyTag>
                </>
              }
              control={<Radio />}
            />
            )
          })}
        </RadioGroup>
    </Grid>
  );
};

export default PaymentCard;
