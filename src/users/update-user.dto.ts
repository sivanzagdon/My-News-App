import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  readonly id: number; // מזהה ייחודי של המשתמש לעדכון
  readonly name?: string; // שם המשתמש (אופציונלי)
  readonly email?: string; // כתובת האימייל של המשתמש (אופציונלי)
  readonly password?: string; // סיסמה של המשתמש (אופציונלי)
  readonly preferences?: string[]; // מעדפי קטגוריות חדשות (אופציונלי)
}
