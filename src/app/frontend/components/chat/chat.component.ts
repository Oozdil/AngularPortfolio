import { Component } from '@angular/core';
import { TestData } from './models/testData';
import { UserModel } from './models/user';
import { MessageModel } from './models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  data: TestData = new TestData();
  stringData: string = "";
  selectedUser: UserModel = new UserModel();
  myId: number = 6;
  userList: UserModel[] = [];
  messageList: MessageModel[] = [];
  messageToSend: string;
  messageModel: MessageModel;

  constructor() {

  }
  ngOnInit() {
    this.userList = this.data.userList.filter(d => d.id != this.myId);
    setInterval(this.createMessage, 10000, this.userList,this.data,this.myId);
  }
  ngAfterView
  selectContact(contact: any) {
    this.selectedUser.id = contact.id;
    this.selectedUser.name = contact.name;
    this.selectedUser.avatarUrl = contact.avatarUrl;
    contact.unreadCount = 0;
    this.messageList = this.data.messageList.filter(m => (m.fromId == this.myId && m.toId == this.selectedUser.id) || (m.toId == this.myId && m.fromId == this.selectedUser.id));
    this.stringData = JSON.stringify(this.messageList);

  }

  sendMessage() {
    this.messageModel = new MessageModel();
    this.messageModel.body = this.messageToSend;
    this.messageModel.fromId = this.myId;
    this.messageModel.toId = this.selectedUser.id;
    this.messageModel.id = this.data.messageList[this.data.messageList.length - 1].id + 1;
    this.data.messageList.push(this.messageModel);
    this.messageList = this.data.messageList.filter(m => (m.fromId == this.myId && m.toId == this.selectedUser.id) || (m.toId == this.myId && m.fromId == this.selectedUser.id));

    this.messageToSend = "";
  }
  createMessage(users: any,data:any,myid:any) {
    let id = Math.floor(Math.random() * 5 + 1);
    var user = users.find(u => u.id == id);
    user.unreadCount += 1;
    


    this.messageModel = new MessageModel();
    this.messageModel.body = "This message is auto generated";
    this.messageModel.fromId = user.id;
    this.messageModel.toId = myid;
    this.messageModel.id = data.messageList[data.messageList.length - 1].id + 1;

    user.lastMessagedate = this.messageModel.dateTime;
    user.lastMessageBody = this.messageModel.body;
    data.messageList.push(this.messageModel);
    //console.log(JSON.stringify(this.messageModel));

  }
}
