import React from "react";
import { Card } from "@mui/material";

interface WatchlistBarProps {
    data : object[],
    onClick : React.MouseEventHandler<HTMLButtonElement>
}

const WatchlistBar = ({data,onClick}:WatchlistBarProps) => {
  return (
    <Card>
        {
            // display details using card component 
            // onclick for "add to watchlist"
        }
    </Card>
  );
};

export default WatchlistBar;