import { Component, OnInit } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-web-body',
  templateUrl: './web-body.component.html',
  styleUrls: ['./web-body.component.scss']
})
export class WebBodyComponent implements OnInit {
  faAngular = faAngular;
  faSass = faSass;
  faJs = faJs;
  faCss3 = faCss3;
  faHtml5 = faHtml5;



  constructor() { }

  ngOnInit(): void {
  }

}
