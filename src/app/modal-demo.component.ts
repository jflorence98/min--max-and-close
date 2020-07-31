import { Component } from '@angular/core';



@Component({

  selector: 'app-modal-demo',

  template: `

    <button class="dt-button" (click)="modalRoot.show()">Open modal</button>

    <app-modal #modalRoot

              [minimizable]="true"

               [maximizable]="true"

               (closeModal)="onCloseModal()">

      <ng-container class="app-modal-header">WELCOME</ng-container>

      <ng-container class="app-modal-body">



        <p>MINIMIZE AND MAXIMIZE AND CLOSE</p>

      </ng-container>

      <ng-container class="app-modal-footer">





      </ng-container>

    </app-modal>

  `,

})

export class ModalDemoComponent {

  onCloseModal() {}



}
