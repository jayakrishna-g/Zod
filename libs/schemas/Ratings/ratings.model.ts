import { LeaderboardCell } from '../LeaderboardCell/leaderboardCell.model';
import { Spaces } from '../Spaces/spaces.model';
import { User } from '../User/user.model';

export interface Rating {
  userId: User['userId'],
  userHandle: User['handle'],
  spaceId: Spaces['spaceId'],
  spaceName: Spaces['spaceName'],
  rating: number
  contests: [LeaderboardCell],
  volatility: number
}
