import { MessageModel } from "./message";
import { UserModel } from "./user";

export class TestData {
    userList: UserModel[] = [];
    messageList: MessageModel[] = [];
    user: UserModel = new UserModel();
    message: MessageModel = new MessageModel();
    constructor() {
        this.addUsers();
        this.addMessages();
    }


    addUsers() {
        this.user = new UserModel();
        this.user.id = 1;
        this.user.name = "John Doe";
        this.user.avatarUrl = "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp";
        this.userList.push(this.user);

        this.user = new UserModel();
        this.user.id = 2;
        this.user.name = "Danny Smith";
        this.user.avatarUrl = "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp";
        this.userList.push(this.user);

        this.user = new UserModel();
        this.user.id = 3;
        this.user.name = "Alex Steward";
        this.user.avatarUrl = "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp";
        this.userList.push(this.user);

        this.user = new UserModel();
        this.user.id = 4;
        this.user.name = "Kate Moss";
        this.user.avatarUrl = "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp";
        this.userList.push(this.user);

        this.user = new UserModel();
        this.user.id = 5;
        this.user.name = "Lara Croft";
        this.user.avatarUrl = "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp";
        this.userList.push(this.user);


        this.user = new UserModel();
        this.user.id = 6;
        this.user.name = "Me";
        this.user.avatarUrl = "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp";
        this.userList.push(this.user);
    }
    addMessages() {
        for (let i = 0; i < 50; i++) {
            this.message = new MessageModel();
            this.message.id = i;
            this.message.fromId = Math.floor(Math.random() * 6 + 1);
            this.message.toId = Math.floor(Math.random() * 6 + 1);
            this.message.body = "Test Body " + i.toString();
            if (this.message.fromId == this.message.toId)
                i--;
            else {
                this.messageList.push(this.message);
                this.updateUser(this.message.fromId, this.message.toId, this.message);
            }
        }
    }
    updateUser(userFromId: number, userToId: number, message: MessageModel) {
        if (userFromId == 6) {
            var user = this.userList.find(u => u.id == userToId);
            user.lastMessagedate = message.dateTime;
            user.lastMessageBody = message.body;
            user.unreadCount=0;
        }
        if (userToId == 6) {
            var user = this.userList.find(u => u.id == userFromId);
            user.lastMessagedate = message.dateTime;
            user.lastMessageBody = message.body;
            user.unreadCount+=1;
        }

    }
}