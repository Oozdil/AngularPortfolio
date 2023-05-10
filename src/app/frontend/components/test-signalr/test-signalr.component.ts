import { Component, OnInit } from '@angular/core';
import * as signalR from "@microsoft/signalr";
import { User } from './user-model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-signalr',
  templateUrl: './test-signalr.component.html',
  styleUrls: ['./test-signalr.component.css']
})
export class TestSignalrComponent implements OnInit {
  formValue!: FormGroup;
  private connection: any;

  users: User[] = [];
  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    //this.startConnection();
    this.formValue = this.formBuilder.group({
      InputEmail: [''],
      InputPassword: [''],
    });


     this.connection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7125/test')
      .build();

    this.connection.start().then(function () {
      console.log("SignalR connected");
    }).catch(function (err) {
      return console.error(err.toString());
    });

    this.connection.on("ReceiveNotification", (response) => {
      console.log(JSON.stringify(response));
      this.users = response;
    });
  }

  private hubConnection: signalR.HubConnection

  startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7125/test')
      .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }


  Login() {
    const username = this.formValue.value.InputEmail;
    const password = this.formValue.value.InputPassword;

    this.connection.invoke('loginToUsers',username,password).then(
      (data) => {
        console.log(data);
        }
    );

  }
  Logout() {

  }

}
