import { UserRoleEnum } from "../../enums/user-role.enum";

export class UserCreateModel {
  companyId:number;
  roleId:UserRoleEnum;
  name:string;
  surname:string;
  email:string;
  phoneNumber:string;
  isActive:boolean;
}
