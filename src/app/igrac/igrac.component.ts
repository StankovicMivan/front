import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Igrac } from '../models/igrac.model';
import { IgracService } from './igrac.service';
import { Klub } from '../models/klub.model';
import { KlubService } from '../klub/klub.service';


@Component({
  selector: 'app-igrac',
  templateUrl: './igrac.component.html',
  styles: []
})
export class IgracComponent implements OnInit {

//nizovi za data sa backend-a
  igraci: Igrac[];

  klubovi: Klub[];

//kreiranje novog

  igrac: Igrac = new Igrac();
  pageNum: number = 0;
  totalPages: number = 1;

  constructor(private router: Router, private igracService: IgracService, private klubService: KlubService) {

  }

  ngOnInit() {
    this.igracService.getIgraci()
      .subscribe( data => {
        this.igraci = data;
       });
    this.klubService.getKlubovi()
      .subscribe( data => {
        this.klubovi = data;
      });

  };


 getIgraci(): void {
     this.igracService.getIgraci()
      .subscribe( data => {
        this.igraci = data;
      });
  };


  deleteIgrac(igrac: Igrac): void {
    this.igracService.deleteIgrac(igrac)
      .subscribe( data => {
        this.igraci = this.igraci.filter(i => i !== igrac);
        this.ngOnInit();
      })

  };

  createIgrac(): void {
    
    this.igracService.createIgrac(this.igrac)
        .subscribe( data => {
          alert("Igrac created successfully.");
          this.ngOnInit();
          this.igrac = new Igrac();
        });


  };
  editIgrac(id): void {
    this.router.navigate(['/igraci/', id]);
    };

  getIgrac(igrac: Igrac): void {

    this.igracService.getIgrac(igrac)
      .subscribe( data => {
        this.igrac = data;
      });

  };


    go(direction): void {
    
    };



}


