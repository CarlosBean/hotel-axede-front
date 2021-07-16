import { Component } from '@angular/core';
import { ReservationsService } from './services/reservations.service';
import { RoomTypesService } from './services/room-types.service';
import { SedesService } from './services/sedes.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'hotel';
  sedes: any;

  constructor(private sedesService: SedesService, private roomTypesService: RoomTypesService, private reservationsService: ReservationsService) { }

  ngOnInit() {
    this.sedesService.getAll().subscribe(({ data }) => this.sedes = data);
  }
}
