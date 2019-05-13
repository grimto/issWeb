import {Component, OnInit} from '@angular/core';
import {ChartComponent} from '../chart/chart.component';
import {MatDialog} from '@angular/material';
import {User} from '../User';
import {UsersService} from '../_services';

@Component({
  selector: 'app-loged',
  templateUrl: './loged.component.html',
  styleUrls: ['./loged.component.css']
})
export class LogedComponent implements OnInit {
 /* Humidity: User['Humidity'][];
  Temperature: User ['Temperature'][];
  Moisture: User ['Moisture'][];
  users: User[];
*/
  constructor(public dialog: MatDialog,
              private us: UsersService) {
  }


  ngOnInit() {
    /* this.us.getArraysHumidity.call('user2')((data: User['Humidity'][]) => {
      this.Humidity = data;
    });
    this.us.getArraysMoist.call('user2')((data: User['Moisture'][]) => {
      this.Moisture = data;
    });
    this.us.getArraysTemp.call('user2')((data: User ['Temperature'][]) => {
      this.Temperature = data;
    });*/
  }

  /* openDialog(): void {
    const dialogRef = this.dialog.open(ChartComponent, {
      data: {
        /*Humidity: User.Humidity[User.Humidity.length],
        Temperature: User.Temperature[User.Temperature.length],
        Moisture: User.Moisture[User.Moisture.length],
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  } */
}
