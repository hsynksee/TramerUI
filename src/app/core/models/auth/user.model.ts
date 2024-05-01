export class UserModel {
  userId(userId: any) {
    throw new Error('Method not implemented.');
  }
  description(description: any) {
    throw new Error('Method not implemented.');
  }
  educator(educator: any) {
    throw new Error('Method not implemented.');
  }
  educationDate(educationDate: any) {
    throw new Error('Method not implemented.');
  }
  id: number;
  roleId: number;
  companyId: number;
  name: string;
  surname: string;
  email: string;
  companyName: string;
  phoneNumber:string;
  isActive:boolean;

  setUser(_user: unknown) {
    const user = _user as UserModel;
    this.id = user.id;
    this.roleId = user.roleId;
    this.companyId = user.companyId;
    this.name = user.name || '';
    this.surname = user.surname || '';
    this.email = user.email || '';
    this.companyName = user.companyName || '';
    this.phoneNumber = user.phoneNumber || '';
    this.isActive = user.isActive || false;
  }
}
