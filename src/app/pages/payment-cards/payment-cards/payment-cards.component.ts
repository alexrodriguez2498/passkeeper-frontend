import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-cards',
  templateUrl: './payment-cards.component.html',
  styleUrls: ['./payment-cards.component.scss']
})
export class PaymentCardsComponent implements OnInit {
  dummyData = [
    {
      title: 'google account',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'payment-card',
      user: 'someExample@gmail.com',
      expiredDate: '06-2025',
      cardNumber: '1234 1234 1234 1234',
    },
    {
      title: 'Grocery shopping list',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'payment-card',
      user: 'someExample@gmail.com',
      expiredDate: '06-2025',
      cardNumber: '1234 1234 1234 1234',
    },
    {
      title: 'Juanita\'s Direction',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'payment-card',
      direction1: 'Av. Evergreen, 123 street. oklahoma arkansas',
      user: 'someExample@gmail.com',
      expiredDate: '06-2025',
      cardNumber: '1234 1234 1234 1234',
    },
    {
      title: 'Visa US',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'payment-card',
      expiredDate: '06-2025',
      cardNumber: '1234 1234 1234 1234',
      user: 'someExample@gmail.com'
    },
    {
      title: 'pro market account',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'payment-card',
      accountNumber: '1234 1234 1234 1234',
      user: 'someExample@gmail.com',
      expiredDate: '06-2025',
      cardNumber: '1234 1234 1234 1234',
    },
    {
      title: 'pedidos ya account',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'payment-card',
      user: 'someExample@gmail.com',
      expiredDate: '06-2025',
      cardNumber: '1234 1234 1234 1234',
    },
    {
      title: 'playstation account',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'payment-card',
      user: 'someExample@gmail.com',
      expiredDate: '06-2025',
      cardNumber: '1234 1234 1234 1234',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
