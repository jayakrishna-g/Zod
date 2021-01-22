import { User } from '../User/user.model';

export interface Spaces {
  spaceId: string,
  spaceName: string,
  membersId?: [User['userId']],
  adminId?: User['userId'],
  members?: [User],
  admin?: User
}
