import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Space {
  admin: any;
  members: any[];
  spaceName: string;
  spaceDescription?: string;
}

@Injectable()
export class SpacesService {
  constructor(private http: HttpClient) {}

  getAllSpaces() {
    return this.http.get<Space[]>('/api/space/all');
  }

  createSpace(space: Space) {
    return this.http.post('/api/space', space);
  }
}
