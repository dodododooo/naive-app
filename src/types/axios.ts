export interface ResponseDataType<T = any> {
  code: number;
  status: string;
  message: string;
  data: T;
}
