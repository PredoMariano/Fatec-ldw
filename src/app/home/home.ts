import { Component } from '@angular/core';
import { Contato } from '../contato/contato';

@Component({
  imports: [Contato],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  saudacao = 'Bem-vindos ao Angular Moderno'
}
