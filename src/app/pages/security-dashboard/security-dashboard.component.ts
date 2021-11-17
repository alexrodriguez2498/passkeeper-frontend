import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-dashboard',
  templateUrl: './security-dashboard.component.html',
  styleUrls: ['./security-dashboard.component.scss']
})
export class SecurityDashboardComponent implements OnInit {
  exampleLinks = [
    {text: 'exampleMail@mail.com'},
    {text: 'exampleMail@mail.com'},
    {text: 'exampleMail@mail.com'},
    {text: 'exampleMail@mail.com'},
    {text: 'exampleMail@mail.com'},
    {text: 'exampleMail@mail.com'},
    {text: 'exampleMail@mail.com'},
    {text: 'exampleMail@mail.com'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
