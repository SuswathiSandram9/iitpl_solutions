import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: false,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  phones = ['+91 90801 44794', '+91 80151 95225'];
  emails = ['imagemicr@gmail.com - ISP', 'iitpl2026@gmail.com - IITPL'];
  address =
    'Plot No.11, 4th St, Secretariat Colony, Retteri, Kolathur, Chennai, Tamil Nadu 600099';

  subject = '';
  subjectOptions = ['University', 'Professional', 'Freelancer', 'Business'];
  submitted = false;

  /**
   * WhatsApp numbers for form submissions (digits only, with country code).
   * Example: 919876543210 for +91 98765 43210
   */
  useTestWhatsApp = false;
  whatsappTestNumber = '918106335322';
  whatsappProductionNumber = '919080144794';

  isInvalid(field: NgModel): boolean {
    return this.submitted && !!field.invalid;
  }

  sendViaWhatsApp(form: NgForm): void {
    this.submitted = true;
    form.control.markAllAsTouched();

    if (form.invalid || !this.subject) {
      return;
    }

    const number = this.useTestWhatsApp
      ? this.whatsappTestNumber
      : this.whatsappProductionNumber;

    if (!number) {
      alert(
        'Add your test WhatsApp number in contact-us.component.ts (whatsappTestNumber).'
      );
      return;
    }

    const { firstName, lastName, email, phone, message } = form.value;
    const text = [
      'Hello Image Team,',
      '',
      `*Name:* ${firstName} ${lastName}`,
      `*Email:* ${email}`,
      `*Phone:* ${phone}`,
      `*Subject:* ${this.subject}`,
      '',
      '*Message:*',
      message
    ].join('\n');

    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  }
}
