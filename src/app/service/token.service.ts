import { Injectable } from '@angular/core';
const TOKEN_KEY = 'Token_Key';
const NAME_KEY = 'Name_Key';
const AVATAR_KEY = 'Avatar_Key';
const ROLE_KEY = 'Role_Key';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public roles = [];
  constructor() { }

  public setToken(token: string){
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string  {
    return sessionStorage.getItem(TOKEN_KEY);
  }
  public setName(name: string){
    sessionStorage.removeItem(NAME_KEY);
    sessionStorage.setItem(NAME_KEY, name);
  }
  public getName(): string{
    return sessionStorage.getItem(NAME_KEY);
  }
  public setAvatar(avatar: string){
    sessionStorage.removeItem(AVATAR_KEY);
    sessionStorage.setItem(AVATAR_KEY, avatar);
  }
  public getAvatar(): string{
    return sessionStorage.getItem(AVATAR_KEY);
  }
  public setRole(roles: string[]){
    sessionStorage.removeItem(ROLE_KEY);
    sessionStorage.setItem(ROLE_KEY, JSON.stringify(roles));
  }
  public getRole(): string[]{
    if (this.getToken()){
      JSON.parse(sessionStorage.getItem(ROLE_KEY)).forEach(role => {
        this.roles.push(role.authority);
      });
    }
    return this.roles;
  }
}
