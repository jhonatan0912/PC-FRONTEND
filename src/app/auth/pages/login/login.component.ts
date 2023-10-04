import { Injector, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private _router: Router;

  constructor(_injector: Injector) {
    this._router = _injector.get(Router);
  }

  ngOnInit() {
  }

  back() {
    this._router.navigate(['/']);
  }
}
