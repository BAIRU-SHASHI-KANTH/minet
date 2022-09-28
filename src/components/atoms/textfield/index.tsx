import * as React from "react";
import {TextField as MuiTextField} from "@mui/material";

interface TextFieldProps {
  placeholder?: string,
  handleChange: (event:React.ChangeEvent<HTMLInputElement>)=>{},
}
const TextField = ({handleChange,placeholder}: TextFieldProps) => {
  return (
    <>
    <MuiTextField placeholder={placeholder} onChange={handleChange}></MuiTextField>
    </>
  );
};
export default TextField;