import { ErrorCode, IErrorObject } from 'src/types';

export function stop(
  errorCode: ErrorCode,
  devMessage?: string | any,
  statusCode?: number,
): IErrorObject {
  return { errorCode, devMessage, statusCode };
}

export function filterData(data: any) {
  for (const key in data) {
    if (data[key] === undefined || data[key] === null) {
      delete data[key];
    }
  }
  return data;
}
