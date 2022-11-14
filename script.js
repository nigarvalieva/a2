
function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

console.log(gettime())

Data = new Date();
Hour = Data.getHours();
Minutes = Data.getMinutes();


class Message {
    constructor(time, author, text){
        this.author = author
        this.text = text
        this.time = time
    }
}
class Messenger extends Message{
    constructor(time, author, text, history){
        super(time, author, text)
        this.history = history
    }
    
    show_history(){
        return `${this.author}: ${this.text}`
    }

    send(author, text){
        console.log(author+': '+text)
    }
}

let m = new Message()
let n = new Messenger()
let n1 = new Messenger()
n.send('Nika', 'txt-1')
n1.send('Nika', 'txt-2')
n.show_history()