import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionDescriptionResolver } from 'src/app/shared/components/question-description/question-description.resolver';
import { PracticeComponent } from './practice.component';

const routes: Routes = [
  {
    path: ':contestId/:problemId',
    component: PracticeComponent,
    resolve: {
      question: QuestionDescriptionResolver,
    },
  },
  {
    path: '',
    redirectTo: '24231',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticeRoutingModule {}
