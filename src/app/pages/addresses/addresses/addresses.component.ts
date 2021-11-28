import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {
  dummyData = [
    {
      title: 'google account',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'address',
      direction: '5th Avenue, 104-251 wallstreet direction',
      accountNumber: '1234 1234 1234',
      user: 'someExample@gmail.com',
      expiredDate: '06-2025',
      cardNumber: '1234 1234 1234 1234',
      type: 3,
    },
    {
      title: 'Grocery shopping list',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'address',
      direction: '5th Avenue, 104-251 wallstreet direction',
      accountNumber: '1234 1234 1234',
      user: 'someExample@gmail.com',
      expiredDate: '06-2025',
      cardNumber: '1234 1234 1234 1234',
      type: 3,
    },
    {
      title: 'Juanita\'s Direction',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'address',
      direction: '5th Avenue, 104-251 wallstreet direction',
      accountNumber: '1234 1234 1234',
      direction1: 'Av. Evergreen, 123 street. oklahoma arkansas',
      user: 'someExample@gmail.com',
      expiredDate: '06-2025',
      cardNumber: '1234 1234 1234 1234',
      type: 3,
    },
    {
      title: 'Visa US',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'address',
      direction: '5th Avenue, 104-251 wallstreet direction',
      accountNumber: '1234 1234 1234',
      expiredDate: '06-2025',
      cardNumber: '1234 1234 1234 1234',
      type: 3,
      user: 'someExample@gmail.com'
    },
    {
      title: 'pro market account',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'address',
      direction: '5th Avenue, 104-251 wallstreet direction',
      accountNumber: '1234 1234 1234',
      user: 'someExample@gmail.com',
      expiredDate: '06-2025',
      cardNumber: '1234 1234 1234 1234',
      type: 3,
    },
    {
      title: 'pedidos ya account',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'address',
      direction: '5th Avenue, 104-251 wallstreet direction',
      accountNumber: '1234 1234 1234',
      user: 'someExample@gmail.com',
      expiredDate: '06-2025',
      cardNumber: '1234 1234 1234 1234',
      type: 3,
    },
    {
      title: 'playstation account',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
      label: 'address',
      direction: '5th Avenue, 104-251 wallstreet direction',
      accountNumber: '1234 1234 1234',
      user: 'someExample@gmail.com',
      expiredDate: '06-2025',
      cardNumber: '1234 1234 1234 1234',
      type: 3,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
