export function assignPagingPost(params) {
  params.pageIndex = Number(params.pageIndex) || 1;
  params.take = Number(params.pageSize) || Number(params.take) || 10;
  params.skip = (params.pageIndex - 1) * params.take;

  delete params.pageSize;
  return params;
}

export function assignPagingProduct(params) {
  params.pageIndex = Number(params.pageIndex) || 1;
  params.take = Number(params.pageSize) || Number(params.take) || 24;
  params.skip = (params.pageIndex - 1) * params.take;

  delete params.pageSize;
  return params;
}
