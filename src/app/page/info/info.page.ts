import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  banks:any=[
			   {"bank_id" : 1 ,"bank_name" :"Attijari Bank","bank_logo" :"attijari.jpg","popular":true},
			   {"bank_id":2,"bank_name":"Amen Bank","bank_logo":"AB.png","popular":true},
			   {"bank_id":3,"bank_name":"Zitouna Bank","bank_logo":"zitouna.jpg","popular":true},
			  {"bank_id":4,"bank_name":"BIAT Bank","bank_logo":"biat.png","popular":true},
			  {"bank_id":5,"bank_name":"La poste","bank_logo":"poste.jpg","popular":true},
			  {"bank_id":6,"bank_name":"BNA Bank","bank_logo":"bna.jpeg","popular":true},
			  {"bank_id":7,"bank_name":"BH Bank","bank_logo":"BH.png","popular":true},
			  {"bank_id":8,"bank_name":"UBCI Bank","bank_logo":"UBCI.jpg","popular":false},
			  {"bank_id":9,"bank_name":"UIB Bank","bank_logo":"UIB.jpg","popular":true},
			  {"bank_id":10,"bank_name":"ATB Bank","bank_logo":"ATB.jpg","popular":false},
			  {"bank_id":11,"bank_name":"STB Bank","bank_logo":"stb.jpeg","popular":false},
			  {"bank_id":12,"bank_name":"BT Bank","bank_logo":"BT.jpg","popular":false},
			  {"bank_id":13,"bank_name":"TQB Bank","bank_logo":"tqb.jpg","popular":false},
			  {"bank_id":14,"bank_name":"Al-Baraka Bank","bank_logo":"albaraka.png","popular":false},
			  {"bank_id":18,"bank_name":"ABC Bank","bank_logo":"abc.jpg","popular":false},
			  {"bank_id":19,"bank_name":"BTE Bank","bank_logo":"bte.png","popular":false},
			  {"bank_id":20,"bank_name":"BTK Bank","bank_logo":"btk.png","popular":true},
			  {"bank_id":21,"bank_name":"BTL Bank","bank_logo":"btl.png","popular":false},
			  {"bank_id":22,"bank_name":"TSB Bank","bank_logo":"stusid.png","popular":false}
			];
  popularbanks:any=[];


  constructor() { }

  ngOnInit() {
   var popbanks = this.banks.filter(function (el) {
                        return el['popular'] 
                      })
    var i=0;
    var j=popbanks.length%3

    while (i < popbanks.length-j) {
      this.popularbanks.push([popbanks[i],popbanks[i+1],popbanks[i+2]]);
      i+=3;
    }
    let restbank=popbanks.slice(i);
    if (restbank.length%3==2) restbank.push({bank_id:null});
    if (restbank.length%3==1) {restbank.push({bank_id:null});restbank.push({bank_id:null});}
    this.popularbanks.push(restbank);
  }
  

}
