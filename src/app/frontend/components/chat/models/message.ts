export class MessageModel {
    id: number;
    fromId: number;
    toId: number;
    body: string;
    dateTime: string;
    isRead: boolean;
    constructor() {
        this.isRead = false;
        const d = new Date();
        let date = d.toLocaleDateString();
        let time = d.toLocaleTimeString();

        this.dateTime = time+ " "+date;
    }
}