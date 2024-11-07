import { SvgIconComponent } from "@mui/icons-material";

export type ReusableCardProps = {
  title: string;
  Icon?: SvgIconComponent;
  onClick: () => void;
};
