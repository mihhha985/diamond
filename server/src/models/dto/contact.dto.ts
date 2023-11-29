import { Description } from "./description.dto";

export interface ContactView {
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