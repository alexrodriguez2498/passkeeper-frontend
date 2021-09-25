import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dummyData = [
    {
      title: 'google account',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'password',
      user: 'someExample@gmail.com'
    },
    {
      title: 'Grocery shopping list',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'note'
    },
    {
      title: 'Juanita\'s Direction',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'address',
      direction: 'Av. Evergreen, 123 street. oklahoma arkansas'
    },
    {
      title: 'Visa US',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'payment-card',
      expiredDate: '06-2025',
      cardNumber: '1234 1234 1234 1234'
    },
    {
      title: 'spain central bank account',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'bank-account',
      accountNumber: '1234 1234 1234 1234'
    },
    {
      title: 'facebook account',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'messaging-app',
    },
    {
      title: 'venezuelan passport',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'passport-document',
      documentExpiredDate: '20-12-2030'
    },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
