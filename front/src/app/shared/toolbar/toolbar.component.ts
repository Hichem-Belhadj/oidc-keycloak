import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {KeycloakProfile} from "keycloak-js";
import {UserService} from "../../core/services/user.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit{
  profile!: KeycloakProfile;

  constructor(public userService: UserService) {}

  async ngOnInit() {
    await this.userService.setProfile();
    this.userService.profile$.subscribe(profile => this.profile = profile);
  }

  logout() {
    this.userService.logout();
  }

  async login() {
    console.log(this.profile)
    if (this.profile) return;
    await this.userService.login();
  }

}
