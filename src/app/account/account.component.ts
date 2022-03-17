import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {stringify} from '@angular/compiler/src/util';
import {AccountService} from './state/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    dateControl: [null]
  });

  appointments = [];

  constructor(private formBuilder: FormBuilder,
              private accountService: AccountService) {
  }

  ngOnInit(): void {
  }

  dateEvent(event: any) {
    // let date = stringify(this.form.get('dateControl')?.value)
    let date = this.form.get('dateControl')?.value;
    console.log(date)
    let newDate = date.toLocaleString().substring(0, 10);
    console.log(newDate);
    // console.log(date)
    const words = newDate.split('.');
    console.log(words)
    let day = words[0];
    let month = words[1];
    let year = words[2];
    if (day.length < 2){
      day = '0'+day;
      console.log(day)
    }
    if(month.length <2){
      month = '0'+month;
      console.log(month)
    }
    if(year.length > 4){
      year = year.substring(0, 4)
      console.log(year)
    }
    const sqlDate = `${year}-${month}-${day}`
    console.log(sqlDate)
    this.accountService.getAllAppointmentsForDate(sqlDate).subscribe(result => {
      this. appointments = result;
    })
  }

}
