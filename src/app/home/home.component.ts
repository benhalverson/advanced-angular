import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('outlet',{read: ViewContainerRef})
  outlet: ViewContainerRef;
   constructor(private cfr: ComponentFactoryResolver) { }
   async loadLogin() {
     const {LoginPromptComponent} =
       await import('../login-prompt/login-prompt.module');
     this.outlet.createComponent(
       this.cfr.resolveComponentFactory(LoginPromptComponent)
     );
   }


  ngOnInit() {
  }

}
