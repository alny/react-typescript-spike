import * as React from "react";
import Button from "@material-ui/core/Button";
import { PropTypes } from "@material-ui/core";

interface Props {
  name: string;
  variant?:
    | "text"
    | "flat"
    | "outlined"
    | "contained"
    | "raised"
    | "fab"
    | "extendedFab";
  color?: PropTypes.Color;
  onClick?: React.MouseEventHandler<any>;
}

export const GenericButton: React.SFC<Props> = (props: Props) => {
  return (
    <Button onClick={props.onClick} variant={props.variant} color={props.color}>
      {props.name}
    </Button>
  );
};
