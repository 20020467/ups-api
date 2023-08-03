export enum UserRole {
  GUEST = 0,
  ADMIN = 1,
}

export enum ProductStatus {
  STOCKING = 1,
  OUTOFSTOCK = 0,
}

export enum ErrorCode {
  Unknown_Error = 'Unknown_Error',
  Invalid_Input = 'Invalid_Input',
  Update_Error = 'Update_Error',
  Username_Or_Password_Invalid = 'Username_Or_Password_Invalid',
  Password_Not_True = 'Password_Not_True',
  Email_Already_exist = 'Email_Already_exist',
  Email_Not_exist = 'Email_Not_exist',
  Token_Not_Exist = 'Token_Not_Exist',
  User_Not_Verify = 'User_Not_Verify',
  Token_Expired = 'Token_Expired',
  /**The client not send the required token in header */
  Refresh_Token_Not_Exist = 'Refresh_Token_Not_Exist',
  /**The client send the expire token or invalid token*/
  Refresh_Token_Expire = 'Refresh_Token_Expire',
  /**The client do not have permission for this action. */
  Permission_Denied = 'Permission_Denied',
  Category_Name_Exist = 'Category_Name_Already_Exist',
  Category_Not_Exist = 'Category_Not_Exist',
  Category_Parent_Not_Exist = 'Category_Parent_Not_Exist',
  Product_Not_Exist = 'Product Not Exist',
  InfoProduct_Not_Exist = 'Info Product Not Exist',
  Code_Product_Already_Exist = 'Code Product Already Exist',
}

export enum KeyCheckCategory {
  Parent_Category = 1,
  Category = 2,
}

export enum KeyPrice {
  CONTACT = 0,
  ASC = 1,
  DESC = 2,
}

export interface IErrorObject {
  statusCode?: number;
  errorCode?: ErrorCode;
  errorMessage?: string;
  devMessage?: string;
}

export interface IUpdateCategory {
  name?: string;
  categoryParentId?: number;
  description?: string;
  benefit?: string;
}
