import { Component } from '@angular/core';
import { PoAvatarModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card-component.component.html',
  styleUrls: ['./business-card-component.component.css']  // Opcional, se você tiver estilos personalizados
})
export class BusinessCardComponent {
  avatarSrc = 'https://avatars.githubusercontent.com/u/127060261?v=4';  // URL correta da imagem do avatar
  userName = 'Bruno Hackbart Nunes';              // Nome do usuário
  userRole = 'Técnico em Automação Industrial';   // Cargo ou subtítulo do usuário
  userEmail = 'usuario@dominio.com';              // E-mail do usuário
}
