import { User } from "./user";

export interface Patient {
    id: string;
    address: string;
    phone_number: string;
    userId: string;
    user?: User | null;
  }
  