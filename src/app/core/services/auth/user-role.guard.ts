import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { UserRoleEnum } from "../../enums/user-role.enum";

@Injectable({
    providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {
    userRole: UserRoleEnum;

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        var currentUser = this.authService.currentUserValue;
        this.userRole = currentUser.roleId;
        if (this.hasRole(route?.data?.userRole)) {
            return true;
        }

        this.router.navigate(["/dashboard"]);
        return false;
    }

    hasRole(role: Array<UserRoleEnum>) {
        let returnVal = false;
        if (role.includes(this.userRole)){
            returnVal = true;
        }
        return returnVal;
      }
}