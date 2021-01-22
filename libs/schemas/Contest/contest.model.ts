import { LeaderboardType } from './leaderboardType.enum';
import { Problem } from '../Problem/problem.model';

export interface CProblems {
  problemId: Problem['problemId'],
  cAcceptance ?: number,
  score: number
}
export interface Contest {
  contestId: string;
  name: string;
  startTime: Date;
  duration: Date;
  url: string;
  contestSite: string;
  problems: [CProblems];
  leaderBoardType: LeaderboardType;
}
