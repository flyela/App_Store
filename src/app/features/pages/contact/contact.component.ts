import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
}



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export default class ContactComponent {
  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    address: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  isLoading = false;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      const formValue = this.contactForm.value;
      const message = encodeURIComponent(
        `*Nuevo mensaje de contacto*\n\n` +
        `*Nombre:* ${formValue.name}\n` +
        `*Dirección:* ${formValue.address}\n` +
        `*Email:* ${formValue.email}\n` +
        `*Mensaje:* ${formValue.message}`
      );

      const whatsappUrl = `https://wa.me/573125831346?text=${message}`;
      window.open(whatsappUrl, '_blank');

      this.isLoading = false;
      this.isSubmitted = true;
      this.contactForm.reset();
    } else {
      Object.values(this.contactForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsTouched();
        }
      });
    }
  }

}
