export type TMeta = {
  totalItems: number;
  totalPages: number;
  itemsPerPage: number;
  currentPage: number;
  currentPageItems: number;
};

export type TError = {
  statusCode: number;
  timestamp: Date;
  path: string;
  messages: Array<string>;
  errorType: string;
  validationMessages: Array<string>;
  data?: [];
};
