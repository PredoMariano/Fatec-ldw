import { Component, computed, effect, signal } from '@angular/core';
import { Contato } from '../contato/contato';
import { About } from '../about/about';

@Component({
  imports: [Contato, About],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  protected cont = "Contagem: ";
  protected somador = signal(0);
  protected dobrador = computed(() => this.somador() * 2);
  private registrador = effect(() => {
    console.log('Registrando contador:', this.somador());
    console.log('Registrando dobrador:', this.dobrador());
  });
  private flag = true;

  protected onClick() {
    if(this.flag) {
      this.somador.update(v => v + 1);
      if (this.somador() > 9) {
        this.flag = !this.flag;
      }
    } else {
      this.somador.update(v => v - 1);
      if (this.somador() == 0) {
        this.flag = !this.flag;
      }
    }
  }
}
