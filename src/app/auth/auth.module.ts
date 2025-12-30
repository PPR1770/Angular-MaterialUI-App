import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
// Add if you have register

// Define routes for auth module
const routes: Routes = [
  { path: 'login', component: LoginComponent },// Add if you have register
  { path: '', redirectTo: 'login', pathMatch: 'full' } // Default route
];

@NgModule({
  declarations: [
    LoginComponent // Add if you have register
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes) // Add routing with forChild
  ]
})
export class AuthModule { }