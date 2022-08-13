import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.css'],
})
export class ViewVideoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private resource: ResourcesService
  ) {}

  video: any;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.resource.getVideoByid(id).subscribe(
      (data) => {
        this.video = 'data:video/mp4;base64,' + data;
        console.log(this.video);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
