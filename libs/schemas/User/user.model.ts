import { Spaces } from '../Spaces/spaces.model';

export interface User {
  userId: string,
  firstName: string,
  lastName?: string,
  handle: string,
  email: string
}
