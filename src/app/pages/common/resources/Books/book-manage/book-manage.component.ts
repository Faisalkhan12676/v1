import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-book-manage',
  templateUrl: './book-manage.component.html',
  styleUrls: ['./book-manage.component.css'],
})
export class BookManageComponent implements OnInit {
  videos: any = [];
  // filteredVideos: any = [];
  isLoading = true;
  role: any;

  getallbook() {
    this.resource.getAllVideo().subscribe((data: any) => {
      this.isLoading = false;
      this.videos = data.filter((video: any) => video.filePath !== null);
      // this.videos = data;
      console.log(this.videos);
    }),
      (error: any) => {
        this.isLoading = false;
        console.log(error);
      };
  }

  constructor(
    private resource: ResourcesService,
    private haverole: AuthService
  ) {
    this.getallbook();

    this.role = this.haverole.haveRole().toLowerCase();
    console.log(this.role);
  }

  viewBook(id: any) {
    console.log(id);
    this.resource.getsinglepdf(id).subscribe(
      (data: any) => {
        const linkSource = 'data:application/pdf;base64,' + data;
        const downloadLink = document.createElement('a');
        const fileName = 'sample.pdf';

        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
      },
      (error: any) => {
        const data = error.error.text;
        const linkSource = 'data:application/pdf;base64,' + data;
        const downloadLink = document.createElement('a');
        const fileName = 'sample.pdf';

        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
      }
    );
  }

  deleteBook(id: any) {
    this.resource.deletelink(id).subscribe((data: any) => {
      this.videos = this.videos.filter((video: any) => video.id !== id);
    }),
      (error: any) => {
        console.log(error);
      };
  }

  ngOnInit(): void {}
}
