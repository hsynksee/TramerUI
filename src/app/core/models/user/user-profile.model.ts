import { UserRoleEnum } from "../../enums/user-role.enum";

export class UserProfileModel {
  id:number;
  companyName:number;
  roleId :UserRoleEnum;
  name :string;
  surname :string;
  email:string;
  phoneNumber:number;
}
