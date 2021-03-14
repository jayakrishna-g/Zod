import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpacesRoutingModule } from './spaces-routing.module';
import { SpacesComponent } from './spaces.component';
import { SpacesResolver } from './spaces.resolver';
import { SpacesService } from './spaces.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpaceCreationFormComponent } from './space-creation-form/space-creation-form.component';

@NgModule({
  declarations: [SpacesComponent, SpaceCreationFormComponent],
  imports: [CommonModule, SpacesRoutingModule, SharedModule.forRoot()],
  providers: [SpacesResolver, SpacesService],
})
export class SpacesModule {}
