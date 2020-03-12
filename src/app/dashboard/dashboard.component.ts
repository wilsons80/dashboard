import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pieChartData = {
    labels: ['Mensal', 'Educação', 'Lazer', 'Imprevistos'],
    datasets: [
      {
        data: [2500,3540,2145,3555],
        backgroundColor: ['#FF9900','#109618','#990099','#3B3EAC']
      }
    ],

  };

  lineChartData = {
    labels: ['Domingo', 'Segundo', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    datasets: [
      {
        label: 'Receitas',
        data: [4,10,18,5,1,20,3],
        fill: false,
        backgroundColor: ['#3366CC']
      },
      {
        label: 'Despesas',
        data: [10,15,8,5,1,7,9],
        fill: true,
        backgroundColor: ['#D62B00']
      }

    ],

  };


  colunaChartData = {
    labels: ['Janeiro', 'Fevereiro', 'Março'],
    datasets: [
        {
            label: 'Setor O',
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
            data: [65, 59, 80]
        },
        {
            label: 'Aguas Claras',
            backgroundColor: '#9CCC65',
            borderColor: '#7CB342',
            data: [28, 48, 40]
        },
        {
          label: 'Planaltina',
          backgroundColor: 'red',
          borderColor: 'red',
          data: [28, 48, 40]
        }

    ]
}

  @ViewChild("myChart")
  public refChart: ElementRef;

  public chartData: any;

  constructor() {
    this.chartData = {};
   }

  public ngOnInit() {
    this.chartData = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };
}

  public ngAfterViewInit() {
    let chart = this.refChart.nativeElement;
    let ctx = chart.getContext("2d");
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: this.chartData,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  }
}
