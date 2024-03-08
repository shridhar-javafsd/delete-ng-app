// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {

//   onSubmit(loginForm: any) {
//     if (loginForm.valid) {
//       // Perform login authentication logic here
//       console.log('Form submitted successfully!');
//     }
//   }
// }



import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formData: any = {
    username: '',
    password: ''
  };

  @ViewChild('loginForm') loginForm!: NgForm;

  onSubmit() {
    if (this.formData.username && this.formData.password) {
      console.log('Form submitted successfully!');
      this.loginForm.resetForm();

    }
  }
}
