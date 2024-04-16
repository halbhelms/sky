export type TableColumn = {
  title: string;
  align: 'left' | 'right' | 'center';
  type: 'text' | 'number' | 'date';  // You can expand this with more types as needed.
};