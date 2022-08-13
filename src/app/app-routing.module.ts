import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { ContactUsComponent } from './pages/common/contact-us/contact-us.component';
import { FeedbackComponent } from './pages/common/feedback/feedback.component';
import { ParentsAddComponent } from './pages/parents/parents-add/parents-add.component';
import { ParentsIndexComponent } from './pages/parents/parents-index/parents-index.component';
import { ParentsManageComponent } from './pages/parents/parents-manage/parents-manage.component';
import { StudentsIndexComponent } from './pages/admin/students/students-index/students-index.component';
import { StudentsManageComponent } from './pages/admin/students/students-manage/students-manage.component';
import { StudentsAddComponent } from './pages/admin/students/students-add/students-add.component';
import { TeacherIndexComponent } from './pages/teachers/teacher-index/teacher-index.component';
import { TeachersAddComponent } from './pages/teachers/teachers-add/teachers-add.component';
import { TeachersManageComponent } from './pages/teachers/teachers-manage/teachers-manage.component';
import { IndexExtraClassesComponent } from './pages/common/extra-classes/index-extra-classes/index-extra-classes.component';
import { ManageClassesComponent } from './pages/common/extra-classes/manage-classes/manage-classes.component';
import { AddClassesComponent } from './pages/common/extra-classes/add-classes/add-classes.component';
import { TestsIndexComponent } from './pages/common/tests/tests-index/tests-index.component';
import { TestsManageComponent } from './pages/common/tests/tests-manage/tests-manage.component';
import { TestsAddComponent } from './pages/common/tests/tests-add/tests-add.component';
import { TestMarksIndexComponent } from './pages/common/test-marks/test-marks-index/test-marks-index.component';
import { TestMarksManageComponent } from './pages/common/test-marks/test-marks-manage/test-marks-manage.component';
import { TestMarksAddComponent } from './pages/common/test-marks/test-marks-add/test-marks-add.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { IndexCourseComponent } from './pages/admin/course/index-course/index-course.component';
import { ManageCourseComponent } from './pages/admin/course/manage-course/manage-course.component';
import { AddCourseComponent } from './pages/admin/course/add-course/add-course.component';

import { ExternallinksComponent } from './pages/common/resources/ExtraLinks/externallinks/externallinks.component';
import { VideosComponent } from './pages/common/resources/Videos/videos/videos.component';
import { BooksComponent } from './pages/common/resources/Books/books/books.component';
import { ExtraLinkIndexComponent } from './pages/common/resources/ExtraLinks/extra-link-index/extra-link-index.component';
import { ExtraLinkManageComponent } from './pages/common/resources/ExtraLinks/extra-link-manage/extra-link-manage.component';
import { BookManageComponent } from './pages/common/resources/Books/book-manage/book-manage.component';
import { BookIndexComponent } from './pages/common/resources/Books/book-index/book-index.component';
import { VideoIndexComponent } from './pages/common/resources/Videos/video-index/video-index.component';
import { VideomanageComponent } from './pages/common/resources/Videos/videomanage/videomanage.component';
import { ViewVideoComponent } from './pages/common/resources/Videos/view-video/view-video.component';
import { ProgressIndexComponent } from './pages/common/progress/progress-index/progress-index.component';
import { ManageprogressComponent } from './pages/common/progress/manageprogress/manageprogress.component';
import { ProgressComponent } from './pages/common/progress/progress/progress.component';

import { BatchIndexComponent } from './pages/admin/batch/batch-index/batch-index.component';
import { BatchManageComponent } from './pages/admin/batch/batch-manage/batch-manage.component';
import { BatchAddComponent } from './pages/admin/batch/batch-add/batch-add.component';
import { AssignCourseComponent } from './pages/admin/course/assign-course/assign-course.component';
import { AssignIdCourseComponent } from './pages/admin/course/assign-id-course/assign-id-course.component';


// const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home', component: AdminHomeComponent },
//   { path: 'feedback', component: FeedbackComponent },
  // { path: 'contactus', component: ContactUsComponent },
