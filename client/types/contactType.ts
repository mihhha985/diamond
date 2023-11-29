import { Description } from "./descriptionType";

export interface Contact {
  id: number;
  uuid: string;
  firstName: string;
  phone: string;
  city: string;
  about: string;
  rating: number;
  isActive: number;
  description: Description;
}