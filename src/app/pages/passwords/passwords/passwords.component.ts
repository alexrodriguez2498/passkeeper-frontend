import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passwords',
  templateUrl: './passwords.component.html',
  styleUrls: ['./passwords.component.scss']
})
export class PasswordsComponent implements OnInit {
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
      label: 'password',
      user: 'someExample@gmail.com'
    },
    {
      title: 'Juanita\'s Direction',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'password',
      direction1: 'Av. Evergreen, 123 street. oklahoma arkansas',
      user: 'someExample@gmail.com'
    },
    {
      title: 'Visa US',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'password',
      expiredDate: '06-2025',
      cardNumber: '1234 1234 1234 1234',
      user: 'someExample@gmail.com'
    },
    {
      title: 'pro market account',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'password',
      accountNumber: '1234 1234 1234 1234',
      user: 'someExample@gmail.com'
    },
    {
      title: 'pedidos ya account',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'password',
      user: 'someExample@gmail.com'
    },
    {
      title: 'playstation account',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'password',
      user: 'someExample@gmail.com',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
