import { Card } from "@mui/material";
import React from "react";
import Chip from "../../atoms/chip";
import TypographyTag from "../../atoms/typographyTag";

interface Transaction {
  date :string,
  status : string,
  name : string,
  from : string,
  type : string,
  amount : number
}

interface WalletTransactonCardProps {
  transactionData : Transaction[]
}
const WalletTransactonCard = ({transactionData}:WalletTransactonCardProps ) => {
  return  <div>
  {transactionData.map((transaction, index) => {
    return (
      <Card key={index}>
        <TypographyTag variant="h6">{transaction.date}</TypographyTag>
        <TypographyTag variant="body1">{transaction.name}</TypographyTag>
        <Chip variant="filled" label={transaction.status}/>
        <TypographyTag variant="subtitle1">{transaction.from}</TypographyTag>
        <TypographyTag variant="body1">{transaction.type}</TypographyTag>
        <TypographyTag variant="subtitle1">{transaction.amount}</TypographyTag>
      </Card>
    );
  })}
</div>;
};

export default WalletTransactonCard;