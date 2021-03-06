import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AuthenticationService,
  TokenData,
} from '../../authentication/authentication.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  tokenData: TokenData;
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.tokenData = this.authService.getTokenData();
  }

  ngOnInit(): void {}

  logout() {
    localStorage.setItem('token', '');
    localStorage.setItem('tokenData', '');
    this.router.navigate(['login']);
  }
}
