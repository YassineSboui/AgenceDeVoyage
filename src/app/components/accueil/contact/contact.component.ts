import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Mail } from 'src/app/models/mail';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  mail: Mail = new Mail();

  sendmail(name: string, mail: string, subject: string, text: string) {
    if (name == '' || subject == '' || text == '' || name == '') {
      this.ErrorSnackBar('Veillez remplir tous les champs');
    } else if (!mail.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      this.ErrorSnackBar('Veillez saisir une adresse valide');
    } else {
      this.mail = new Mail(name, mail, subject, text);
      this.mailService.postmail(this.mail).subscribe(
        (response) => {
          this.SuccessSnackBar('E-mail sended');
        },
        (error) => {
          this.ErrorSnackBar("Fail to send");
        }
      );
    }
  }

  constructor(
    private _snackBar: MatSnackBar,
    private mailService: MailService
  ) {}

  SuccessSnackBar(message: string) {
    this._snackBar.open(message, 'SUCCEEDED', { duration: 3000 });
  }
  ErrorSnackBar(message: string) {
    this._snackBar.open(message, 'ERROR', { duration: 3000 });
  }

  ngOnInit(): void {}
}
