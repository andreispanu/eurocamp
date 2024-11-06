import { SvgIconComponent } from "@mui/icons-material";

export type ReusableCardProps = {
  title: string;
  count: number;
  Icon?: SvgIconComponent;
  onClick: () => void;
};
