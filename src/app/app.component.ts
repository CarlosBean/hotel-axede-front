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
  rooms: any;
  filtered: any;

  constructor(private sedesService: SedesService, private roomTypesService: RoomTypesService, private reservationsService: ReservationsService) { }

  ngOnInit() {
    this.roomTypesService.getAll().subscribe(({ data }) => {
      this.rooms = data;
      this.filtered = data;
    });
  }

  searchByName(event) {
    if (!event.target.value) { this.filtered = this.rooms };
    let term = event.target.value.toLowerCase();
    this.filtered = this.rooms.filter((room: any) => room.name.toLowerCase().includes(term));
  }

  searchBySede(event) {
    if (!event.target.value) { this.filtered = this.rooms };
    let term = event.target.value.toLowerCase();
    this.filtered = this.rooms.filter((room: any) => room.sede.name.toLowerCase().includes(term));
  }

  searchByAmountRooms(event) {
    if (!event.target.value) { this.filtered = this.rooms };
    let term = parseInt(event.target.value);
    this.filtered = this.rooms.filter((room: any) => room.amount === term);
  }

  searchByPrice(event) {
    if (!event.target.value) { this.filtered = this.rooms };
    let term = parseInt(event.target.value);
    this.filtered = this.rooms.filter((room: any) => room.price === term);
  }
}
