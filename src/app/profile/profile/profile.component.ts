import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenService} from '../../service/token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    console.log('token --->', this.tokenService.getToken());
  }
  logOut(){
    sessionStorage.clear();
    this.router.navigate(['']).then(()=>{
      location.reload();
    })

  }

}
