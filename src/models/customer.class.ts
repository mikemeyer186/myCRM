export class Customer {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  postalCode: number;
  email: string;
  birthDate: number;

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.street = obj ? obj.street : '';
    this.city = obj ? obj.city : '';
    this.state = obj ? obj.state : '';
    this.postalCode = obj ? obj.postalCode : '';
    this.email = obj ? obj.email : '';
    this.birthDate = obj ? obj.birthDate : '';
  }
}
