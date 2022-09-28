import React from "react";

type ChipProps = {
  label: string;
  variant : "outlined" | "filled"
};

const Chip = ({label,variant}: ChipProps) => {
  return (
    <Chip label={label} variant={variant}/>
  );
};

export default Chip;