//   // Students
//   {
//     path: 'students',
//     component: StudentsIndexComponent,
//     children: [
//       { path: '', redirectTo: 'manage', pathMatch: 'full' },
//       { path: 'manage', component: StudentsManageComponent },
//       { path: 'add', component: StudentsAddComponent },
//     ],
//   },
//   // Teachers
//   {
//     path: 'teachers',
//     component: TeacherIndexComponent,
//     children: [
//       { path: '', redirectTo: 'manage', pathMatch: 'full' },
//       { path: 'manage', component: TeachersManageComponent },
//       { path: 'add', component: TeachersAddComponent },
//     ],
//   },
//   // Parents
//   {
//     path: 'parents',
//     component: ParentsIndexComponent,
//     children: [
//       { path: '', redirectTo: 'manage', pathMatch: 'full' },
//       { path: 'manage', component: ParentsManageComponent },
//       { path: 'add', component: ParentsAddComponent },
//     ],
//   },
//   // Tests
//   {
//     path: 'tests',
//     component: TestsIndexComponent,
//     children: [
//       { path: '', redirectTo: 'manage', pathMatch: 'full' },
//       { path
//         : 'manage', component: TestsManageComponent },
//       { path: 'add', component: TestsAddComponent },
//     ],
//   },
//   // Test Marks
//   {
//     path: 'testmarks',
//     component: TestMarksIndexComponent,
//     children: [
//       { path: '', redirectTo: 'manage', pathMatch: 'full' },
//       { path: 'manage', component: TestMarksManageComponent },
//       { path: 'add', component: TestMarksAddComponent },
//       { path: 'add/:id', component: TestMarksAddComponent },
//     ],
//   },
//   // Extra Classes
//   {
//     path: 'extra-classes',
//     component: IndexExtraClassesComponent,
//     children: [
//       { path: '', redirectTo: 'manage', pathMatch: 'full' },
//       { path: 'manage', component: ManageClassesComponent },
//       { path: 'add', component: AddClassesComponent },
//     ],
//   },
// ];

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contactus', component: ContactUsComponent },
  {
    path: 'admin',
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: AdminHomeComponent,
      },
      // Teachers
      {
        path: 'teachers',
        component: TeacherIndexComponent,
        children: [
          { path: '', redirectTo: 'manage', pathMatch: 'full' },
          { path: 'manage', component: TeachersManageComponent },
        ],
      },
      // Students
      {
        path: 'students',
        component: StudentsIndexComponent,
        children: [
          { path: '', redirectTo: 'manage', pathMatch: 'full' },
          { path: 'manage', component: StudentsManageComponent },
        ],
      },
      // Courses
      {
        path: 'courses',
        component: IndexCourseComponent,
        children: [
          { path: '', redirectTo: 'manage', pathMatch: 'full' },
          { path: 'manage', component: ManageCourseComponent },
          { path: 'add', component: AddCourseComponent },
          { path: 'assign', component: AssignCourseComponent },
          { path: 'assign/:id', component: AssignIdCourseComponent },
        ],
      },
      // Batches
      {
        path: 'batches',
        component: BatchIndexComponent,
        children: [
          { path: '', redirectTo: 'manage', pathMatch: 'full' },
          { path: 'manage', component: BatchManageComponent },
          { path: 'add', component: BatchAddComponent },
        ],
      },
      // Tests
      {
        path: 'tests',
        component: TestsIndexComponent,
        children: [
          { path: '', redirectTo: 'manage', pathMatch: 'full' },
          { path: 'manage', component: TestsManageComponent },
          { path: 'add', component: TestsAddComponent },
        ],
      },
      // Test Marks
      {
        path: 'testmarks',
        component: TestMarksIndexComponent,
        children: [
          { path: '', redirectTo: 'manage', pathMatch: 'full' },
          { path: 'manage', component: TestMarksManageComponent },
          { path: 'add', component: TestMarksAddComponent },
          { path: 'add/:id', component: TestMarksAddComponent },
        ],
      },
      // Extra Classes
      {
        path: 'extra-classes',
        component: IndexExtraClassesComponent,
        children: [
          { path: '', redirectTo: 'manage', pathMatch: 'full' },
          { path: 'manage', component: ManageClassesComponent },
          { path: 'add', component: AddClassesComponent },
        ],
      },

      {
        path: 'resources/extralinks',
        component: ExtraLinkIndexComponent,
        children: [
          { path: '', redirectTo: 'manage', pathMatch: 'full' },
          { path: 'manage', component: ExtraLinkManageComponent },
          { path: 'extralinks', component: ExternallinksComponent },
        ],
      },

      {
        path: 'resources/books',
        component: BookIndexComponent,
        children: [
          { path: '', redirectTo: 'manage', pathMatch: 'full' },
          { path: 'manage', component: BookManageComponent },
          { path: 'add', component: BooksComponent },
        ],
      },

      {
        path: 'resources/videos',
        component: VideoIndexComponent,
        children: [
          { path: 'video', redirectTo: 'manage', pathMatch: 'full' },
          { path: '', redirectTo: 'manage', pathMatch: 'full' },
          { path: 'manage', component: VideomanageComponent },
          { path: 'add', component: VideosComponent },
          { path: 'video/:id', component: ViewVideoComponent },
        ],
      },

      {
        path: 'gradual',
        component: ProgressIndexComponent,
        children: [
          { path: 'gradual', redirectTo: 'manage', pathMatch: 'full' },
          { path: '', redirectTo: 'manage', pathMatch: 'full' },
          { path: 'manage', component: ManageprogressComponent },
          { path: 'progress', component: ProgressComponent },
        ],
      },

      {
        path: 'extra-classes',
        component: IndexExtraClassesComponent,
        children: [
          { path: '', redirectTo: 'manage', pathMatch: 'full' },
          { path: 'manage', component: ManageClassesComponent },
          { path: 'add', component: AddClassesComponent },
        ],
      },
    ],
    canActivate: [AuthGuard, AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
