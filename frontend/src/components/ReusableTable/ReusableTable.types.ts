export type ReusableTableProps = {
  data: any[];
  columns: { headers: string[]; cells: string[] };
  onDelete?: (id: string) => void;
};
