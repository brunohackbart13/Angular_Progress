
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PoAvatarModule, PoMenuItem, PoMenuModule, PoPageModule, PoToolbarModule, PoWidgetModule, PoModalModule, PoChartSerie, PoChartModule, PoDynamicModule, PoDynamicFieldType } from '@po-ui/ng-components';
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
    PoChartModule,
    RouterModule,
    PoDynamicModule
    
    
    
  
    
    
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor (private router: Router){ }
  
  readonly menus: Array<PoMenuItem> = [
    { label: 'Quem sou eu ?', action: () => this.changeContent('profile') },
    { label: 'Objetivo desse estudo', action: () => this.changeContent('objetivo') },
    { label: 'Cronograma', action: () => this.changeContent('cronograma') },
    { label: 'PO Chart (Gráfico)', action: () => this.changeContent('grafico') },
    { label: 'Dynamic Form', action: () => this.changeContent('dynamicForm') }
    
    
  ];
  selectedContent: string = 'profile';

  private changeContent(content: string) {
    this.selectedContent = content;
  }

  series: Array<PoChartSerie> = [
    { label: 'Angular', data: 20 },
    { label: 'PO UI', data: 20 },
    { label: 'Progress', data: 25},
    { label: 'OpenEdge', data: 25},
    { label: 'HTML', data: 10}

];
}

