import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ShowConsent:boolean=true;
    isChecked:boolean=false;
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
    login: any = { username: '', password: '' };
	  submitted = false;
	  bankid:any;
	  bankname:any;
	  banklogo:any;

  constructor( public alertController: AlertController,
  	public router: Router,
    private route: ActivatedRoute
) { }

  ngOnInit() {

  	this.bankid = this.route.snapshot.paramMap.get('bankId');
    var idbank = this.bankid;
    var currentbank=this.banks.filter(function (el) {

                        return el['bank_id']== idbank;
                      })[0];
    if (currentbank){

    this.bankname=currentbank.bank_name;
    this.banklogo=currentbank.bank_logo;
  }

  }

  async SubmitConsent() {


    if (this.isChecked) 
      { 
			this.ShowConsent=false;
  }
   
   else{
      this.presentAlert();

    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      backdropDismiss:false,
      mode:'ios',
      message: "Pour continuer la certification, vous devez accepter les conditions générales de notre application.",
      buttons: [ {
          text: 'OK',
          handler: () => {
            
          }
        }]
    });

    await alert.present();
  }

}
