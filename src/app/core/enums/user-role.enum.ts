export enum UserRoleEnum {
    SystemAdmin = 1,
    CompanyAdmin = 2,
    Personnel = 3
}

export const UserRoleLabelMapping: Record<UserRoleEnum, string> = {
    [UserRoleEnum.SystemAdmin]: "Sistem Yöneticisi",
    [UserRoleEnum.CompanyAdmin]: "Şirket Yöneticisi",
    [UserRoleEnum.Personnel]: "Personel"
}
