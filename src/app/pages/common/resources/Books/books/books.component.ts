import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
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

  files: any;
  ext: any;

  handleFile(event: any) {
    const file = event.target.files[0];
    //get extension
    this.ext = file.name.split('.').pop();
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.files = reader.result?.toString().split(',')[1];
      console.log(this.files);
    };
  }

  loading = false;

  form = this.fb.group({
    course: [null, Validators.required],
    batch: [null, Validators.required],
    title: ['', Validators.required],
    file: [''],
    description: ['', Validators.required],
  });

  ngOnInit(): void {}

  onSubmit() {
    this.loading = true;
    this.resourseService.postexternalLinks(this.form.value).subscribe(
      (data: any) => {
        const pdfpayload = {
          id: parseInt(data.id),  
          base64: this.files,
          ext: this.ext,
        };

        console.log(pdfpayload);

        this.resourseService
          .uploadpdf(pdfpayload)
          .subscribe(
            (data) => {
              console.log(data);
              this.form.reset();
              this.loading = false;
              this.ngOnInit();
            },
            (err) => {
              console.log(err);
            }
          );
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
}
