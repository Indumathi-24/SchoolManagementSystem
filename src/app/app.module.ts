import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AddClassRoomComponent } from './headMasterDashboard/class/add-class-room/add-class-room.component';
import { UpdateClassRoomComponent } from './headMasterDashboard/class/update-class-room/update-class-room.component';
import { ViewClassRoomComponent } from './headMasterDashboard/class/view-class-room/view-class-room.component';
import { ForgotPasswordComponent } from './headMasterDashboard/forgot-password/forgot-password.component';
import { HeadMasterLoginCredentialsComponent } from './headMasterDashboard/head-master-login-credentials/head-master-login-credentials.component';
import { HeadMasterLoginComponent } from './headMasterDashboard/head-master-login/head-master-login.component';
import { HeadMasterModuleComponent } from './headMasterDashboard/head-master-module/head-master-module.component';
import { HeadMasterSignUpComponent } from './headMasterDashboard/head-master-sign-up/head-master-sign-up.component';
import { AddStudentComponent } from './headMasterDashboard/student/add-student/add-student.component';
import { ViewStudentComponent } from './headMasterDashboard/student/view-student/view-student.component';
import { AddResultComponent } from './headMasterDashboard/result/add-result/add-result.component';
import { UpdateResultComponent } from './headMasterDashboard/result/update-result/update-result.component';
import { ViewResultComponent } from './headMasterDashboard/result/view-result/view-result.component';
import { AddParentComponent } from './headMasterDashboard/parent/add-parent/add-parent.component';
import { ViewProfileComponent } from './headMasterDashboard/view-profile/view-profile.component';
import { AddSubjectComponent } from './headMasterDashboard/subject/add-subject/add-subject.component';
import { ViewSubjectComponent } from './headMasterDashboard/subject/view-subject/view-subject.component';
import { SubjectAssignComponent } from './headMasterDashboard/subject/subject-assign/subject-assign.component';
import { ViewSubjectAssignComponent } from './headMasterDashboard/subject/view-subject-assign/view-subject-assign.component';
import { TeacherSubjectAssignComponent } from './headMasterDashboard/subject/teacher-subject-assign/teacher-subject-assign.component';
import { TeacherModuleComponent } from './teacherDashboard/teacher-module/teacher-module.component';
import { AddMarkComponent } from './teacherDashboard/mark/add-mark/add-mark.component';
import { ViewMarkComponent } from './teacherDashboard/mark/view-mark/view-mark.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import { StudentModuleComponent } from './studentDashboard/student-module/student-module.component';
import { ViewParticularResultComponent } from './studentDashboard/result/view-particular-result/view-particular-result.component';
import { ViewStudentProfileComponent } from './studentDashboard/view-student-profile/view-student-profile.component';
import { UpdateStudentProfileComponent } from './studentDashboard/update-student-profile/update-student-profile.component';
import { GetStudentComponent } from './teacherDashboard/student/get-student/get-student.component';
import { UpdateProfileComponent } from './headMasterDashboard/update-profile/update-profile.component';
import { ViewTeacherProfileComponent } from './teacherDashboard/view-teacher-profile/view-teacher-profile.component';
import { UpdateTeacherProfileComponent } from './teacherDashboard/update-teacher-profile/update-teacher-profile.component';
import { TeacherLoginCredentialsComponent } from './teacherDashboard/teacher-login-credentials/teacher-login-credentials.component';
import { TeacherSignUpComponent } from './teacherDashboard/teacher-sign-up/teacher-sign-up.component';
import { TeacherLoginComponent } from './teacherDashboard/teacher-login/teacher-login.component';
import { TeacherForgotPasswordComponent } from './teacherDashboard/teacher-forgot-password/teacher-forgot-password.component';
import { StudentLoginCredentialsComponent } from './studentDashboard/student-login-credentials/student-login-credentials.component';
import { StudentLoginComponent } from './studentDashboard/student-login/student-login.component';
import { StudentForgotPasswordComponent } from './studentDashboard/student-forgot-password/student-forgot-password.component';
import { ViewMarkClassComponent } from './teacherDashboard/mark/view-mark-class/view-mark-class.component';



@NgModule({
  declarations: [
    AppComponent,
    HeadMasterSignUpComponent,
    HomeComponent,
    HeadMasterLoginComponent,
    HeadMasterLoginCredentialsComponent,
    HeadMasterModuleComponent,
    AddClassRoomComponent,
    ViewClassRoomComponent,
    UpdateClassRoomComponent,
    AddStudentComponent,
    ViewStudentComponent,
    ForgotPasswordComponent,
    AddResultComponent,
    UpdateResultComponent,
    ViewResultComponent,
    AddParentComponent,
    ViewProfileComponent,
    AddSubjectComponent,
    ViewSubjectComponent,
    SubjectAssignComponent,
    ViewSubjectAssignComponent,
    TeacherSubjectAssignComponent,
    TeacherModuleComponent,
    AddMarkComponent,
    ViewMarkComponent,
    StudentModuleComponent,
    ViewParticularResultComponent,
    ViewStudentProfileComponent,
    UpdateStudentProfileComponent,
    GetStudentComponent,
    UpdateProfileComponent,
    ViewTeacherProfileComponent,
    UpdateTeacherProfileComponent,
    TeacherLoginCredentialsComponent,
    TeacherSignUpComponent,
    TeacherLoginComponent,
    TeacherForgotPasswordComponent,
    StudentLoginCredentialsComponent,
    StudentLoginComponent,
    StudentForgotPasswordComponent,
    ViewMarkClassComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddParentComponent,UpdateClassRoomComponent,UpdateProfileComponent]
})
export class AppModule { }
