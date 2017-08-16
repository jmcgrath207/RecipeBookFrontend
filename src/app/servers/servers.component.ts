import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true; },
      1000);
  }

  ngOnInit() {
  }

  onCreateServer() {
   this.serverCreationStatus = 'Server was created ';

  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;

  }


}

























