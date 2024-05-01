import { Component, OnInit } from '@angular/core';
import { UserRoleEnum } from 'src/app/core/enums/user-role.enum';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
  userRole: UserRoleEnum = null;  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    var currentUser = this.authService.currentUserValue;
    this.userRole = currentUser.roleId;
  }

  hasRole(role: UserRoleEnum) {
    let returnVal = false;
    if(this.userRole == role){
        returnVal = true;
    }
    return returnVal;
  }
}
