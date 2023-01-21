class User {
  private _firstName: string;
  private _lastName: string;
  private _birthDate: Date;
  private _age: number;
  private _thumbnail:string;

  constructor(firstName: string, lastName: string, birthDate: Date,thumbnail:string) {
    this._birthDate = birthDate;
    this._firstName = firstName;
    this._lastName = lastName;
    this._thumbnail = thumbnail;

    this._age =
      new Date(Date.now()).getFullYear() - this.getBirthDate.getFullYear();
  }

  // private checkAge(age: number): Error | boolean {
  //   if (age <= 0) throw new Error("Age cannot be less equal than zero");
  //   return true;
  // }

  private checkFirstName(firstName: string): Error | boolean {
    if (firstName.length === 0) {
      throw new Error("Length of firstName cannot be zero");
    }
    return true;
  }

  private checkLastName(lastName: string): Error | boolean {
    if (lastName.length === 0) {
      throw new Error("Length of lastName cannot be zero");
    }
    return true;
  }

  public get getFirstName(): string {
    return this._firstName;
  }

  public get getLastName(): string {
    return this._lastName;
  }

  public get getBirthDate(): Date {
    return this._birthDate;
  }

  public get getAge(): number {
    return this._age;
  }

  public get getThumbnail(): string {
    return this._thumbnail;
  }

  public set setFirstName(firstName: string) {
    if (this.checkFirstName(firstName)) this._firstName = firstName;
  }

  public set setLastName(lastName: string) {
    if (this.checkLastName(lastName)) this._lastName = lastName;
  }

  public set setBirthDate(birthDate: Date) {
    this._birthDate = birthDate;
  }

  public set setThumbnail(thumbnail: string) {
    this._thumbnail = thumbnail;
  }
}

export default User;
