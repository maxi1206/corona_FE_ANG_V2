import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {LoginQuery} from './login/state/login.query';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'corona_FE_ANG';
  hasUser = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private loginQuery:LoginQuery, public router: Router) {
  }

  ngOnInit() {
    this.loginQuery.selectAll().subscribe(result => {
      if(Array.isArray(result) && result.length > 0){
        this.hasUser = true;
      }
    })

  }

}
