import React from "react";
import Avatar from "../../atoms/avatar";

interface AccountDropdownProps {
  avatarSrc: string;
}
const AccountDropdown = ({ avatarSrc }: AccountDropdownProps) => {
  return (
    <div>
      <Avatar src={avatarSrc} />
     {/* dropdown icon */}
    </div>
  );
};

export default AccountDropdown;
