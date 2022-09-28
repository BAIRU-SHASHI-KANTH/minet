import { Card } from "@mui/material";
import React from "react";
import Icon from "../../atoms/icon";
import Logo from "../../atoms/logo";
import TypographyTag from "../../atoms/typographyTag";

interface Trade {
  name: string;
  logo: string;
  price: number;
  change: number;
  marketCap: number;
}

interface TradeCardProps {
  tradeDetails: Trade[];
}

const TradeCard = ({ tradeDetails }: TradeCardProps) => {
  return (
    <div>
      {tradeDetails.map((trade, index) => {
        return (
          <Card key={index}>
            <Logo src={trade.logo} alt={trade.name} />
            <TypographyTag variant="h6">{trade.name}</TypographyTag>
            <TypographyTag variant="body1">{trade.price}</TypographyTag>
            <TypographyTag variant="body1">{trade.change}</TypographyTag>
            <TypographyTag variant="body1">{trade.marketCap}</TypographyTag>
          </Card>
        );
      })}
    </div>
  );
};

export default TradeCard;
