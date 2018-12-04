import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: string;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 5023, name: 'Olivares Juan Ignacio', weight: 'Comedor Filosofia', symbol: 'Docente' },
    { position: 5068, name: 'Pablito Cocinero', weight: 'Comedor Palomar', symbol: 'Alumno' },
    { position: 5072, name: 'Mati Montivero', weight: 'Comedor Palomar', symbol: 'I-Evento' },
    { position: 5126, name: 'Sergio Ledesma', weight:'Comedor Filosofia', symbol: 'Alumno' },
    { position: 5021, name: 'Alejando Torres', weight: 'Comedor CUIM', symbol: 'PAU' },
    { position: 5008, name: 'Tello Martin', weight: 'Comedor Filosofia', symbol: 'Docente' },
    { position: 5150, name: 'Franco Martines', weight: 'Congreso X', symbol: 'I-Evento' }
];

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    displayedColumns = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    places: Array<any> = [];

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    constructor() {
        this.places = [
            {
                imgSrc: 'assets/images/palomar.jpg',
                place: 'Complejo Deportivo de la UNSJ - Palomar',
                description:
                    // tslint:disable-next-line:max-line-length
                    'Actualmente poco concurrido. Pendientes Aproximados:340',
                charge: 'Notificar al comedor',
                location: '25 de Mayo Oeste, San Juan'
            },
            {
                imgSrc: 'assets/images/filosofia.jpg',
                place: 'Comedor de la FFHA',
                description:
                    // tslint:disable-next-line:max-line-length
                    'Actualmente cerrado. Pendientes Aproximados:-',
                charge: 'Notificar al comedor',
                location: 'Av. José Ignacio de la Roza Oeste 230, San Juan'
            },
            {
                imgSrc: 'assets/images/cuim.JPG',
                place: 'Comedor nuevo CUIM',
                description:
                    // tslint:disable-next-line:max-line-length
                    'Actualmente concurrido. Pendientes Aproximados:100',
                charge: 'Notificar al comedor',
                location: 'Av. José Ignacio de la Roza Oeste 590, San Juan'
            }
        ];
    }

    ngOnInit() {}
}
