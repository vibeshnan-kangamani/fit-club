export class Registration {

      public id: number;
      public name: string;
      public address: string;
      public email: string;
      public activity?: string
    constructor(
        Id?: number,
        Name?: string,
        Address?: string,
        Email?: string,
        Activity?: string
    ) {
      this.id = Id;
      this.name = Name;
      this.address = Address;
      this.email = Email;
      this.activity = Activity;
     }
  
  }