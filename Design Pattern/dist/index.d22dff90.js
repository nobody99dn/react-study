class ChatRoom {
    logMessage(user, message) {
        const time = new Date();
        const sender = user.getName();
        console.log(`${time} [${sender}]: ${message}`);
    }
}
class User {
    constructor(name, chatroom1){
        this.name = name;
        this.chatroom = chatroom1;
    }
    getName() {
        return this.name;
    }
    send(message) {
        this.chatroom.logMessage(this, message);
    }
}
const chatroom = new ChatRoom();
const user1 = new User('Van Tran', chatroom);
const user2 = new User('Lyy', chatroom);
user1.send('Hi there!');
user2.send('Hey!');

//# sourceMappingURL=index.d22dff90.js.map
