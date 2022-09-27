import { Card } from "@mui/material";
import React from "react";

interface OrderSummaryProps {
    data : object[],
    onClick : React.MouseEventHandler<HTMLButtonElement>
}

const OrderSummary = ({data,onClick}:OrderSummaryProps) => {
  return (
    <Card>
        {
            // details , on click buy or sell
        }
    </Card>
  );
};

export default OrderSummary;