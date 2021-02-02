import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogResolver } from './blogs/blog.resolver';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home.component';
import { UpcomingContestResolver } from './upcoming/upcoming-contest.resolver';
import { UpcomingComponent } from './upcoming/upcoming.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      blogs: BlogResolver,
      upcomingContests: UpcomingContestResolver,
    },
  },
  {
    path: 'blogs',
    component: BlogsComponent,
    resolve: {
      blogs: BlogResolver,
    },
  },
  {
    path: 'upcoming',
    component: UpcomingComponent,
    resolve: {
      upcomingContests: UpcomingContestResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
