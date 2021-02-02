import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { BlogResolver } from './blogs/blog.resolver';
import { UpcomingContestResolver } from './upcoming/upcoming-contest.resolver';
import { BlogsService } from './blogs/blogs.service';
import { UpcomingService } from './upcoming/upcoming.service';

@NgModule({
  declarations: [HomeComponent, BlogsComponent, UpcomingComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule.forRoot()],
  providers: [
    BlogResolver,
    UpcomingContestResolver,
    BlogsService,
    UpcomingService,
  ],
})
export class HomeModule {}
