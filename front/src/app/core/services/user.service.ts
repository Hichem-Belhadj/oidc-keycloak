import { Injectable } from '@angular/core';
import {KeycloakProfile, KeycloakRoles} from "keycloak-js";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {KeycloakService} from "keycloak-angular";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _profile = new BehaviorSubject<KeycloakProfile|null>(null);
  private _roles = new BehaviorSubject<string[]>([]);

  constructor(private keycloakService: KeycloakService) { }

  public get profile$(): Observable<KeycloakProfile> {
    return this._profile as Observable<KeycloakProfile>
  }

  public async setProfile() {
    if (this.keycloakService.isLoggedIn()) {
      const profile = await this.keycloakService.loadUserProfile();
      this._profile.next(profile)
    }
  }

  public get roles$(): Observable<string[]> {
    const roles = this.keycloakService.getUserRoles();
    this._roles.next(roles);
    return this._roles as Observable<string[]>;
  }

  async login() {
    await this.keycloakService.login({
      redirectUri: window.location.origin
    });
  }

  public logout() {
    this.keycloakService.logout(window.location.origin).then();
  }
}
