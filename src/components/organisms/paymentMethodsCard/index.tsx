import { Card } from "@mui/material";
import React from "react";

interface PaymentMethodsCardProps {
    data : object[],
    onClick : React.MouseEventHandler<HTMLButtonElement>
}

const PaymentMethodsCard = ({data,onClick}:PaymentMethodsCardProps) => {
  return (
    // map card details
    <Card>
        {
            // details , on click proceed for payment
            //add new card
        }
    </Card>
  );
};

export default PaymentMethodsCard;