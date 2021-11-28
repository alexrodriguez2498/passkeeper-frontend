import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passport-documents',
  templateUrl: './passport-documents.component.html',
  styleUrls: ['./passport-documents.component.scss']
})
export class PassportDocumentsComponent implements OnInit {
  dummyData = [
    {
      title: 'google account',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'passport-document',
      accountNumber: '1234 1234 1234',
      user: 'someExample@gmail.com',
      expiredDate: '06-2025',
      cardNumber: '1234 1234 1234 1234',
      documentExpiredDate: '20-12-2030',
      type: 6,
    },
    {
      title: 'Grocery shopping list',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'passport-document',
      accountNumber: '1234 1234 1234',
      user: 'someExample@gmail.com',
      expiredDate: '06-2025',
      cardNumber: '1234 1234 1234 1234',
      documentExpiredDate: '20-12-2030',
      type: 6,
    },
    {
      title: 'Juanita\'s Direction',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'passport-document',
      accountNumber: '1234 1234 1234',
      direction1: 'Av. Evergreen, 123 street. oklahoma arkansas',
      user: 'someExample@gmail.com',
      expiredDate: '06-2025',
      cardNumber: '1234 1234 1234 1234',
      documentExpiredDate: '20-12-2030',
      type: 6,
    },
    {
      title: 'Visa US',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'passport-document',
      accountNumber: '1234 1234 1234',
      expiredDate: '06-2025',
      cardNumber: '1234 1234 1234 1234',
      documentExpiredDate: '20-12-2030',
      type: 6,
      user: 'someExample@gmail.com'
    },
    {
      title: 'pro market account',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'passport-document',
      accountNumber: '1234 1234 1234',
      user: 'someExample@gmail.com',
      expiredDate: '06-2025',
      cardNumber: '1234 1234 1234 1234',
      documentExpiredDate: '20-12-2030',
      type: 6,
    },
    {
      title: 'pedidos ya account',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'passport-document',
      accountNumber: '1234 1234 1234',
      user: 'someExample@gmail.com',
      expiredDate: '06-2025',
      cardNumber: '1234 1234 1234 1234',
      documentExpiredDate: '20-12-2030',
      type: 6,
    },
    {
      title: 'playstation account',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'passport-document',
      accountNumber: '1234 1234 1234',
      user: 'someExample@gmail.com',
      expiredDate: '06-2025',
      cardNumber: '1234 1234 1234 1234',
      documentExpiredDate: '20-12-2030',
      type: 6,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
