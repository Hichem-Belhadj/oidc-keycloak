import {Component, OnInit} from '@angular/core';
import {KeycloakProfile} from "keycloak-js";
import {UserService} from "../../core/services/user.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{
  roles!: string[];

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userService.roles$.subscribe(roles => this.roles = roles);
  }

}
