import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UpcomingContestDetail, UpcomingService } from './upcoming.service';

@UntilDestroy()
@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpcomingComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() displayedColumns?: string[] = [
    'name',
    'site',
    'start_time',
    'duration',
  ];

  upcomingContests: UpcomingContestDetail[] = [];

  dataSource!: MatTableDataSource<UpcomingContestDetail>;

  constructor(
    private upcomingService: UpcomingService,
    private route: ActivatedRoute
  ) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.upcomingContests = this.route.snapshot.data.upcomingContests;
    this.dataSource = new MatTableDataSource(this.upcomingContests);
    console.log(this.upcomingContests);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.filter?.length > 0 && this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
