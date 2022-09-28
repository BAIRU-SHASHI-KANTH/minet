import { Card, CardContent } from "@mui/material";
import React from "react";
import Icon from "../../atoms/icon";
import TypographyTag from "../../atoms/typographyTag";
import axios from "axios";

interface details {
  icon: string;
  name: string;
  totalBalance: number;
}
const baseURL = "";
const TotalBalance = () => {
  const [data, setData] = React.useState<details>();

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <TypographyTag variant="h4">Total Balance</TypographyTag>
      {data && (
        <Card>
          <CardContent>
            <Icon src={data.icon} />
            <TypographyTag variant="body1">{data.name}</TypographyTag>
            <TypographyTag variant="h6">{data.totalBalance}</TypographyTag>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TotalBalance;
