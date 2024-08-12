import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PoAvatarModule, PoMenuItem, PoMenuModule, PoPageModule, PoToolbarModule, PoWidgetModule, PoModalModule } from '@po-ui/ng-components';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    PoWidgetModule,
    PoModalModule,
    PoAvatarModule,
    RouterModule // Adicione este módulo para garantir que o componente PoAvatar funcione
    
    
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor (private router: Router){ }
  
  readonly menus: Array<PoMenuItem> = [
    { label: 'Quem sou eu ?', action: () => this.changeContent('profile') },
    { label: 'Objetivo desse estudo', action: () => this.changeContent('objetivo') },
    { label: 'Cronograma', action: () => this.changeContent('cronograma') }
  ];
  selectedContent: string = 'profile';

  private changeContent(content: string) {
    this.selectedContent = content;
  }
}
