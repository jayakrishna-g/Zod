import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceDetailsComponent } from './space-details/space-details.component';
import { SpacesComponent } from './spaces.component';
import { SpacesResolver } from './spaces.resolver';

const routes: Routes = [
  {
    path: '',
    component: SpacesComponent,
    resolve: {
      spaces: SpacesResolver,
    }
  },
  {
    path: ':id',
    component: SpaceDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpacesRoutingModule {}
