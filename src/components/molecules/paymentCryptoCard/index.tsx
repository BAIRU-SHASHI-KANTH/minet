import Grid from "@mui/material/Grid";
import React from "react";
import TypographyTag from "../../atoms/typographyTag";

interface CryptoDetails {
  type: String;
  amount: number;
}

interface PaymentCryptoCardProps {
  cryptoCardDetails: CryptoDetails[];
}

const PaymentCryptoCard = ({ cryptoCardDetails }: PaymentCryptoCardProps) => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      {cryptoCardDetails.map((cryptoCard, index) => {
        return (
          <Grid item key={index}>
            <TypographyTag variant="body1">{cryptoCard.type}</TypographyTag>
            <TypographyTag variant="subtitle2">
              {cryptoCard.amount}
            </TypographyTag>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PaymentCryptoCard;
