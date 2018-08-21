import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyword-mapping',
  templateUrl: './keyword-mapping.component.html',
  styleUrls: ['./keyword-mapping.component.css']
})
export class KeywordMappingComponent implements OnInit {

	keyword = 'keywords';
	left = 'left-axis';
	right = 'right-axis';

  constructor() { }

  ngOnInit() {
  }

  onUpdate(){
  	console.log(this.keyword)
  	console.log(this.left)
  	console.log(this.right)
  }

}
