import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../User';
import {UsersService} from '../_services';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  /*  users: User[];
    Humidity: User['Humidity'][];
    Temperature: User ['Temperature'][];
    Moisture: User ['Moisture'][];*/
  public ChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public chartLabels = ['1d', '12h', '8h', '6h', '4h', '2h', '1h'];
  public chatType = 'line';
  public chartLegend = true;
  public chartData = [
    {data: [40, 36, 40, 39, 36, 36, 36], label: 'Humidity'},
    {data: [26, 26, 27, 27, 24, 26, 27], label: 'Moisture'},
    {data: [26, 26, 27, 27, 24, 26, 27], label: 'Temperature'}
  ];

  constructor(public dialogRef: MatDialogRef<ChartComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private us: UsersService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
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

}
