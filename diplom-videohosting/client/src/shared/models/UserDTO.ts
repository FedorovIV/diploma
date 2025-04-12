import { UserRoles } from "../auth/AuthController";

export interface UserDTO {
  email: string;
  id:string;
  role: UserRoles;
}
