import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Klub } from '../models/klub.model';
import { KlubService } from './klub.service';

@Component({
  selector: 'app-klub',
  templateUrl: './klub.component.html',
  styles: []
})
export class KlubComponent implements OnInit {

  klubovi: Klub[];

  constructor(private router: Router, private klubService: KlubService) {

  }

  ngOnInit() {
    this.klubService.getKlubovi()
      .subscribe( data => {
        this.klubovi = data;
      });
  };

  deleteKlub(klub: Klub): void {
    this.klubService.deleteKlub(klub)
      .subscribe( data => {
        this.klubovi = this.klubovi.filter(k => k !== klub);
      })
  };

}


