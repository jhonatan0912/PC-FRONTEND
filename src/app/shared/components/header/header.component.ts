import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface HeaderOption {
  name: string,
  method: () => void
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private _router: Router;

  options: HeaderOption[] = [
    {
      name: 'PROMOCIONES',
      method: () => { }
    },
    {
      name: 'LOCAL',
      method: () => { }
    },
    {
      name: 'ZONAS DE REPARTO',
      method: () => { }
    },
  ];

  constructor(_injector: Injector) {
    this._router = _injector.get(Router);
  }

  ngOnInit() {
  }

  login() {
    this._router.navigate(['/auth/login']);
  }
}
