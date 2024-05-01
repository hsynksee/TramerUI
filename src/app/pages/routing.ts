import { Routes } from '@angular/router';
import { UserRoleEnum } from '../core/enums/user-role.enum';
import { UserRoleGuard } from '../core/services/auth/user-role.guard';

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'tramer-query-result',
    loadChildren: () =>
    import('../modules/tramer-query-result/tramer-query-result.module').then((m) => m.TramerQueryResultModule)
  },
  {
    path: 'report/company-summary-report',
    data: { userRole: [UserRoleEnum.SystemAdmin] },
    canActivate: [UserRoleGuard],
    loadChildren: () =>
    import('../modules/reports/company-summary-report/company-summary-report.module').then((m) => m.CompanySummaryReportModule)
  },
  {
    path: 'report/company-user-summary-report',
    data: { userRole: [ UserRoleEnum.CompanyAdmin, UserRoleEnum.SystemAdmin] },
    canActivate: [UserRoleGuard],
    loadChildren: () =>
    import('../modules/reports/company-user-summary-report/company-user-summary-report.module').then((m) => m.CompanyUserSummaryReportModule)
  },
  {
    path: 'report/company-user-detail-report',
    data: { userRole: [ UserRoleEnum.CompanyAdmin, UserRoleEnum.SystemAdmin] },
    canActivate: [UserRoleGuard],
    loadChildren: () =>
    import('../modules/reports/company-user-detail-report/company-user-detail-report.module').then((m) => m.CompanyUserDetailReportModule)
  },
  {
    path: 'companies',
    data: { userRole: [UserRoleEnum.SystemAdmin] },
    canActivate: [UserRoleGuard],
    loadChildren: () =>
    import('../modules/companies/companies.module').then((m) => m.CompaniesModule)
  },
  {
    path: 'company-create',
    data: { userRole: [UserRoleEnum.SystemAdmin] },
    canActivate: [UserRoleGuard],
    loadChildren: () =>
    import('../modules/companies/company-create/company-create.module').then((m) => m.CompanyCreateModule)
  },
  {
    path: 'company-edit/:id',
    data: { userRole: [UserRoleEnum.SystemAdmin] },
    canActivate: [UserRoleGuard],
    loadChildren: () =>
    import('../modules/companies/company-edit/company-edit.module').then((m) => m.CompanyEditModule)
  },
  {
    path: 'users',
    data: { userRole: [UserRoleEnum.SystemAdmin, UserRoleEnum.CompanyAdmin] },
    canActivate: [UserRoleGuard],
    loadChildren: () =>
    import('../modules/users/users.module').then((m) => m.UsersModule)
  },
  {
    path: 'user-profile',
    loadChildren: () =>
    import('../modules/user-profile/user-profile.module').then((m) => m.UserProfileModule)
  },
  {
    path: 'user-create',
    data: { userRole: [UserRoleEnum.SystemAdmin, UserRoleEnum.CompanyAdmin] },
    canActivate: [UserRoleGuard],
    loadChildren: () =>
    import('../modules/users/user-create/user-create.module').then((m) => m.UserCreateModule)
  },
  {
    path: 'user-update/:id',
    data: { userRole: [UserRoleEnum.SystemAdmin, UserRoleEnum.CompanyAdmin] },
    canActivate: [UserRoleGuard],
    loadChildren: () =>
    import('../modules/users/user-update/user-update.module').then((m) => m.UserUpdateModule)
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
