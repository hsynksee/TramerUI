import { UserCreateModel } from "./user-create.model";

export class UserUpdateModel extends UserCreateModel {
  id:number;
  companyName:string;
}
