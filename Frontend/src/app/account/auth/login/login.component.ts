
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';
import { AuthenticationResponse } from '../models/authentication-response';
import { VerificationRequest } from '../models/verification-request';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  error = '';
  returnUrl: string;
  loginForm: FormGroup;
  authResponse: AuthenticationResponse = {};
  otpCode = '';
  message = '';
  year: number = new Date().getFullYear();
  userService: UserService;
  constructor(
    public toastService: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthentificationService,
    userService: UserService) {
    this.userService = userService;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get f() { return this.loginForm.controls; }

 onSubmit() {
  const formData = this.loginForm.value;

  this.authService.login(formData).subscribe({
    next: (response) => {
      this.authResponse = response;

      if (!this.authResponse.mfaEnabled) {
        localStorage.setItem('token', response.accessToken as string);
        localStorage.setItem('UserConnected', JSON.stringify({
          id: response.id,
          firstname: response.firstname,
          lastname: response.lastname,
          email: response.email,
          role: response.role,
          sexe: response.sexe
        }));

        // Afficher le message de succès ici, après avoir bien tout stocké
        this.toastService.success('Connexion réussie !', 'Succès', {
          timeOut: 3000,
        });

        // Redirection selon le rôle
        switch (this.authResponse.role) {
          case 'Admin':
            this.router.navigate(['/profils/profil_Admin']);
            break;
          case 'Client':
            this.router.navigate(['/profils/profil_client']);
            break;
          case 'Commercial':
            this.router.navigate(['/profils/profil_commercial']);
            break;
          default:
            console.warn('Rôle non reconnu :', this.authResponse.role);
            break;
        }
      } else {
        this.toastService.info('Authentification à deux facteurs requise.', 'Information', {
          timeOut: 3000,
        });
        // Tu peux ajouter ici la redirection vers une page MFA si nécessaire
      }
    },

    error: (err) => {
      const message = err?.error?.message || 'Échec de la connexion. Vérifiez votre email et mot de passe.';
      this.toastService.error(message, 'Erreur', {
        timeOut: 3000,
      });
    }
  });
}




}
