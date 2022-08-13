import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-add-classes',
  templateUrl: './add-classes.component.html',
  styleUrls: ['./add-classes.component.css'],
})
export class AddClassesComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private resources: ResourcesService,
    private adminservice: AdminService,
    private router: Router
  ) {
    this.ngOnInit();
  }

  courses: any = [];
  batches: any = [];
  id = '';
  loading = false;

  form = this.fb.group({
    course: [null, Validators.required],
    batch: [null, Validators.required],
    subject: ['', Validators.required],
    description: ['', Validators.required],
    date: ['', Validators.required],
  });

  courseval() {
    this.resources.getAllBatches().subscribe((res: any) => {
      // console.log(this.form.value.course);
      this.batches = res.filter(
        (item: any) => item.courseId == this.form.value.course
      );
      //console.log(this.batches);
    });
  }

  ngOnInit(): void {
    this.resources.getAllCourses().subscribe((res: any) => {
      this.courses = res;
    });
  }

  onSubmit() {
    this.loading = true;
    window.setTimeout(() => {
      console.log(this.form.value);
      this.form.reset();
      this.loading = false;
      this.ngOnInit();
    }, 1000);

    const payload = {
      title: this.form.value.subject,
      description: this.form.value.description,
      extraClassTiming: this.form.value.date,
      batchId: this.form.value.batch,
    };

    this.adminservice.AddExtraClasses(payload).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(['/admin/extra-classes/manage']);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  get course() {
    return this.form.get('course');
  }
  get batch() {
    return this.form.get('batch');
  }
  get subject() {
    return this.form.get('subject');
  }
  get description() {
    return this.form.get('description');
  }
  get date() {
    return this.form.get('date');
  }
}
