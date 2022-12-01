import { Component } from '@angular/core';
import Imovel from 'src/app/model/model.module';

/**
 * @List Basic expansion panel
 */

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  imoveis: Imovel[] = [
    {
      title: "Casa na praia",
      majorQuality: "A 300m da orla da praia",
      fullDescription: "Casa com 3 dormitórios, sendo 1 suíte. Cozinha americana integrada na sala. Lavabo e banheiro completo. Com varanda com vista para o mar.",
      price: "R$310 000"
    },
    {
      title: "Sítio no campo",
      majorQuality: "Mais de 1000m² de mata preservada",
      fullDescription: "Casa com 2 dormitórios térrea. Sala e cozinha intregrados com área gourmet e piscina.",
      price: "R$480 000"
    },
    {
      title: "Casa em condomínio",
      majorQuality: "O conforto de uma casa, na segurança de um condomínio",
      fullDescription: "Casa com 4 dormitórios, sendo 3 suíte. Cozinha, sala de jantar e sala de estar totalmente isoladas. Em bairro nobre de São Paulo.",
      price: "R$760 000"
    },
    {
      title: "Studio no centro",
      majorQuality: "A apenas 2 quarteirões da Rua Augusta e toda sua comodidade",
      fullDescription: "Studio com 30m². Todos os espaços integrados. Totalmente mobiliado.",
      price: "R$400 000"
    }
  ]
}
