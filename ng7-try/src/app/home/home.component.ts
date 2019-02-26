import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  h1Style = false;
  users: object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(result => {
      this.users = result;
      console.log(this.users);
    });
  }


}
