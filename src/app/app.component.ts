import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-manager-app';

  constructor(
    private registerIcons: MatIconRegistry,
    private sanitizer: DomSanitizer

  ) {

    this.registerIcons.addSvgIcon(
      'delete',
      this.sanitizer.bypassSecurityTrustResourceUrl(
          '../assets/images/delete.svg'
      )
  );
  }


}
