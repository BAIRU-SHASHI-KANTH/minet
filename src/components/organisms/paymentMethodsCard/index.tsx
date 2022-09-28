import { Card, Grid } from "@mui/material";
import React from "react";
import Button from "../../atoms/button";
import TypographyTag from "../../atoms/typographyTag";
import PaymentCard from "../../molecules/paymentCard";

interface Card {
  number: number;
  cardType: string;
  lastUsed: string;
}

interface PaymentMethodsCardProps {
  data: Card[];
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const PaymentMethodsCard = ({ data, onClick }: PaymentMethodsCardProps) => {
  return (
    <Grid container>
      <PaymentCard paymentCardDetails={data} />
      <Button onClick={onClick}>
        <TypographyTag variant="body1">Add new card</TypographyTag>
      </Button>
    </Grid>
  );
};

export default PaymentMethodsCard;
