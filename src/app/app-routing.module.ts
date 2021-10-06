import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClassRoomComponent } from './headMasterDashboard/class/add-class-room/add-class-room.component';
import { UpdateClassRoomComponent } from './headMasterDashboard/class/update-class-room/update-class-room.component';
import { ViewClassRoomComponent } from './headMasterDashboard/class/view-class-room/view-class-room.component';
import { ForgotPasswordComponent } from './headMasterDashboard/forgot-password/forgot-password.component';
import { HeadMasterLoginCredentialsComponent } from './headMasterDashboard/head-master-login-credentials/head-master-login-credentials.component';
import { HeadMasterLoginComponent } from './headMasterDashboard/head-master-login/head-master-login.component';
import { HeadMasterModuleComponent } from './headMasterDashboard/head-master-module/head-master-module.component';
import { HeadMasterSignUpComponent } from './headMasterDashboard/head-master-sign-up/head-master-sign-up.component';
import { AddParentComponent } from './headMasterDashboard/parent/add-parent/add-parent.component';
import { AddResultComponent } from './headMasterDashboard/result/add-result/add-result.component';
import { UpdateResultComponent } from './headMasterDashboard/result/update-result/update-result.component';
import { ViewResultComponent } from './headMasterDashboard/result/view-result/view-result.component';
import { AddStudentComponent } from './headMasterDashboard/student/add-student/add-student.component';
import { ViewStudentComponent } from './headMasterDashboard/student/view-student/view-student.component';
import { AddSubjectComponent } from './headMasterDashboard/subject/add-subject/add-subject.component';
import { SubjectAssignComponent } from './headMasterDashboard/subject/subject-assign/subject-assign.component';
import { TeacherSubjectAssignComponent } from './headMasterDashboard/subject/teacher-subject-assign/teacher-subject-assign.component';
import { ViewSubjectAssignComponent } from './headMasterDashboard/subject/view-subject-assign/view-subject-assign.component';
import { ViewProfileComponent } from './headMasterDashboard/view-profile/view-profile.component';
import { HomeComponent } from './home/home.component';
import { StudentModuleComponent } from './studentDashboard/student-module/student-module.component';
import { AddMarkComponent } from './teacherDashboard/mark/add-mark/add-mark.component';
import { ViewMarkComponent } from './teacherDashboard/mark/view-mark/view-mark.component';
import { TeacherModuleComponent } from './teacherDashboard/teacher-module/teacher-module.component';
import { ViewParticularResultComponent } from './studentDashboard/result/view-particular-result/view-particular-result.component';
import { ViewStudentProfileComponent } from './studentDashboard/view-student-profile/view-student-profile.component';
import { GetStudentComponent } from './teacherDashboard/student/get-student/get-student.component';
import { ViewTeacherProfileComponent } from './teacherDashboard/view-teacher-profile/view-teacher-profile.component';
import { TeacherSignUpComponent } from './teacherDashboard/teacher-sign-up/teacher-sign-up.component';
import { TeacherLoginCredentialsComponent } from './teacherDashboard/teacher-login-credentials/teacher-login-credentials.component';
import { TeacherLoginComponent } from './teacherDashboard/teacher-login/teacher-login.component';
import { TeacherForgotPasswordComponent } from './teacherDashboard/teacher-forgot-password/teacher-forgot-password.component';
import { StudentLoginCredentialsComponent } from './studentDashboard/student-login-credentials/student-login-credentials.component';
import { StudentLoginComponent } from './studentDashboard/student-login/student-login.component';
import { StudentForgotPasswordComponent } from './studentDashboard/student-forgot-password/student-forgot-password.component';
import { ViewMarkClassComponent } from './teacherDashboard/mark/view-mark-class/view-mark-class.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';

const routes: Routes = [
  {
    path:"headmastermodule",component:HeadMasterModuleComponent,
    children: [{ path: "addclass", component: AddClassRoomComponent },
    {path: "viewclass", component: ViewClassRoomComponent},
    { path: "addstudent", component: AddStudentComponent },
    { path: "viewstudent", component: ViewStudentComponent },
    { path: "addresult", component: AddResultComponent },
    { path: "updateresult", component: UpdateResultComponent },
    { path: "viewresult", component: ViewResultComponent },
    { path: "viewprofile", component: ViewProfileComponent },
    { path: "addsubject",component:AddSubjectComponent},
    { path: "assignsubject",component:SubjectAssignComponent},
    { path: "viewassignsubject",component:ViewSubjectAssignComponent},
    { path: "changepassword", component: ForgotPasswordComponent },
    { path: "assignteachersubject",component:TeacherSubjectAssignComponent}
    ]
  },
  { path: "headmastersignup", component: HeadMasterSignUpComponent },
  { path: "teachersignup", component: TeacherSignUpComponent },
  { path: "home", component: HomeComponent },
  { path: "headmasterlogin", component: HeadMasterLoginComponent },
  { path: "headmastercredentials", component: HeadMasterLoginCredentialsComponent },
  { path: "addmarkinteacher",component:AddTeacherComponent},
  { path: "teacherlogincredentials",component:TeacherLoginCredentialsComponent},
  { path: "teacherlogin",component:TeacherLoginComponent},
  { path: "studentlogincredentials",component:StudentLoginCredentialsComponent},
  { path: "loginforstudent",component:StudentLoginComponent},
  { path:"teachermodule",component:TeacherModuleComponent,children:[{
    path:"addmark",component:AddMarkComponent
  },
  { path: "teacherchangepassword",component:TeacherForgotPasswordComponent},
  { path: "viewmark",component:ViewMarkComponent},
  {path:"viewstudentsmarks",component:ViewMarkClassComponent},
  { path: "getstudents",component:GetStudentComponent},
  {   path:"viewprofile",component:ViewTeacherProfileComponent}]
},
{ path:"studentmodule",component:StudentModuleComponent,children:[{
  path:"viewresult",component:ViewParticularResultComponent
},{path:"viewprofile",component:ViewStudentProfileComponent},
 { path: "studentchangepassword",component:StudentForgotPasswordComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
