import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false; 
  serverCreationStatus:string = 'No Server was created!';

  constructor(){
    console.log(this.allowNewServer);
    setTimeout(()=> {
      this.allowNewServer = true;
      console.log(this.allowNewServer);
    }, 2000)
  }
  onClickAddServer(){
    this.serverCreationStatus = 'Server was created';
  }

}
