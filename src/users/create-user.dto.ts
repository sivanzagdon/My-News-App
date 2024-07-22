export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly preferences: string[]; // לדוגמה: מעדפי קטגוריות חדשות

  constructor(name: string, email: string, password: string, preferences: string[]) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.preferences = preferences;
}
}