import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-extra-link-manage',
  templateUrl: './extra-link-manage.component.html',
  styleUrls: ['./extra-link-manage.component.css'],
})
export class ExtraLinkManageComponent implements OnInit {
  videos: any = [];
  // filteredVideos: any = [];
  isLoading = true;
  role: any;
  constructor(
    private resource: ResourcesService,
    private haverole: AuthService
  ) {
    this.resource.getAllVideo().subscribe((data: any) => {
      this.isLoading = false;
      this.videos = data.filter((video: any) => video.link !== null);
      // this.videos = data;
      console.log(this.videos);
    }),
      (error: any) => {
        this.isLoading = false;
        console.log(error);
      };

    this.role = this.haverole.haveRole().toLowerCase();
    console.log(this.role);
  }

  delete(id: any) {
    this.resource.deletelink(id).subscribe((data: any) => {
      this.resource.getAllVideo().subscribe((data: any) => {
        this.isLoading = false;
        this.videos = data.filter((video: any) => video.link !== null);
        // this.videos = data;
        console.log(this.videos);
      }),
        (error: any) => {
          this.isLoading = false;
          console.log(error);
        };
    }),
      (error: any) => {
        console.log(error);
      };
  }

  ngOnInit(): void {}
}
