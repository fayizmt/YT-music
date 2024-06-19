import { Component,} from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  errorMessage:string='';

  constructor(
    private fb: FormBuilder,
    // private userService: UserService,
    // private router: Router
  ) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
    //   this.userService.userSignup(this.signupForm.value).subscribe(
    //     response => {
    //       console.log('Signup successful', response);
    //       this.router.navigate(['/login']);
    //     },
    //     error => {
    //       console.error('Signup failed', error);
    //       this.errorMessage = 'Signup failed. Please try again.';
    //     }
    //   );
    }
  }
}
