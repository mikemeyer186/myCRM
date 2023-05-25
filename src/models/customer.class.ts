export class Customer {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  country: string;
  state: string;
  postalCode: number;
  email: string;
  birthDate: string;

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.street = obj ? obj.street : '';
    this.city = obj ? obj.city : '';
    this.state = obj ? obj.state : '';
    this.postalCode = obj ? obj.postalCode : '';
    this.email = obj ? obj.email : '';
    this.birthDate = obj ? obj.birthDate : '';
    this.country = obj ? obj.country : '';
  }

  public toJSON(): any {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      street: this.street,
      city: this.city,
      state: this.state,
      postalCode: this.postalCode,
      email: this.email,
      birthDate: this.birthDate,
      country: this.country,
    };
  }
}
