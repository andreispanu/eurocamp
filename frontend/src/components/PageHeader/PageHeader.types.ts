export type PageHeaderProps = {
  title: string;
  buttonLabel: string;
  buttonColor?:
    | "primary"
    | "secondary"
    | "inherit"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  buttonAction: () => void;
};
