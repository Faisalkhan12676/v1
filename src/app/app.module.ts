import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { TeacherIndexComponent } from './pages/teachers/teacher-index/teacher-index.component';
import { FeedbackComponent } from './pages/common/feedback/feedback.component';
import { ContactUsComponent } from './pages/common/contact-us/contact-us.component';
import { HelplineComponent } from './pages/common/helpline/helpline.component';

import { AddCourseComponent } from './pages/admin/course/add-course/add-course.component';
import { ManageCourseComponent } from './pages/admin/course/manage-course/manage-course.component';
import { TeachersManageComponent } from './pages/teachers/teachers-manage/teachers-manage.component';
import { TeachersAddComponent } from './pages/teachers/teachers-add/teachers-add.component';
import { ParentsAddComponent } from './pages/parents/parents-add/parents-add.component';
import { ParentsManageComponent } from './pages/parents/parents-manage/parents-manage.component';
import { ParentsIndexComponent } from './pages/parents/parents-index/parents-index.component';
import { ManageClassesComponent } from './pages/common/extra-classes/manage-classes/manage-classes.component';
import { AddClassesComponent } from './pages/common/extra-classes/add-classes/add-classes.component';
import { ViewClassesComponent } from './pages/common/extra-classes/view-classes/view-classes.component';
import { IndexExtraClassesComponent } from './pages/common/extra-classes/index-extra-classes/index-extra-classes.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { ParentsHomeComponent } from './pages/parents/parents-home/parents-home.component';
import { StudentsHomeComponent } from './pages/students/students-home/students-home.component';
import { TeachersHomeComponent } from './pages/teachers/teachers-home/teachers-home.component';
import { TestsIndexComponent } from './pages/common/tests/tests-index/tests-index.component';
import { TestsManageComponent } from './pages/common/tests/tests-manage/tests-manage.component';
import { TestsAddComponent } from './pages/common/tests/tests-add/tests-add.component';
import { StudentsIndexComponent } from './pages/admin/students/students-index/students-index.component';
import { StudentsManageComponent } from './pages/admin/students/students-manage/students-manage.component';
import { StudentsAddComponent } from './pages/admin/students/students-add/students-add.component';
import { BatchIndexComponent } from './pages/admin/batch/batch-index/batch-index.component';
import { BatchManageComponent } from './pages/admin/batch/batch-manage/batch-manage.component';
import { BatchAddComponent } from './pages/admin/batch/batch-add/batch-add.component';
import { TestMarksIndexComponent } from './pages/common/test-marks/test-marks-index/test-marks-index.component';
import { TestMarksManageComponent } from './pages/common/test-marks/test-marks-manage/test-marks-manage.component';
import { TestMarksAddComponent } from './pages/common/test-marks/test-marks-add/test-marks-add.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { IndexCourseComponent } from './pages/admin/course/index-course/index-course.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AssignCourseComponent } from './pages/admin/course/assign-course/assign-course.component';
import { AssignIdCourseComponent } from './pages/admin/course/assign-id-course/assign-id-course.component';

import { ExternallinksComponent } from './pages/common/resources/ExtraLinks/externallinks/externallinks.component';

import { ExtraLinkIndexComponent } from './pages/common/resources/ExtraLinks/extra-link-index/extra-link-index.component';
import { VideosComponent } from './pages/common/resources/Videos/videos/videos.component';
import { BooksComponent } from './pages/common/resources/Books/books/books.component';
import { ExtraLinkManageComponent } from './pages/common/resources/ExtraLinks/extra-link-manage/extra-link-manage.component';
import { BookIndexComponent } from './pages/common/resources/Books/book-index/book-index.component';
import { BookManageComponent } from './pages/common/resources/Books/book-manage/book-manage.component';
import { VideoIndexComponent } from './pages/common/resources/Videos/video-index/video-index.component';
import { VideomanageComponent } from './pages/common/resources/Videos/videomanage/videomanage.component';
import { ViewVideoComponent } from './pages/common/resources/Videos/view-video/view-video.component';
import { ProgressIndexComponent } from './pages/common/progress/progress-index/progress-index.component';
import { ProgressComponent } from './pages/common/progress/progress/progress.component';
import { ManageprogressComponent } from './pages/common/progress/manageprogress/manageprogress.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    TeacherIndexComponent,
    FeedbackComponent,
    ContactUsComponent,
    HelplineComponent,
    AddCourseComponent,
    ManageCourseComponent,
    TeachersManageComponent,
    TeachersAddComponent,
    ParentsAddComponent,
    ParentsManageComponent,
    ParentsIndexComponent,
    ManageClassesComponent,
    AddClassesComponent,
    ViewClassesComponent,
    IndexExtraClassesComponent,
    AdminHomeComponent,
    ParentsHomeComponent,
    StudentsHomeComponent,
    TeachersHomeComponent,
    TestsIndexComponent,
    TestsManageComponent,
    TestsAddComponent,
    StudentsIndexComponent,
    StudentsManageComponent,
    StudentsAddComponent,
    BatchIndexComponent,
    BatchManageComponent,
    BatchAddComponent,
    TestMarksIndexComponent,
    TestMarksManageComponent,
    TestMarksAddComponent,
    LoginComponent,
    RegisterComponent,
    IndexCourseComponent,

    VideosComponent,
    ExternallinksComponent,
    BooksComponent,
    ExtraLinkIndexComponent,
    ExtraLinkManageComponent,
    BookIndexComponent,
    BookManageComponent,
    VideoIndexComponent,
    VideomanageComponent,
    ViewVideoComponent,
    ProgressIndexComponent,
    ProgressComponent,
    ManageprogressComponent,
   

    AssignCourseComponent,
    AssignIdCourseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['example.com'],
        disallowedRoutes: ['http://example.com/examplebadroute/'],
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
