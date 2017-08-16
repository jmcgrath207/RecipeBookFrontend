import { Component, OnInit } from '@angular/core';
import {isBoolean} from 'util';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = 'Testserver';
  serverCreated: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true; },
      1000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
   this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;

  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;

  }


}

























