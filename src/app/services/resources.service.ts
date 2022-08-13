import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResourcesService {
  private getAllCoursesURL = `${environment.BASE_URL}/Course/GetAll`;
  private getAllBatchURL = `${environment.BASE_URL}/Batch/GetAll`;
  private postExternalLinksURL = `${environment.BASE_URL}/Resources/Add`;
  private uploadpdfURL = `${environment.BASE_URL}/Resources/pdfupload`;
  public uploadVideoURL = `${environment.BASE_URL}/Resources/VideoUpload`;
  private getAllVideoURL = `${environment.BASE_URL}/Resources/GetAll`;
  private getVideoURL = `${environment.BASE_URL}/Resources/GetVideo`;
  private getAllLinksURL = `${environment.BASE_URL}/Resources/GetVideo`;
  private getsinglepdfURL = `${environment.BASE_URL}/Resources/GetPdf`;
  private deletepdfURL = `${environment.BASE_URL}/Resources/Remove`;
  constructor(private http: HttpClient) {}

  getAllCourses() {
    return this.http.get(this.getAllCoursesURL);
  }

  getAllBatches() {
    return this.http.get(this.getAllBatchURL);
  }

  postexternalLinks(data: any) {
    return this.http.post(this.postExternalLinksURL, data);
  }

  uploadpdf(data: any) {
    return this.http.post(`${this.uploadpdfURL}`, data);
  }

  uploadvideo(data: any, id: any,ext:any) {
    const formData: FormData = new FormData();
    formData.append('file', data, id + '.' + ext);

    return this.http.post(`${this.uploadVideoURL}?id=${id}&ext=.${ext}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  getAllVideo() {
    return this.http.get(this.getAllVideoURL);
  }
  getVideoByid(id: any) {
    return this.http.get(`${this.getVideoURL}?id=${id}`);
  }

  getsinglepdf(id: any) {
    return this.http.get(`${this.getsinglepdfURL}?id=${id}`);
  }

  deleteBook(id: any) {
    return this.http.delete(`${this.deletepdfURL}?id=${id}`);
  }

  deletelink(id: any) {
    return this.http.delete(`${this.deletepdfURL}?id=${id}`);
  }




}
