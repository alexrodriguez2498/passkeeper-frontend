import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent implements OnInit {
  @Input() arrData = [];
  isHereHome: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isHereHome = this.router.url.replace('/', '') === 'home';
    console.log(this.isHereHome);
  }

  catchLabel(variable) {
    if (variable.label === 'password') {
      return variable.user;
    } else if (variable.label === 'note') {
      return variable.description;
    } else if (variable.label === 'address') {
      return variable.direction;
    } else if (variable.label === 'payment-card') {
      return `Ends with ${variable.cardNumber.substring(variable.cardNumber.length - 4, variable.cardNumber.length)}, Expires in ${variable.expiredDate}`;
    } else if (variable.label === 'bank-account') {
      return variable.accountNumber;
    } else if (variable.label === 'messaging-app') {
      return variable.user;
    } else if (variable.label === 'passport-document') {
      return  `Expires in ${variable.documentExpiredDate}`;
    }
  }

  catchImage(variable) {
    if (variable.label === 'password') {
      return 'assets/app-logos/password.png';
    } else if (variable.label === 'note') {
      return 'assets/app-logos/notes.png';
    } else if (variable.label === 'address') {
      return 'assets/app-logos/direction.png';
    } else if (variable.label === 'payment-card') {
      return 'assets/app-logos/card.jpg';
    } else if (variable.label === 'bank-account') {
      return 'assets/app-logos/bank-account.png';
    } else if (variable.label === 'messaging-app') {
      return 'assets/app-logos/messaging-app.png';
    } else if (variable.label === 'passport-document') {
      return 'assets/app-logos/passport-document.png';
    }
  }

  validateLaunchable(card) {
    return card.label === ('password' || 'messaging-app') ;
  }
}
