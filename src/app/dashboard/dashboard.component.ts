import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
