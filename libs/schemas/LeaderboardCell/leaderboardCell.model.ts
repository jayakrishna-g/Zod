import { Contest, CProblems } from '../Contest/contest.model';
import { User } from '../User/user.model';
import { Problem } from '../Problem/problem.model'

export interface problemScore extends CProblems {
  obtainedScore: number
  /*
  attempts: number,
  penality: number
  */
}

export interface LeaderboardCell {
  contestId: Contest['contestId'],
  userId: User['userId'],
  userHandle: User['handle'],
  scores: [CProblems],
}
