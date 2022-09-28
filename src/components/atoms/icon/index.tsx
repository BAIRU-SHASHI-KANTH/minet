import * as React from "react";

type IconProps = {
  src: string;
};

const Icon = ({src}: IconProps) => {
  return <img src={src} />;
}

export default Icon;