import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})
export class VideosComponent implements OnInit {
  courses: any;
  batches: any;

  constructor(
    private fb: FormBuilder,
    private resourseService: ResourcesService,
    private http: HttpClient
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

  ext: any;
  id: any;

  handleFile(event: any) {
    const ex = event.target.files[0];
    this.ext = ex.name.split('.').pop();
  }

  loading = false;

  form = this.fb.group({
    course: [null, Validators.required],
    batch: [null, Validators.required],
    title: ['', Validators.required],

    description: ['', Validators.required],
  });

  ngOnInit(): void {}
  sendVideo(id: any, ext: any) {
    this.http
      .post(
        `${this.resourseService.uploadVideoURL}?id=${id}&ext=.${ext}`,
        new FormData(document.getElementById('myform') as HTMLFormElement)
      )
      .subscribe();
  }
  onSubmit() {
    this.loading = true;
    this.resourseService.postexternalLinks(this.form.value).subscribe(
      (data: any) => {
        this.sendVideo(data.id, this.ext);
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    );

    this.loading = true;
    window.setTimeout(() => {
      console.log(this.form.value);
      this.form.reset();
      this.loading = false;
      this.ngOnInit();
    }, 1000);
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
  get file() {
    return this.form.get('file');
  }
  get description() {
    return this.form.get('description');
  }

  arr1: any = [
    {
      id: 1,
      name: 'Angular',
    },
    {
      id: 2,
      name: 'Node',
    },
    {
      id: 3,
      name: 'MongoDB',
    },
  ];

  arr2: any = [
    {
      id: 1,
      name: 'Angular',
    },
    {
      id: 2,
      name: 'Node',
    },
    {
      id: 3,
      name: 'MongoDB',
    },
  ];


  //log the array
}
