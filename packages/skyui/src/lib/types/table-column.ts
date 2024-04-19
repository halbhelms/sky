export type TableColumn = {
  title: string;
  align: 'left' | 'right' | 'center';
  type: 'text' | 'number' | 'date' | 'currency';  // You can expand this with more types as needed.
};