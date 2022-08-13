import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-manage-classes',
  templateUrl: './manage-classes.component.html',
  styleUrls: ['./manage-classes.component.css'],
})
export class ManageClassesComponent implements OnInit {
  extraClasses: any = [];
  allcourses: any = [];
  batches: any = [];
  filteredBatches: any = [];
  selectedCourse: string = '';
  constructor(
    private AdminService: AdminService,
    private resourses: ResourcesService
  ) {}

  ngOnInit(): void {
    this.getAllExtraClasses();
    console.log(this.extraClasses);
    this.getAllcourses();
    this.getAllBatches();
  }

  getAllcourses() {
    this.resourses.getAllCourses().subscribe(
      (res: any) => {
        this.allcourses = res;
        //ruko
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getAllExtraClasses() {
    this.AdminService.GetAllExtraClasses().subscribe(
      (res: any) => {
        this.extraClasses = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  getAllBatches() {
    this.AdminService.GetAllBatches().subscribe(
      (res: any) => {
        this.batches = res;
        this.filteredBatches = this.batches;
        console.log(this.batches);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  onCourseChange() {
    if (this.selectedCourse !== '') {
      this.filteredBatches = this.batches.filter(
        (batch: any) => batch.courseId === parseInt(this.selectedCourse)
      );
    } else {
      this.filteredBatches =[];
    }
  }
}
