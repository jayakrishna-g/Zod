import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeRoutingModule } from './practice-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PracticeComponent } from './practice.component';
import { QuestionDescriptionService } from 'src/app/shared/components/question-description/question-description.service';
import { QuestionDescriptionResolver } from 'src/app/shared/components/question-description/question-description.resolver';

@NgModule({
  declarations: [PracticeComponent],
  imports: [CommonModule, PracticeRoutingModule, SharedModule.forRoot()],
  providers: [QuestionDescriptionService, QuestionDescriptionResolver],
})
export class PracticeModule {}
