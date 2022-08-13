import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-externallinks',
  templateUrl: './externallinks.component.html',
  styleUrls: ['./externallinks.component.css'],
})
export class ExternallinksComponent implements OnInit {
  courses: any;
  batches: any;
  constructor(
    private fb: FormBuilder,
    private resourseService: ResourcesService
  ) {
    this.ngOnInit();

    this.resourseService.getAllCourses().subscribe(
      (data) => {
        this.courses = data;
      },
      (err) => {
        console.log(err);
      }
    );

    this.resourseService.getAllBatches().subscribe(
      (data) => {
        this.batches = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  loading = false;

  form = this.fb.group({
    course: [null, Validators.required],
    batch: [null, Validators.required],
    title: ['', Validators.required],
    link: ['', Validators.required],
    description: ['', Validators.required],
  });

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
    this.resourseService.postexternalLinks(this.form.value).subscribe(
      (data) => {
        console.log(data);
        this.form.reset();
        this.loading = false;
        this.ngOnInit();
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    );
  }

  get course() {
    return this.form.get('course');
  }
  get batch() {
    return this.form.get('batch');
  }
  get title() {
    return this.form.get('title');
  }
  get link() {
    return this.form.get('link');
  }
  get description() {
    return this.form.get('description');
  }
}
