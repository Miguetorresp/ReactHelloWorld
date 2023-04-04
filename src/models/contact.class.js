
export class Contact{
    name = '';
    lastName = '';
    email = '';
    connecting = false;
    
    constructor(name, lastName, email, connecting){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.connecting = connecting;
    } 
}