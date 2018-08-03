import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Igrac } from '../models/igrac.model';
import { IgracService } from './igrac.service';
import { Klub } from '../models/klub.model';
import { KlubService } from '../klub/klub.service';

import {ActivatedRoute } from '@angular/router';


@Component({
 selector: 'app-igrac-edit',
  templateUrl: './edit-igrac.component.html'
})
export class EditIgracComponent implements OnInit {

  igrac: Igrac;
  igrac1 = {};
  klubovi: Klub[];
  
  constructor(private router: Router, private igracService: IgracService, private klubService: KlubService, private route: ActivatedRoute) {

  }
  
  ngOnInit() {
   
   let igracId: number = this.route.snapshot.params['id'];

    this.igracService.getIgrac(igracId)
        .subscribe( data => {
           this.igrac = JSON.parse(JSON.stringify(data)) ;

        });
    
    this.klubService.getKlubovi()
      .subscribe( data => {
        this.klubovi = data;
      });

  };
  
  izmeni(): void {

    this.igracService.editIgrac(this.igrac)
      .subscribe( data => {
        this.igrac = data;
        this.ngOnInit();
      });
  this.router.navigate(['/igraci']);
  };


}
 