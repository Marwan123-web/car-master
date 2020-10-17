import { Role } from "./role";

export class User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: number;
    dataOfJoin: Date;
    role: Role;
    favourites: [string];
    accessToken: string;
}
    // firstName lastName email password phoneNumber dataOfJoin role favourites
