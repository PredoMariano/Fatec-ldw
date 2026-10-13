import { Component } from '@angular/core';
import { Contato } from '../contato/contato';
import { About } from '../about/about';

@Component({
  imports: [Contato, About],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  saudacao = 'Bem-vindos ao Angular Moderno'
}
