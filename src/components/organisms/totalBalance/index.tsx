import { Card } from "@mui/material";
import React from "react";

interface TotalBalanceProps {
    data : object
}

const TotalBalance = ({data}:TotalBalanceProps) => {
  return (
    <Card>
        {
            // details using card component : data.balance
        }
    </Card>
  );
};

export default TotalBalance;