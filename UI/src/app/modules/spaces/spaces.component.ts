import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SpaceCreationFormComponent } from './space-creation-form/space-creation-form.component';
import { Space, SpacesService } from './spaces.service';

@UntilDestroy()
@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.component.html',
  styleUrls: ['./spaces.component.scss'],
})
export class SpacesComponent implements OnInit {
  spaces: Space[] = [];
  constructor(private route: ActivatedRoute, private dialog: MatDialog, private spacesService: SpacesService) {}

  ngOnInit(): void {
    this.spaces = this.route.snapshot.data.spaces;
  }

  openDialog() {
    console.log('Chec');
    const dialogRef = this.dialog.open(SpaceCreationFormComponent);
    dialogRef.afterClosed().pipe(untilDestroyed(this)).subscribe((formData: Space) => {
      this.spacesService.createSpace(formData).subscribe(res => {
        const createdSpace = (res as any).data as Space;
        createdSpace.admin = JSON.parse(localStorage.getItem('tokenData') as string);
        if (createdSpace) {
          this.spaces.push(createdSpace);
        }
      });
    });

  }
}
