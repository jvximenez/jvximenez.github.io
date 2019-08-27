webpackJsonp([29],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdicaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EdicaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EdicaoPage = /** @class */ (function () {
    function EdicaoPage(navCtrl, navParams, dbService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.remedios = [];
        this.dentes = [];
        this.atividades = [];
        this.pessoas = [];
        this.role = [];
        this.estudos = [];
        this.controle = {
            'dia': '',
            'mes': '',
            'ano': '',
            'remedios': '',
            'dentes': '',
            'atividades': '',
            'passos': '',
            'peso': '',
            'andando': '',
            'correndo': '',
            'tempinho': '',
            'tempinhoQ': '',
            'UHU': '',
            'cafe': '',
            'lancheM': '',
            'almoco': '',
            'lancheT': '',
            'jantar': '',
            'lancheN': '',
            'doce': '',
            'refrigerante': '',
            'alcool': '',
            'estudos': '',
            'tempoE': '',
            'tempoA': '',
            'role': '',
            'pessoas': '',
            'resumo': '',
            'viagemLugar': '',
            'barba': false,
            'agradecimento': false,
            'meditacao': false,
            'escrever': false,
            'raser': false,
            'leitura': false,
            'besteira': false,
            'viagem': false,
            'exercicios': false,
            'total': '',
            'parcial': '',
        };
        this.controle = this.navParams.get('single');
        this.rows = 5;
        this.rows = 5;
        this.Remedios = this.dbService.getAll('configuracoes/remedios', 'ordem');
        this.Atividades = this.dbService.getAll('configuracoes/atividades', 'ordem');
        this.Roles = this.dbService.getAll('configuracoes/roles', 'ordem');
        this.Estudos = this.dbService.getAll('configuracoes/estudos', 'ordem');
        this.Pessoas = this.dbService.getAll('configuracoes/pessoas', 'ordem');
        this.Dentes = this.dbService.getAll('configuracoes/dentes', 'ordem');
        this.remedios = [
            { title: "Homeopatia - manhã" },
            { title: "Homeopatia - noite" },
            { title: "Advil" },
            { title: "Vitamina C" },
            { title: "Vitamina D" },
            { title: "Antibiótico" },
            { title: "Antialergico" },
            { title: "Antiflamatório" },
            { title: "Creme" },
            { title: "Buscopan" },
            { title: "Eno" },
            { title: "Omeoprazol" },
            { title: "" }
        ];
        this.dentes = [
            { title: "Manhã" },
            { title: "Tarde" },
            { title: "Noite" },
            { title: "Outro" },
            { title: "Fio dental" },
            { title: "Aparelho" },
            { title: "" }
        ];
        this.atividades = [
            { title: "Corrida" },
            { title: "Caminhada" },
            { title: "Intervalado" },
            { title: "Abdominais" },
            { title: "Flexões" },
            { title: "Gêmeos" },
            { title: "Outro" },
            { title: "" }
        ];
        this.estudos = [
            { title: "Frances" },
            { title: "Ingles" },
            { title: "Projet Constru" },
            { title: "Programação" },
            { title: "Outro" },
            { title: "" }
        ];
        this.pessoas = [
            { title: "Dani" },
            { title: "Amanda" },
            { title: "Luma" },
            { title: "India" },
            { title: "Filippo" },
            { title: "Marina" },
            { title: "Marianinha" },
            { title: "Pai" },
            { title: "Mãe" },
            { title: "Felipe" },
            { title: "Sttefany" },
            { title: "Bella" },
            { title: "Outro" },
            { title: "" }
        ];
        this.role = [
            { title: "Pizza" },
            { title: "Mcdonalds" },
            { title: "Burger King" },
            { title: "Hamburguer" },
            { title: "Aniversário" },
            { title: "Bar" },
            { title: "Churrasco" },
            { title: "Dani" },
            { title: "Japones" },
            { title: "Balada" },
            { title: "Festa" },
            { title: "Turistar" },
            { title: "Viajar" },
            { title: "Outro" },
            { title: "" }
        ];
    }
    EdicaoPage.prototype.roww = function () {
        this.rows = 5;
    };
    EdicaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdicionarPage');
    };
    EdicaoPage.prototype.Data = function () {
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        var array = [dia, mes, ano];
        return array;
    };
    EdicaoPage.prototype.Criacao = function (controle) {
        var array = this.Data();
        this.controle.dia = String(array[0]);
        this.controle.mes = String(array[1]);
        this.controle.ano = String(array[2]);
        this.controle.total = String(this.Total());
        this.controle.parcial = String(this.Parcial());
        this.dbService.save('diario', controle);
    };
    EdicaoPage.prototype.Total = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia);
        return total;
    };
    EdicaoPage.prototype.Parcial = function () {
        var total;
        var data = new Date();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 100 + (mes + 1));
        return total;
    };
    EdicaoPage.prototype.Atualizar = function (controle) {
        var _this = this;
        this.dbService.update('diario', controle).then(function (d) {
            _this.navCtrl.pop();
        });
    };
    EdicaoPage.prototype.Deletar = function (controle) {
        var _this = this;
        this.dbService.revome('diario', controle).then(function (d) {
            _this.navCtrl.pop();
        });
    };
    EdicaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edicao',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\edicao\edicao.html"*/'<!--\n\n  Generated template for the EdicaoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Edição</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-grid>\n\n\n\n      <ion-row class="roww">\n\n        <ion-item>\n\n          <ion-label class="nome" >Dia: </ion-label>\n\n          <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="controle.dia"></ion-input>\n\n        </ion-item>\n\n      </ion-row>\n\n\n\n      <ion-row class="roww">\n\n        <ion-item>\n\n          <ion-label class="nome" >Mes: </ion-label>\n\n          <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="controle.mes"></ion-input>\n\n        </ion-item>\n\n      </ion-row>\n\n\n\n      <ion-row class="roww">\n\n        <ion-item>\n\n          <ion-label class="nome" >Ano: </ion-label>\n\n          <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="controle.ano"></ion-input>\n\n        </ion-item>\n\n      </ion-row>\n\n\n\n      <ion-row class="roww">\n\n        <ion-item>\n\n          <ion-label class="nome" >Total: </ion-label>\n\n          <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="controle.total"></ion-input>\n\n        </ion-item>\n\n      </ion-row>\n\n\n\n      <ion-row class="roww">\n\n        <ion-item>\n\n          <ion-label class="nome" >Parcial: </ion-label>\n\n          <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="controle.parcial"></ion-input>\n\n        </ion-item>\n\n      </ion-row>\n\n\n\n      <ion-row  class="roww">\n\n        <ion-item>\n\n          <ion-label class="nome">Remedios: </ion-label>\n\n            <ion-select class="input" [(ngModel)]="controle.remedios" interface="popover" multiple =  True>\n\n              <ion-option *ngFor="let rem of (Remedios | async) ">{{rem.title}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n      </ion-row>\n\n  \n\n      <ion-row class="roww">\n\n        <ion-item>\n\n          <ion-label class="nome" >Dentes: </ion-label>\n\n          <ion-select  text-righ [(ngModel)]="controle.dentes" interface="popover" multiple =  True>\n\n            <ion-option text-righ *ngFor="let den of (Dentes | async)">{{den.title}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-row>\n\n  \n\n      <ion-row class="roww">\n\n        <ion-item>\n\n          <ion-label class="nome" >Atividades: </ion-label>\n\n          <ion-select text-righ [(ngModel)]="controle.atividades" interface="popover" multiple =  True>\n\n            <ion-option text-righ *ngFor="let ativ of (Atividades | async)">{{ativ.title}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-row>\n\n  \n\n      <ion-row class="roww">\n\n        <ion-item>\n\n          <ion-label class="nome" >Passos: </ion-label>\n\n          <ion-input text-right type="number" value="" [(ngModel)]="controle.passos"></ion-input>\n\n        </ion-item>\n\n      </ion-row>\n\n  \n\n      \n\n      <ion-row class="roww">\n\n        <ion-item>\n\n          <ion-label class="nome" >Peso: </ion-label>\n\n          <ion-input text-right type="number"  value="" [(ngModel)]="controle.peso"></ion-input>\n\n        </ion-item>\n\n      </ion-row>\n\n  \n\n      <ion-row class="roww">\n\n        <ion-item no-lines>\n\n          <ion-range no-padding min="0" max="100" step = \'5\' [(ngModel)]="controle.andando">\n\n            <ion-label range-left class="nome">Andando: </ion-label>\n\n            <ion-label range-right>{{controle.andando}}</ion-label>\n\n          </ion-range>\n\n        </ion-item>\n\n      </ion-row>\n\n  \n\n      <ion-row class="roww">\n\n          <ion-item>\n\n            <ion-range no-padding min="0" max="100" step=\'5\' [(ngModel)]="controle.correndo">\n\n              <ion-label class="nome" range-left >Correndo: </ion-label>\n\n              <ion-label range-right>{{controle.correndo}}</ion-label>\n\n            </ion-range>\n\n          </ion-item>\n\n        </ion-row>\n\n  \n\n     <ion-row  class="roww">\n\n        <ion-item no-lines>\n\n          <ion-range no-padding min="0" max="60"  [(ngModel)]="controle.tempinho">\n\n            <ion-label class="nome" range-left>Tempinho: </ion-label>\n\n            <ion-label range-right>{{controle.tempinho}}</ion-label>\n\n          </ion-range>\n\n        </ion-item>\n\n      </ion-row>\n\n  \n\n      <ion-row  class="roww">\n\n        <ion-item no-lines>\n\n          <ion-range no-padding min="0" max="10"  [(ngModel)]="controle.tempinhoQ">\n\n            <ion-label class="nome" range-left>Tempinho: </ion-label>\n\n            <ion-label range-right>{{controle.tempinhoQ}}</ion-label>\n\n          </ion-range>\n\n        </ion-item>\n\n      </ion-row>\n\n  \n\n      <ion-row  class="roww">\n\n        <ion-item>\n\n          <ion-range no-padding min="0" max="10" [(ngModel)]="controle.UHU">\n\n            <ion-label class="nome" range-left>Uhu: </ion-label>\n\n            <ion-label range-right>{{controle.UHU}}</ion-label>\n\n          </ion-range>\n\n        </ion-item>\n\n      </ion-row>\n\n  \n\n      <ion-row  class="roww">\n\n        <ion-item no-lines>\n\n          <ion-range no-padding min="0" max="5" [(ngModel)]="controle.cafe">\n\n            <ion-label class="nome" range-left>Cafe: </ion-label>\n\n            <ion-label range-right>{{controle.cafe}}</ion-label>\n\n          </ion-range>\n\n        </ion-item>\n\n      </ion-row>\n\n  \n\n      <ion-row  class="roww">\n\n        <ion-item no-lines>\n\n          <ion-range no-padding min="0" max="5" [(ngModel)]="controle.lancheM">\n\n            <ion-label class="nome" range-left>Lanche: </ion-label>\n\n            <ion-label range-right>{{controle.lancheM}}</ion-label>\n\n          </ion-range>\n\n        </ion-item>\n\n      </ion-row>\n\n  \n\n      <ion-row  class="roww">\n\n        <ion-item no-lines  >\n\n          <ion-range no-padding min="0" max="5" [(ngModel)]="controle.almoco">\n\n            <ion-label class="nome" range-left>Almoço: </ion-label>\n\n            <ion-label range-right>{{controle.almoco}}</ion-label>\n\n          </ion-range>\n\n        </ion-item>\n\n      </ion-row>\n\n  \n\n      <ion-row  class="roww">\n\n        <ion-item no-lines>\n\n          <ion-range no-padding min="0" max="5" [(ngModel)]="controle.lancheT">\n\n            <ion-label class="nome" range-left>Lanche: </ion-label>\n\n            <ion-label range-right>{{controle.lancheT}}</ion-label>\n\n          </ion-range>\n\n        </ion-item>\n\n      </ion-row>\n\n  \n\n  \n\n      <ion-row  class="roww">\n\n        <ion-item no-lines>\n\n          <ion-range no-padding min="0" max="5" [(ngModel)]="controle.jantar">\n\n            <ion-label class="nome" range-left>Jantar: </ion-label>\n\n            <ion-label range-right>{{controle.jantar}}</ion-label>\n\n          </ion-range>\n\n        </ion-item>\n\n      </ion-row>\n\n  \n\n      <ion-row  class="roww">\n\n        <ion-item>\n\n          <ion-range no-padding min="0" max="5" [(ngModel)]="controle.lancheN">\n\n            <ion-label class="nome" range-left>Lanche: </ion-label>\n\n            <ion-label range-right>{{controle.lancheN}}</ion-label>\n\n          </ion-range>\n\n        </ion-item>\n\n      </ion-row>\n\n  \n\n      <ion-row  class="roww">\n\n        <ion-item no-lines>\n\n          <ion-range no-padding min="0" max="5" [(ngModel)]="controle.doce">\n\n            <ion-label class="nome" range-left>Doce: </ion-label>\n\n            <ion-label range-right>{{controle.doce}}</ion-label>\n\n          </ion-range>\n\n        </ion-item>\n\n      </ion-row>\n\n  \n\n      <ion-row  class="roww">\n\n        <ion-item no-lines>\n\n          <ion-range no-padding min="0" max="5" [(ngModel)]="controle.refrigerante">\n\n            <ion-label class="nome" range-left>Refrigerante: </ion-label>\n\n            <ion-label range-right>{{controle.refrigerante}}</ion-label>\n\n          </ion-range>\n\n        </ion-item>\n\n      </ion-row>\n\n  \n\n      <ion-row  class="roww">\n\n        <ion-item>\n\n          <ion-range no-padding min="0" max="5" [(ngModel)]="controle.alcool">\n\n            <ion-label class="nome" range-left>Alcool: </ion-label>\n\n            <ion-label range-right>{{controle.alcool}}</ion-label>\n\n          </ion-range>\n\n        </ion-item>\n\n      </ion-row>\n\n  \n\n      <ion-row  class="roww">\n\n        <ion-item no-lines>\n\n          <ion-range no-padding min="0" max="12" [(ngModel)]="controle.tempoE">\n\n            <ion-label class="nome" range-left>Estudando: </ion-label>\n\n            <ion-label range-right>{{controle.tempoE}}</ion-label>\n\n          </ion-range>\n\n        </ion-item>\n\n      </ion-row>\n\n  \n\n      <ion-row  class="roww">\n\n        <ion-item> \n\n          <ion-range no-padding min="0" max="12" [(ngModel)]="controle.tempoA">\n\n            <ion-label class="nome" range-left>Aulas: </ion-label>\n\n            <ion-label range-right>{{controle.tempoA}}</ion-label>\n\n          </ion-range>\n\n        </ion-item>\n\n      </ion-row>\n\n  \n\n        <ion-grid no-padding justify-content-center>\n\n          <ion-row>\n\n          <ion-col col-4 no-paddig>\n\n            <ion-row justify-content-center>\n\n              <ion-item no-lines>\n\n                <ion-label class="nome2">Viagem:</ion-label>\n\n              </ion-item>\n\n            </ion-row>\n\n            <ion-row justify-content-center>\n\n              <ion-toggle class="toggle" checked="false" [(ngModel)]="controle.viagem" ></ion-toggle>\n\n            </ion-row>\n\n          </ion-col>\n\n  \n\n          <ion-col col-4 no-paddig>\n\n            <ion-row justify-content-center>\n\n              <ion-item no-lines>\n\n                <ion-label class="nome2">Besteira:</ion-label>\n\n              </ion-item>\n\n            </ion-row>\n\n            <ion-row justify-content-center>\n\n              <ion-toggle class="toggle" checked="false" [(ngModel)]="controle.besteira" ></ion-toggle>\n\n            </ion-row>\n\n          </ion-col>\n\n  \n\n  \n\n          <ion-col col-4 no-paddig>\n\n            <ion-row justify-content-center>\n\n              <ion-item no-lines>\n\n                <ion-label class="nome2">Barba:</ion-label>\n\n              </ion-item>\n\n            </ion-row>\n\n            <ion-row justify-content-center>\n\n              <ion-toggle class="toggle" checked="false" [(ngModel)]="controle.barba" ></ion-toggle>\n\n            </ion-row>\n\n          </ion-col>\n\n        \n\n  \n\n          <ion-col col-4 no-paddig>\n\n            <ion-row justify-content-center>\n\n              <ion-item no-lines justify-content-center>\n\n                <ion-label class="nome2">Agradecer: </ion-label>\n\n              </ion-item>\n\n            </ion-row>\n\n            <ion-row justify-content-center>\n\n              <ion-toggle class="toggle" checked="false" [(ngModel)]="controle.agradecimento" ></ion-toggle>\n\n            </ion-row>\n\n          </ion-col>\n\n  \n\n          <ion-col col-4 no-paddig>\n\n            <ion-row justify-content-center>\n\n              <ion-item no-lines justify-content-center>\n\n                <ion-label class="nome2">Meditação: </ion-label>\n\n              </ion-item>\n\n            </ion-row>\n\n            <ion-row justify-content-center>\n\n              <ion-toggle class="toggle" checked="false" [(ngModel)]="controle.meditacao" ></ion-toggle>\n\n            </ion-row>\n\n          </ion-col>\n\n  \n\n          <ion-col col-4 no-paddig>\n\n            <ion-row justify-content-center>\n\n              <ion-item no-lines justify-content-center>\n\n                <ion-label class="nome2">Escrever: </ion-label>\n\n              </ion-item>\n\n            </ion-row>\n\n            <ion-row justify-content-center>\n\n              <ion-toggle class="toggle" checked="false" [(ngModel)]="controle.escrever" ></ion-toggle>\n\n            </ion-row>\n\n          </ion-col>\n\n  \n\n          <ion-col col-4 no-paddig>\n\n            <ion-row justify-content-center>\n\n              <ion-item no-lines justify-content-center>\n\n                <ion-label class="nome2">Raser: </ion-label>\n\n              </ion-item>\n\n            </ion-row>\n\n            <ion-row justify-content-center>\n\n              <ion-toggle class="toggle" checked="false" [(ngModel)]="controle.raser" ></ion-toggle>\n\n            </ion-row>\n\n          </ion-col>\n\n  \n\n          <ion-col col-4 no-paddig>\n\n            <ion-row justify-content-center>\n\n              <ion-item no-lines justify-content-center>\n\n                <ion-label class="nome2">Exercicios: </ion-label>\n\n              </ion-item>\n\n            </ion-row>\n\n            <ion-row justify-content-center>\n\n              <ion-toggle class="toggle" checked="false" [(ngModel)]="controle.exercicios" ></ion-toggle>\n\n            </ion-row>\n\n          </ion-col>\n\n  \n\n          <ion-col col-4 no-paddig>\n\n            <ion-row justify-content-center>\n\n              <ion-item no-lines justify-content-center>\n\n                <ion-label class="nome2">Leitura: </ion-label>\n\n              </ion-item>\n\n            </ion-row>\n\n            <ion-row justify-content-center>\n\n              <ion-toggle class="toggle" checked="false" [(ngModel)]="controle.leitura" ></ion-toggle>\n\n            </ion-row>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n      \n\n      <ion-row>\n\n      <ion-item class="roww2"></ion-item>\n\n        <ion-item no-lines>\n\n          <ion-label class="nome" >Role: </ion-label>\n\n            <ion-select class="input" [(ngModel)]="controle.role" interface="popover" multiple =  True>\n\n              <ion-option *ngFor="let rol of (Roles | async)">{{rol.title}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n      </ion-row>\n\n  \n\n      <ion-row>\n\n        <ion-item no-lines>\n\n            <ion-label class="nome" >Estudos: </ion-label>\n\n              <ion-select class="input" [(ngModel)]="controle.estudos" interface="popover" multiple =  True>\n\n                <ion-option *ngFor="let est of (Estudos | async)">{{est.title}}</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n      </ion-row>\n\n  \n\n      <ion-row>\n\n        <ion-item> \n\n            <ion-label class="nome" >Pessoas: </ion-label>\n\n              <ion-select class="input" [(ngModel)]="controle.pessoas" interface="popover" multiple =  True>\n\n                <ion-option *ngFor="let pes of (Pessoas | async)">{{pes.title}}</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n      </ion-row>\n\n  \n\n      <ion-row>\n\n        <ion-item>\n\n          <ion-label class="nome" no-padding >Resumo: </ion-label>\n\n          <ion-textarea   (click)="roww()" style="color: black; font-size: 13px;" rows="5" autocomplete="on" autocorrect="on" type="text" value="" [(ngModel)]="controle.resumo"></ion-textarea>\n\n        </ion-item>\n\n      </ion-row>\n\n      \n\n      \n\n      <ion-row>\n\n        <ion-item>\n\n          <ion-label class="nome" no-padding >Viagem: </ion-label>\n\n          <ion-input [(ngModel)]="controle.viagemLugar"  (click)="roww()" style="color: black; font-size: 13px;" rows="1" autocomplete="on" autocorrect="on" type="text" value="" ></ion-input>\n\n        </ion-item>\n\n      </ion-row>\n\n  \n\n      <ion-row justify-content-center>\n\n        <button class="btn3" ion-button small round outline color="danger" (click)="Deletar(controle)">Deletar</button>\n\n        <button class="btn3" ion-button small round (click)="Atualizar(controle)">Atualizar</button>\n\n      </ion-row>\n\n      \n\n  \n\n    </ion-grid>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\edicao\edicao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], EdicaoPage);
    return EdicaoPage;
}());

//# sourceMappingURL=edicao.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeTrackerEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TimeTrackerEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TimeTrackerEditPage = /** @class */ (function () {
    function TimeTrackerEditPage(navCtrl, navParams, dbService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.tracker = this.navParams.get('tracker');
    }
    TimeTrackerEditPage.prototype.Atualizar = function (tarefa) {
        var _this = this;
        tarefa.Hfim = Number(tarefa.Hfim);
        tarefa.Hinicio = Number(tarefa.Hinicio);
        tarefa.Mfim = Number(tarefa.Mfim);
        tarefa.Minicio = Number(tarefa.Minicio);
        this.dbService.update('trackers', tarefa).then(function (d) {
            _this.navCtrl.pop();
        });
    };
    TimeTrackerEditPage.prototype.Finalizar = function (tracker) {
        tracker.duracao = (Math.round((Number(tracker.Hfim) + Math.round((Number(tracker.Mfim) / 60) * 10000) / 10000 - Number(tracker.Hinicio) - Math.round((Number(tracker.Minicio) / 60) * 10000) / 10000) * 10000) / 10000);
        this.Atualizar(tracker);
    };
    TimeTrackerEditPage.prototype.Deletar = function (tarefa) {
        var _this = this;
        this.dbService.revome('trackers', tarefa).then(function (d) {
            _this.navCtrl.pop();
        });
    };
    TimeTrackerEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-time-tracker-edit',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\time-tracker-edit\time-tracker-edit.html"*/'<!--\n  Generated template for the TimeTrackerEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editar timetracker</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n    <ion-grid>\n        <ion-row class="roww">\n            <ion-item>\n              <ion-label class="nome" >Dia: </ion-label>\n              <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="tracker.dia"></ion-input>\n            </ion-item>\n          </ion-row>\n    \n          <ion-row class="roww">\n            <ion-item>\n              <ion-label class="nome" >Mes: </ion-label>\n              <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="tracker.mes"></ion-input>\n            </ion-item>\n          </ion-row>\n    \n          <ion-row class="roww">\n            <ion-item>\n              <ion-label class="nome" >Ano: </ion-label>\n              <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="tracker.ano"></ion-input>\n            </ion-item>\n          </ion-row>\n    \n          <ion-row class="roww">\n            <ion-item>\n              <ion-label class="nome" >Total: </ion-label>\n              <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="tracker.total"></ion-input>\n            </ion-item>\n          </ion-row>\n    \n          <ion-row class="roww">\n            <ion-item>\n              <ion-label class="nome" >Parcial: </ion-label>\n              <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="tracker.parcial"></ion-input>\n            </ion-item>\n          </ion-row>\n\n          <ion-row class="roww">\n            <ion-item>\n              <ion-label class="nome" >Hora Inicio: </ion-label>\n              <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="tracker.Hinicio"></ion-input>\n            </ion-item>\n          </ion-row>\n\n\n          <ion-row class="roww">\n            <ion-item>\n              <ion-label class="nome" >Minuto Inicio: </ion-label>\n              <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="tracker.Minicio"></ion-input>\n            </ion-item>\n          </ion-row>\n\n          <ion-row class="roww">\n            <ion-item>\n              <ion-label class="nome" >Hora Final: </ion-label>\n              <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="tracker.Hfim"></ion-input>\n            </ion-item>\n          </ion-row>\n          \n          <ion-row class="roww">\n            <ion-item>\n              <ion-label class="nome" >Minuto Final: </ion-label>\n              <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="tracker.Mfim"></ion-input>\n            </ion-item>\n          </ion-row>\n\n          <ion-row class="roww">\n            <ion-item>\n              <ion-label class="nome" >Duração </ion-label>\n              <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="tracker.duracao"></ion-input>\n            </ion-item>\n          </ion-row>\n\n          <ion-row class="roww">\n            <ion-item>\n              <ion-label class="nome">Nível: </ion-label>\n              <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="tracker.nivel"></ion-input>\n            </ion-item>\n          </ion-row>\n\n          <ion-row class="roww">\n            <ion-item>\n              <ion-label class="nome" >Check: </ion-label>\n              <ion-input text-right type="text" clearInput="true" value="" [(ngModel)]="tracker.check"></ion-input>\n            </ion-item>\n          </ion-row>\n  \n  \n          <ion-row class="roww">\n            <ion-item>\n              <ion-label class="nome" >Tarefa: </ion-label>\n              <ion-input text-right type="text" clearInput="true" value="" [(ngModel)]="tracker.title"></ion-input>\n            </ion-item>\n          </ion-row>\n  \n  \n          <ion-row justify-content-center>\n              <button class="btn3" round ion-button outline color="danger" (click)="Deletar(tracker)">Deletar</button>\n              <button class="btn3" round ion-button  (click)="Atualizar(tracker)">Atualizar</button>\n              <button class="btn3" round ion-button outline (click)="Finalizar(tracker)">Finalizar</button>\n            </ion-row>\n  \n        </ion-grid>\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\time-tracker-edit\time-tracker-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], TimeTrackerEditPage);
    return TimeTrackerEditPage;
}());

//# sourceMappingURL=time-tracker-edit.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeTrackerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__time_tracker_edit_time_tracker_edit__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todos_trackers_todos_trackers__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__configuracoes_configuracoes__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tarefa_edit_tarefa_edit__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the TimeTrackerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TimeTrackerPage = /** @class */ (function () {
    function TimeTrackerPage(toastCtrl, statusBar, alertCtrl, navCtrl, navParams, dbService, actionSheetCtrl) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.statusBar = statusBar;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.tracker = {
            'dia': '',
            'mes': '',
            'ano': '',
            'total': '',
            'parcial': '',
            'title': '',
            'Hinicio': Number(''),
            'Minicio': Number(''),
            'Hfim': 0,
            'Mfim': 0,
            'nivel': 0,
            'duracao': 0,
            'check': false,
        };
        this.tarefa = {
            'dia': '',
            'mes': '',
            'ano': '',
            'total': '',
            'parcial': '',
            'title': '',
            'limite': '',
            'nivel': 0,
            'detalhes': '',
            'check': false,
            'finalT': '',
        };
        this.input = {
            'title': ''
        };
        this.show = false;
        this.trackersList = [{ 'pontosH': 0, 'pontos0': 0 }];
        this.pontos = 0;
        this.VerM = false;
        this.trackersRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/trackers').limitToLast(100).orderByChild("total");
        this.ShowTarefas = this.dbService.getAll('configuracoes/shows', 'nivel');
        this.trackers = this.dbService.getAllEspecificoMsm('trackers', 'total', 50).map(function (b) { return b.reverse(); }).map(function (a) { return a.sort(function (a, b) { return Number(String(b['Hinicio'] + b['Minicio'] / 60)) - Number(String(a['Hinicio'] + a['Minicio'] / 60)); }); });
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.atalhos = this.dbService.getAll('configuracoes/tarefas', 'nivel');
        this.Indicadores = this.Calcula(this.Total());
        this.IndicadoresO = this.Calcula(this.Total() - 1);
        this.tarefas = this.dbService.getAllEspecificoMsm('tarefas', 'total', 10).map(function (b) { return b.reverse(); });
        this.trackerArray = this.CreateArray();
        this.testao = Number(0.4);
        this.hoje = this.Total();
        this.amanha = this.Total3();
        this.ontem = this.Total2();
        this.dias = [{ title: "Hoje", val: this.hoje },
            { title: "Ontem", val: this.ontem },
            { title: "Amanha", val: this.amanha }
        ];
        this.totalM = this.TotalHoras(this.hoje);
        this.totalO = this.TotalHoras(this.ontem);
        this.ngAfterViewInit();
        this.hora = this.GetHora();
        this.contador = this.ContaPendentes();
        this.trackersRef.on('value', function (trackersList) {
            var trackers = [];
            var pontosH = 0;
            var pontosO = 0;
            var valores = [0.5, 1, 2, 4, 6, 4];
            var horasH = [0, 0, 0, 0, 0, 0];
            var horasO = [0, 0, 0, 0, 0, 0];
            trackersList.forEach(function (tracker) {
                var obj;
                obj = tracker.val();
                obj.key = tracker.key;
                if (obj['total'] == _this.hoje) {
                    horasH[(Number(obj['nivel']) + 2)] += Number(obj['duracao']);
                }
                var i = 0;
                var finalH = 0;
                while (i < 6) {
                    finalH += horasH[i] * valores[i];
                    i += 1;
                    pontosH = _this.Arredonda(finalH);
                }
                if (obj['total'] == _this.ontem) {
                    horasO[(Number(obj['nivel']) + 2)] += Number(obj['duracao']);
                }
                i = 0;
                var finalO = 0;
                while (i < 6) {
                    finalO += horasO[i] * valores[i];
                    i += 1;
                    pontosO = _this.Arredonda(finalO);
                }
                obj.pontosH = pontosH;
                obj.pontosO = pontosO;
                trackers.push(obj);
                return false;
            });
            trackers = trackers.reverse();
            _this.trackersList = trackers;
            console.log(_this.trackersList, _this.trackersList[0]['pontos']);
        });
    }
    TimeTrackerPage.prototype.GetHora = function () {
        var a = new Date;
        var b;
        b = a.getHours() + a.getMinutes() / 60;
        b = b / 24;
        console.log(b);
        return (b);
    };
    TimeTrackerPage.prototype.CorIfTrue = function (dado) {
        if (dado == true) {
            return "primary";
        }
        if (dado != true) {
            return "";
        }
    };
    TimeTrackerPage.prototype.ChangeCheckTarefas = function (tarefa) {
        tarefa.check = !tarefa.check;
        this.dbService.update('configuracoes/shows', tarefa);
    };
    TimeTrackerPage.prototype.doRefresh = function (refresher) {
        this.show = !this.show;
        setTimeout(function () {
            refresher.complete();
        }, 50);
    };
    TimeTrackerPage.prototype.atalho = function (atalho) {
        this.tracker.nivel = atalho.nivel;
        this.input.title = atalho.title;
        this.Criacao(this.tracker);
    };
    TimeTrackerPage.prototype.Calcula = function (dia) {
        var array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.trackers.forEach(function (itens) { return itens.forEach(function (item) {
            if (item.title.includes("Dormir") && item.total == dia) {
                array[0] += item.duracao;
            }
            ;
            if (item.title.includes("Banho") && item.total == dia) {
                array[1] += item.duracao;
            }
            ;
            if (item.title.includes("Ler") && item.total == dia) {
                array[2] += item.duracao;
            }
            ;
            if (item.title.includes("Programar") && item.total == dia) {
                array[3] += item.duracao;
            }
            ;
            if (item.title.includes("Frances") && item.total == dia) {
                array[4] += item.duracao;
            }
            ;
            if (item.title.includes("Ingles") && item.total == dia) {
                array[5] += item.duracao;
            }
            ;
            if (item.title.includes("Aula") && item.total == dia) {
                array[6] += item.duracao;
            }
            ;
            if (item.title.includes("Relaxar") && item.total == dia) {
                array[7] += item.duracao;
            }
            ;
            if (item.title.includes("Tempinho") && item.total == dia) {
                array[8] += item.duracao;
            }
            ;
            if (item.title.includes("Dani") && item.total == dia) {
                array[9] += item.duracao;
            }
            ;
            if (item.title.includes("Estudar") && item.total == dia) {
                array[10] += item.duracao;
            }
            ;
        }); });
        return array;
    };
    TimeTrackerPage.prototype.Arredonda = function (val) {
        var b;
        b = (Math.round(val * 100) / 100);
        return b;
    };
    TimeTrackerPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.teste(_this.totalM);
            _this.teste2(_this.totalO);
            _this.pontos = _this.trackersList[0]['pontos'];
        }, 1500);
    };
    TimeTrackerPage.prototype.teste = function (array) {
        var a1 = (String(array[0] / 0.24) + '%');
        var a2 = (String((array[0] + array[1]) / 0.24) + '%');
        var a3 = (String((array[0] + array[1] + array[2]) / 0.24) + '%');
        var a4 = (String((array[0] + array[1] + array[2] + array[3]) / 0.24) + '%');
        var a5 = (String((array[0] + array[1] + array[2] + array[3] + array[4]) / 0.24) + '%');
        var a6 = (String((array[0] + array[1] + array[2] + array[3] + array[4] + array[5]) / 0.24) + '%');
        var a7 = String((this.GetHora()) * 100 + '%');
        console.log(a7);
        document.getElementById("teste1").style.width = a1;
        document.getElementById("teste2").style.width = a2;
        document.getElementById("teste3").style.width = a3;
        document.getElementById("teste4").style.width = a4;
        document.getElementById("teste5").style.width = a5;
        document.getElementById("teste6").style.width = a6;
        document.getElementById("testeH").style.width = a7;
    };
    TimeTrackerPage.prototype.teste2 = function (array) {
        var a1 = (String(array[0] / 0.24) + '%');
        var a2 = (String((array[0] + array[1]) / 0.24) + '%');
        var a3 = (String((array[0] + array[1] + array[2]) / 0.24) + '%');
        var a4 = (String((array[0] + array[1] + array[2] + array[3]) / 0.24) + '%');
        var a5 = (String((array[0] + array[1] + array[2] + array[3] + array[4]) / 0.24) + '%');
        var a6 = (String((array[0] + array[1] + array[2] + array[3] + array[4] + array[5]) / 0.24) + '%');
        document.getElementById("teste7").style.width = a1;
        document.getElementById("teste8").style.width = a2;
        document.getElementById("teste9").style.width = a3;
        document.getElementById("teste10").style.width = a4;
        document.getElementById("teste11").style.width = a5;
        document.getElementById("teste12").style.width = a6;
    };
    TimeTrackerPage.prototype.TotalHoras = function (total) {
        var array = [0, 0, 0, 0, 0, 0];
        this.trackers.forEach(function (itens) { itens.forEach(function (item) { if (item.total == total && item.duracao > 0) {
            array[(Number(item.nivel) + 2)] += Number(item.duracao);
        } }); });
        return array;
    };
    TimeTrackerPage.prototype.Cor = function (n) {
        if (n == -2) {
            return 'dangerM';
        }
        if (n == -1) {
            return 'danger';
        }
        if (n == 0) {
            return 'dark';
        }
        if (n == 1) {
            return 'primary';
        }
        if (n == 2) {
            return 'primaryM';
        }
        if (n == 3) {
            return 'verde';
        }
    };
    TimeTrackerPage.prototype.Data = function () {
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        var array = [dia, mes, ano];
        return array;
    };
    TimeTrackerPage.prototype.Criacao = function (tarefa) {
        var array = this.Data();
        this.tracker.title = this.input.title;
        this.tracker.dia = String(array[0]);
        this.tracker.mes = String(array[1]);
        this.tracker.ano = String(array[2]);
        this.tracker.total = String(this.Total());
        this.tracker.parcial = String(this.Parcial());
        this.dbService.save('trackers', tarefa);
        this.input.title = "";
        this.tracker.Hinicio = Number('');
        this.tracker.Minicio = Number('');
    };
    TimeTrackerPage.prototype.CriacaoTarefa = function (tarefa) {
        var array = this.Data();
        this.tarefa.title = this.input.title;
        this.tarefa.dia = String(array[0]);
        this.tarefa.mes = String(array[1]);
        this.tarefa.ano = String(array[2]);
        this.tarefa.total = String(this.Total());
        this.tarefa.parcial = String(this.Parcial());
        this.dbService.save('tarefas', tarefa);
        this.input.title = "";
    };
    TimeTrackerPage.prototype.Total = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia);
        return total;
    };
    TimeTrackerPage.prototype.Total2 = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia - 1);
        return total;
    };
    TimeTrackerPage.prototype.Total3 = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia + 1);
        return total;
    };
    TimeTrackerPage.prototype.Parcial = function () {
        var total;
        var data = new Date();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 100 + (mes + 1));
        return total;
    };
    TimeTrackerPage.prototype.Ontem = function (tarefa) {
        var array = this.Data();
        this.tracker.title = this.input.title;
        this.tracker.dia = String(array[0] - 1);
        this.tracker.mes = String(array[1]);
        this.tracker.ano = String(array[2]);
        this.tracker.total = String(this.Total2());
        this.tracker.parcial = String(this.Parcial());
        this.dbService.save('trackers', tarefa);
        this.input.title = "";
    };
    TimeTrackerPage.prototype.Amanha = function (tarefa) {
        var array = this.Data();
        this.tracker.title = this.input.title;
        this.tracker.dia = String(array[0] + 1);
        this.tracker.mes = String(array[1]);
        this.tracker.ano = String(array[2]);
        this.tracker.total = String(this.Total3());
        this.tracker.parcial = String(this.Parcial());
        this.dbService.save('trackers', tarefa);
        this.input.title = "";
    };
    TimeTrackerPage.prototype.goToEdit = function (itens) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__time_tracker_edit_time_tracker_edit__["a" /* TimeTrackerEditPage */], { 'tracker': itens });
    };
    TimeTrackerPage.prototype.goToEditT = function (itens) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__tarefa_edit_tarefa_edit__["a" /* TarefaEditPage */], { 'tarefa': itens });
    };
    TimeTrackerPage.prototype.goToTotal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__todos_trackers_todos_trackers__["a" /* TodosTrackersPage */]);
    };
    TimeTrackerPage.prototype.Atualizar = function (tarefas) {
        this.dbService.update('trackers', tarefas);
        this.contador = this.ContaPendentes();
        this.AtualizaGraf();
    };
    TimeTrackerPage.prototype.AtualizarT = function (tarefas) {
        tarefas.finalT = this.hoje;
        this.dbService.update('tarefas', tarefas);
        this.contador = this.ContaPendentes();
    };
    TimeTrackerPage.prototype.Deletar = function (tarefas) {
        this.dbService.revome('trackers', tarefas);
        this.contador = this.ContaPendentes();
        this.AtualizaGraf();
    };
    TimeTrackerPage.prototype.DeletarT = function (tarefas) {
        this.dbService.revome('tarefas', tarefas);
        this.contador = this.ContaPendentes();
    };
    TimeTrackerPage.prototype.atualiza = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    TimeTrackerPage.prototype.RetornaDia = function (dia) {
        if (dia == "Hoje") {
            return (this.hoje);
        }
        if (dia == "Amanha") {
            return (this.amanha);
        }
        if (dia == "Ontem") {
            return (this.ontem);
        }
    };
    TimeTrackerPage.prototype.RetornaH = function (duracao) {
        if (duracao == 0) {
            return (" ");
        }
        else {
            var min2;
            var inteiro = parseInt(duracao);
            var min = Math.round((duracao - inteiro) * 60);
            min2 = String(min);
            if (min < 10) {
                min2 = String("0" + min);
            }
            return (inteiro + "h" + min2);
        }
    };
    TimeTrackerPage.prototype.Comecar = function (track) {
        if (track.Minicio != '' && track.Hfim == '') {
            track.Hfim = this.RetornaHora();
            track.Mfim = Math.round(this.RetornaMin() * 100) / 100;
            track.check = true;
            track.duracao = (Math.round((Number(track.Hfim) + Math.round((Number(track.Mfim) / 60) * 10000) / 10000 - Number(track.Hinicio) - Math.round((Number(track.Minicio) / 60) * 10000) / 10000) * 10000) / 10000);
            if (Number(track.duracao) <= 0) {
                track.duracao = 24 - Number(track.Hinicio) - Number(track.Minicio) / 60;
            }
        }
        if (track.Minicio == '') {
            track.Hinicio = this.RetornaHora();
            track.Minicio = Math.round(this.RetornaMin() * 100) / 100;
        }
        this.dbService.update('trackers', track);
        this.Indicadores = this.Calcula(this.Total());
    };
    TimeTrackerPage.prototype.RetornaHora = function () {
        var data = new Date();
        var hora = data.getHours();
        return (hora);
    };
    TimeTrackerPage.prototype.RetornaMin = function () {
        var data = new Date();
        var min = data.getMinutes();
        var segundo = data.getSeconds();
        return (min + segundo / 60);
    };
    TimeTrackerPage.prototype.Icone = function (track) {
        if (track.Minicio != '' && track.Mfim != '') {
            return ('checkmark-circle-outline');
        }
        if (track.Minicio == '') {
            return ('play');
        }
        if (track.Minicio != '' && track.Mfim == '') {
            return ('pause');
        }
    };
    TimeTrackerPage.prototype.AlteraNivel = function (track, Nivel) {
        track.nivel = Nivel;
        this.dbService.update('trackers', track);
    };
    TimeTrackerPage.prototype.Nivel = function (Nivel) {
        this.tracker.nivel = Nivel;
    };
    TimeTrackerPage.prototype.goToSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__configuracoes_configuracoes__["a" /* ConfiguracoesPage */]);
    };
    TimeTrackerPage.prototype.AlterarNome = function (track, nome) {
        track.title = nome;
        this.dbService.update('trackers', track);
    };
    TimeTrackerPage.prototype.CriaNovo = function (track) {
        this.tracker.Hinicio = track.Hfim;
        this.tracker.Minicio = track.Mfim;
        this.tracker.total = track.total;
        this.tracker.dia = track.dia;
        if (this.tracker.Mfim == 0) {
            this.tracker.duracao = 0;
        }
        this.Criacao2(this.tracker);
    };
    TimeTrackerPage.prototype.Criacao2 = function (tarefa) {
        var array = this.Data();
        this.tracker.title = this.input.title;
        this.tracker.mes = String(array[1]);
        this.tracker.ano = String(array[2]);
        this.tracker.parcial = String(this.Parcial());
        this.dbService.save('trackers', tarefa);
        this.input.title = "";
        this.tracker.Hinicio = Number('');
        this.tracker.Minicio = Number('');
        this.tracker.Mfim = 0;
        this.tracker.Hfim = 0;
        this.tracker.duracao = 0;
    };
    TimeTrackerPage.prototype.VerMais = function (item) {
        if (item == false) {
            this.VerM = true;
            this.tarefas = this.dbService.getAllEspecificoMsm('tarefas', 'total', 1000).map(function (b) { return b.reverse(); });
        }
        else {
            this.VerM = false;
            this.tarefas = this.dbService.getAllEspecificoMsm('tarefas', 'total', 10).map(function (b) { return b.reverse(); });
        }
    };
    TimeTrackerPage.prototype.ValorVerMais = function (item) {
        if (item == false) {
            return ("Ver mais");
        }
        if (item == true) {
            return ("Ver menos");
        }
    };
    TimeTrackerPage.prototype.ContaPendentes = function () {
        var contador = [0];
        this.tarefas.forEach(function (itens) { return itens.forEach(function (item) { if (item.check == false) {
            contador[0] += 1;
        } }); });
        return contador;
    };
    TimeTrackerPage.prototype.Pontua = function (total) {
        var valores = [0.5, 1, 2, 4, 6, 4];
        var horas = [0, 0, 0, 0, 0, 0];
        this.trackerArray.forEach(function (item) { if (item['total'] == total) {
            horas[(Number(item['nivel']) + 2)] += Number(item['duracao']);
        } });
        var i = 0;
        var final = 0;
        while (i < 6) {
            final += horas[i] * valores[i];
            i += 1;
        }
        return (final);
    };
    TimeTrackerPage.prototype.CreateArray = function () {
        var array = [];
        this.trackers.forEach(function (element) { element.forEach(function (item) { array.push(item); }); });
        return array;
    };
    TimeTrackerPage.prototype.Arredonda2 = function (val, casas) {
        var b;
        b = (Math.round(val * Math.pow(10, casas)) / (Math.pow(10, casas)));
        return b;
    };
    TimeTrackerPage.prototype.ShowDetalhe = function (Texto) {
        var toast = this.toastCtrl.create({
            message: Texto,
            duration: 3000
        });
        toast.present();
    };
    TimeTrackerPage.prototype.Opcoes = function (track) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Opções',
            buttons: [
                {
                    text: 'Copiar',
                    handler: function () {
                        _this.input.title = track.title;
                        _this.tracker.nivel = track.nivel;
                        _this.Criacao(_this.tracker);
                    }
                },
                {
                    text: 'Deletar',
                    handler: function () {
                        _this.Deletar(track);
                    }
                }, {
                    text: 'Limpar final',
                    handler: function () {
                        track.Hfim = '';
                        track.Mfim = '';
                        _this.dbService.update('trackers', track);
                    }
                }, {
                    text: "Alterar Horários",
                    handler: function () { _this.AlteraHora(track); }
                }, {
                    text: 'Limpar tudo',
                    handler: function () {
                        track.Hfim = '';
                        track.Mfim = '';
                        track.Hinicio = '';
                        track.Minicio = '';
                        track.duracao = '';
                        _this.dbService.update('trackers', track);
                    }
                }, {
                    text: 'Alterar Nível',
                    handler: function () {
                        _this.AlteraNivelradio(track);
                    }
                }, {
                    text: 'Relaxar',
                    handler: function () {
                        _this.AlteraNivel(track, "-2");
                        _this.AlterarNome(track, 'Relaxar');
                    }
                }, {
                    text: 'Criar Novo',
                    handler: function () {
                        _this.PromptCriarNovo(track);
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    TimeTrackerPage.prototype.OpcoesT = function (track) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Opções',
            buttons: [
                {
                    text: 'Criar Tracker',
                    handler: function () {
                        _this.input.title = track.title;
                        _this.tracker.nivel = track.nivel;
                        _this.Criacao(_this.tracker);
                    }
                },
                {
                    text: 'Deletar',
                    handler: function () {
                        _this.DeletarT(track);
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    TimeTrackerPage.prototype.PromptCriarNovo = function (track) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Novo tracker',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Nome'
                }, {
                    name: 'nivel',
                    placeholder: 'Nível',
                    type: 'number'
                }, {
                    name: 'hora2',
                    placeholder: ('Final'),
                    type: 'number',
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Relaxar',
                    handler: function (data) {
                        _this.input.title = "Relaxar", _this.tracker.nivel = -2;
                        _this.CriaNovo(track);
                    }
                },
                {
                    text: 'Salvar',
                    handler: function (data) {
                        if (data.hora2 > 0) {
                            _this.tracker.Hfim = Number(data.hora2.split('.')[0]);
                            _this.tracker.Mfim = Number(data.hora2.split('.')[1]);
                        }
                        if (track.Mfim > 0) {
                            var dura = String(Math.round((Number(_this.tracker.Hfim) + Math.round((Number(_this.tracker.Mfim) / 60) * 10000) / 10000 - Number(track.Hfim) - Math.round((Number(track.Mfim) / 60) * 10000) / 10000) * 10000) / 10000);
                            console.log(dura, "duracao", track.Hfim, track.Mfim, track.Hinicio, track.Minicio);
                            _this.tracker.duracao = Number(dura);
                            _this.tracker.check = true;
                        }
                        _this.input.title = data.title, _this.tracker.nivel = data.nivel;
                        _this.CriaNovo(track);
                    }
                }
            ]
        });
        prompt.present();
    };
    TimeTrackerPage.prototype.Atual = function (track) {
        if (track.Minicio != '' && track.Mfim == '') {
            var Hfim = this.RetornaHora();
            var Mfim = Math.round(this.RetornaMin() * 100) / 100;
            var dura = (Math.round((Number(Hfim) + Math.round((Number(Mfim) / 60) * 10000) / 10000 - Number(track.Hinicio) - Math.round((Number(track.Minicio) / 60) * 10000) / 10000) * 10000) / 10000);
            return (dura);
        }
        if (track.Duracao != '') {
            return (" ");
        }
    };
    TimeTrackerPage.prototype.AtualizaGraf = function () {
        var _this = this;
        setTimeout(function () {
            _this.Indicadores = _this.Calcula(_this.Total());
            _this.IndicadoresO = _this.Calcula(_this.Total() - 1);
            _this.totalM = _this.TotalHoras(_this.hoje);
            _this.totalO = _this.TotalHoras(_this.ontem);
            _this.ngAfterViewInit();
        }, 50);
    };
    TimeTrackerPage.prototype.AlteraNivelradio = function (track) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Alterando Nível',
            message: 'Selecione a opção',
            inputs: [
                {
                    type: 'radio',
                    label: 'Nível 2',
                    value: '2'
                },
                {
                    type: 'radio',
                    label: 'Nível 1',
                    value: '1'
                },
                {
                    type: 'radio',
                    label: 'Nível 0',
                    value: '0'
                },
                {
                    type: 'radio',
                    label: 'Nível -1',
                    value: '-1'
                },
                {
                    type: 'radio',
                    label: 'Nível -2',
                    value: '-2'
                },
                {
                    type: 'radio',
                    label: 'Necessario',
                    value: '3'
                }
            ],
            buttons: [
                {
                    text: "Cancel",
                    handler: function (data) {
                        console.log("cancel clicked");
                    }
                },
                {
                    text: "Salvar",
                    handler: function (data) {
                        track.nivel = data;
                        _this.dbService.update('trackers', track);
                        _this.AtualizaGraf();
                    }
                }
            ]
        });
        prompt.present();
    };
    TimeTrackerPage.prototype.AlteraHora = function (track) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Hora',
            message: "Entre com a hora",
            inputs: [
                {
                    name: 'hora1',
                    placeholder: (track.Hinicio + "." + track.Minicio),
                    type: 'number',
                },
                {
                    name: 'hora2',
                    placeholder: (track.Hfim + ',' + track.Mfim),
                    type: 'number',
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        if (data.hora1 > 0) {
                            track.Hinicio = Number(data.hora1.split('.')[0]);
                            track.Minicio = Number(data.hora1.split('.')[1]);
                        }
                        if (data.hora2 > 0) {
                            track.Hfim = Number(data.hora2.split('.')[0]);
                            track.Mfim = Number(data.hora2.split('.')[1]);
                        }
                        if (track.Mfim > 0) {
                            var dura = String(Math.round((Number(track.Hfim) + Math.round((Number(track.Mfim) / 60) * 10000) / 10000 - Number(track.Hinicio) - Math.round((Number(track.Minicio) / 60) * 10000) / 10000) * 10000) / 10000);
                            track.duracao = dura;
                            track.check = true;
                        }
                        _this.dbService.update('trackers', track);
                        _this.AtualizaGraf();
                    }
                }
            ]
        });
        prompt.present();
    };
    TimeTrackerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-time-tracker',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\time-tracker\time-tracker.html"*/'<!--\n\n  Generated template for the TimeTrackerPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--HEADER----------------------------------------------------------------------------------------------------------------------------------------------------------------------->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Tarefas</ion-title>\n\n    <ion-buttons end *ngFor="let f of (ShowTarefas | async) ">\n\n        <button ion-button icon-only color="{{CorIfTrue(f.check)}}" (click)="ChangeCheckTarefas(f)">\n\n          <ion-icon name="list-box"></ion-icon>\n\n          <ion-badge *ngIf="contador[0] > 0" id="notifications-badge" color="danger">{{contador[0]}}</ion-badge>\n\n        </button>\n\n      <button ion-button icon-only (click)="atualiza()">\n\n        <ion-icon name="sync"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only (click)="goToTotal()">\n\n        <ion-icon name="calendar"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only (click)="goToSettings()">\n\n        <ion-icon name="settings"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!--ADICAO-->\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row class="roww">\n\n        <ion-item no-lines>\n\n          <ion-label class="nome" >Tracker: </ion-label>\n\n          <ion-input text-right type="text"  value="" [(ngModel)]="input.title" (keyup.enter)="Criacao(tracker)"></ion-input>\n\n        </ion-item>\n\n     \n\n    </ion-row>\n\n\n\n    <ion-row class="roww">\n\n      <ion-col col-11>\n\n        <ion-item no-lines>\n\n            <ion-range  min="-2" max="2"  snaps color="{{Cor(tracker.nivel)}}" [(ngModel)]="tracker.nivel">\n\n              <ion-icon range-left color="{{Cor(tracker.nivel)}}"  small name="close-circle"></ion-icon>\n\n              <ion-icon range-right  color="{{Cor(tracker.nivel)}}"  small name="checkmark-circle"></ion-icon>\n\n            </ion-range>\n\n          </ion-item>\n\n      </ion-col>\n\n      <ion-col col-1 >\n\n        <button ion-button icon-start round clear no-padding (click)="Nivel(3)">\n\n          <ion-icon color="verde" name="clipboard" (click)="Nivel(3)"> </ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n<!--bOTOES ADICAO-------------------------------------------------------------------------------------------------------------------------------------->\n\n\n\n  <ion-row justify-content-center >\n\n    <button class="btn2" ion-button outline round small (click)="Amanha(tracker)">Amanhã</button>\n\n    <button class="btn3" ion-button  round small  (click)="Criacao(tracker)">Adicionar</button>\n\n    <button class="btn2" ion-button outline  round small (click)="Ontem(tracker)">Ontem</button>\n\n  </ion-row>\n\n  <div *ngFor="let f of (ShowTarefas | async) ">\n\n    <ion-row justify-content-center *ngIf="f.check == true">\n\n        <button class="btn3" ion-button  clear round small  (click)="CriacaoTarefa(tarefa)">Tarefa</button>\n\n    </ion-row>\n\n  </div>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)"></ion-refresher>\n\n\n\n  <!--ATALHOS-------------------------------------------------------------------------------------------------------------------------------------->\n\n  <div *ngIf = "show == true">\n\n    <ion-grid no-padding>\n\n      <ion-row justify-content-center>\n\n        <ion-col col-3 col-xl-1 *ngFor="let a of (atalhos | async)" justify-content-center>\n\n          <button class="btn4" type="submit" ion-button round small color="{{Cor(a.nivel)}}" (click)=atalho(a)>{{a.title}}</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <!-------------------------------------------------------------------TAREFAS-------------------------------------------------------------------->\n\n  <div *ngFor="let f of (ShowTarefas | async) ">\n\n    <ion-card no-padding *ngIf="f.check == true">\n\n      <ion-card-header class="item">Tarefas</ion-card-header>\n\n      <ion-list>\n\n        <div *ngFor ="let f of (tarefas | async)">\n\n          <div *ngIf = "f.check == false">\n\n            <ion-row class="item">\n\n                  <ion-col col-1>\n\n                    <ion-item class ="item" no-padding>\n\n                      <ion-checkbox  [(ngModel)]="f.check" color="dark" checked="f.check" (click) ="AtualizarT(f)" no-padding></ion-checkbox>\n\n                    </ion-item>\n\n                  </ion-col>\n\n                  <ion-col col-10>\n\n                    <ion-item  (click)="goToEditT(f)" >\n\n                      <ion-label >{{f.title}}</ion-label>\n\n                      <ion-note item-end><p>{{f.limite}}</p></ion-note>\n\n                      <ion-icon (press)="ShowDetalhe(f.detalhes)" *ngIf="f.detalhes" item-end name="bookmark"></ion-icon>\n\n                    </ion-item>\n\n                  </ion-col>\n\n                  <ion-col col-1 no-padding >\n\n                    <button ion-button style="margin-top:10px"  icon-start full round clear color="dark" (click)="OpcoesT(f)" padding>\n\n                      <ion-icon item-end name="more"></ion-icon>\n\n                    </button>\n\n                  </ion-col>\n\n              \n\n            </ion-row>\n\n          </div>\n\n        </div>\n\n        <div *ngFor ="let f of (tarefas | async)">\n\n          <div *ngIf = "f.check != false">\n\n            <ion-row class="item">\n\n              <ion-col col-1>\n\n                <ion-item class ="item" no-padding>\n\n                  <ion-checkbox  [(ngModel)]="f.check" color="dark" checked="f.check" (click) ="AtualizarT(f)" no-padding></ion-checkbox>\n\n                </ion-item>\n\n              </ion-col>\n\n              <ion-col col-10>\n\n                <ion-item  (click)="goToEditT(f)" >\n\n                  <ion-label >{{f.title}}</ion-label>\n\n                  <ion-note item-end><p>{{f.duracao}}</p></ion-note>\n\n                </ion-item>\n\n              </ion-col>\n\n              <ion-col col-1 no-padding >\n\n                <button ion-button icon-start full round clear color="dark" (click)="OpcoesT(f)" no-padding>\n\n                  <ion-icon name="more"></ion-icon>\n\n                </button>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n        </div> \n\n        <ion-row>\n\n          <button ion-button clear (click)="VerMais(VerM)">\n\n            {{ValorVerMais(VerM)}}\n\n          </button>\n\n        </ion-row> \n\n        </ion-list>\n\n    </ion-card>\n\n  </div>\n\n    \n\n<!----------------------------------------------------------------HOJE E ONTEM---------------------------------------------------------------------------------------------->\n\n<ion-grid>\n\n<ion-row>\n\n<ion-col col-12 col-xl-6  *ngFor="let d of dias">   \n\n<ion-card >\n\n    <ion-card-header  class="item">{{d.title}}: \n\n      <ion-badge *ngIf=\'d.title=="Hoje"\' (click)="AtualizaPontua(d.val)"> {{trackersList[0][\'pontosH\']}} </ion-badge>\n\n      <ion-badge *ngIf=\'d.title=="Ontem"\' (click)="AtualizaPontua(d.val)"> {{trackersList[0][\'pontosO\']}} </ion-badge>\n\n    </ion-card-header>\n\n    <ion-list>\n\n      <div *ngFor="let f of (trackers | async) ">\n\n        <ion-row *ngIf=\'f.total == RetornaDia(d.title) && f.Hinicio == "" && f.Minicio == ""\'class="item">\n\n        <ion-col col-1>\n\n          <ion-item class="item" no-padding>\n\n            <ion-checkbox  [(ngModel)]="f.check" color="dark" checked="f.check" (click) ="Atualizar(f)" no-padding></ion-checkbox>    \n\n          </ion-item>\n\n        </ion-col>\n\n          <ion-col col-1>\n\n           <button ion-button icon-start full class="pad" round clear color="{{Cor(f.nivel)}}" (click)="Comecar(f)" no-padding>\n\n              <ion-icon name="{{Icone(f)}}"> </ion-icon>\n\n            </button>\n\n          </ion-col>\n\n            <ion-col col-9>\n\n              <ion-item  (click)="goToEdit(f)" >\n\n                <ion-label >{{f.title}}</ion-label>\n\n                <ion-note item-end><p>{{RetornaH(f.duracao)}}</p></ion-note>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1 >\n\n              <button ion-button icon-start full round clear color="dark" (click)="Opcoes(f)" no-padding>\n\n                <ion-icon name="more"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n         </ion-row>\n\n      </div>\n\n         \n\n      <div *ngFor="let f of (trackers | async) ">\n\n      <ion-row *ngIf=\'f.total == RetornaDia(d.title) && f.Minicio != ""\'class="item">\n\n        <ion-col col-1>\n\n          <ion-item class="item" no-padding>\n\n            <ion-checkbox  [(ngModel)]="f.check" color="dark" checked="f.check" (click) ="Atualizar(f)" no-padding></ion-checkbox>    \n\n          </ion-item>\n\n        </ion-col>\n\n          <ion-col col-1>\n\n           <button ion-button icon-start full class="pad" round clear color="{{Cor(f.nivel)}}" (click)="Comecar(f)" no-padding>\n\n              <ion-icon name="{{Icone(f)}}"> </ion-icon>\n\n            </button>\n\n          </ion-col>\n\n            <ion-col col-9>\n\n              <ion-item  (click)="goToEdit(f)" >\n\n                <ion-label >{{f.title}}</ion-label>\n\n                <p class="corEnd" item-end>{{RetornaH(Atual(f))}}</p>\n\n                <ion-note item-end><p>{{RetornaH(f.duracao)}}</p></ion-note>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1 >\n\n              <button ion-button icon-start full round clear color="dark" (click)="Opcoes(f)" no-padding>\n\n                <ion-icon name="more"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n         </ion-row>\n\n      </div>\n\n    </ion-list>\n\n    \n\n\n\n    <div id="container">\n\n    <h2 padding  *ngIf="d.title == \'Hoje\' || d.title ==\'Ontem\' " (click)="AtualizaGraf()" >Progresso:</h2>\n\n    <div class="progress" *ngIf="d.title == \'Hoje\'" (click)=teste(totalM)>\n\n        <div class="determinate7" style="width: 0%" id="testeH" ></div>\n\n      <div class="determinate1" style="width: 0%" id="teste6" ></div>\n\n      <div class="determinate2" style="width: 0%" id="teste5" ></div>\n\n      <div class="determinate3" style="width: 0%" id="teste4" ></div>\n\n      <div class="determinate4" style="width: 0%" id="teste3" ></div>\n\n      <div class="determinate5" style="width: testao" id="teste2" ></div>\n\n      <div class="determinate6" style="width: 0%" id="teste1" ></div>\n\n      \n\n    </div>\n\n\n\n    <div class="progress2" *ngIf="d.title == \'Ontem\'" (click)=teste(totalM)>\n\n      <div class="determinate1" style="width: 0%" id="teste12" ></div>\n\n      <div class="determinate2" style="width: 0%" id="teste11" ></div>\n\n      <div class="determinate3" style="width: 0%" id="teste10" ></div>\n\n      <div class="determinate4" style="width: 0%" id="teste9" ></div>\n\n      <div class="determinate5" style="width: 0%" id="teste8" ></div>\n\n      <div class="determinate6" style="width: 0%" id="teste7" ></div>\n\n    </div>\n\n    \n\n    <div class="alinharB" *ngIf="d.title == \'Hoje\'">\n\n      <ion-row> \n\n        <ion-col col-7>\n\n          <h3 padding>Tarefas Cotidianas:\n\n            <br>Dormir    - {{RetornaH(Arredonda(Indicadores[0]))}}\n\n            <br>Banho     - {{RetornaH(Arredonda(Indicadores[1]))}}\n\n            <br>Ler       - {{RetornaH(Arredonda(Indicadores[2]))}}\n\n            <br>Programar - {{RetornaH(Arredonda(Indicadores[3]))}}\n\n            <br>Estudar    -  {{RetornaH(Arredonda(Indicadores[10]))}}\n\n            <br>Frances    -  {{RetornaH(Arredonda(Indicadores[4]))}}\n\n          </h3>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <h3>\n\n            <br>\n\n            <br>Ingles    -  {{RetornaH(Arredonda(Indicadores[5]))}}\n\n            <br>Aulas     - {{RetornaH(Arredonda(Indicadores[6]))}}\n\n            <br>Relaxar   - {{RetornaH(Arredonda(Indicadores[7]))}}\n\n            <br>Tempinho  - {{RetornaH(Arredonda(Indicadores[8]))}}\n\n            <br>Dani      - {{RetornaH(Arredonda(Indicadores[9]))}}\n\n          </h3>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n\n\n\n\n    <div *ngIf="d.title == \'Ontem\'">\n\n      <ion-row>\n\n        <ion-col col-7>\n\n          <h3 class="h3">Tarefas Cotidianas:\n\n            <br>Dormir    - {{RetornaH(Arredonda(IndicadoresO[0]))}}\n\n            <br>Banho     - {{RetornaH(Arredonda(IndicadoresO[1]))}}\n\n            <br>Ler       - {{RetornaH(Arredonda(IndicadoresO[2]))}}\n\n            <br>Programar - {{RetornaH(Arredonda(IndicadoresO[3]))}}\n\n            <br>Estudar    -  {{RetornaH(Arredonda(IndicadoresO[10]))}}\n\n            <br>Frances    -  {{RetornaH(Arredonda(IndicadoresO[4]))}}\n\n          </h3>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <h3>\n\n            <br>\n\n            <br>Ingles    -  {{RetornaH(Arredonda(IndicadoresO[5]))}}\n\n            <br>Aulas     - {{RetornaH(Arredonda(IndicadoresO[6]))}}\n\n            <br>Relaxar   - {{RetornaH(Arredonda(IndicadoresO[7]))}}\n\n            <br>Tempinho  - {{RetornaH(Arredonda(IndicadoresO[8]))}}\n\n            <br>Dani      - {{RetornaH(Arredonda(IndicadoresO[9]))}}\n\n          </h3>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n    </div>\n\n  </ion-card>\n\n </ion-col>\n\n </ion-row>\n\n </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\time-tracker\time-tracker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], TimeTrackerPage);
    return TimeTrackerPage;
}());

//# sourceMappingURL=time-tracker.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseServiceProvider = /** @class */ (function () {
    function FirebaseServiceProvider(db) {
        this.db = db;
    }
    FirebaseServiceProvider.prototype.getAll = function (dado, parametro) {
        return this.db.list(dado, function (ref) { return ref.orderByChild(parametro); }).snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data.map(function (d) { return (__assign({ key: d.key }, d.payload.val())); });
        }));
    };
    FirebaseServiceProvider.prototype.getAllEspecifico = function (dado, parametro, especifico) {
        return this.db.list(dado, function (ref) { return ref.orderByChild(parametro).equalTo(especifico); }).snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data.map(function (d) { return (__assign({ key: d.key }, d.payload.val())); });
        }));
    };
    FirebaseServiceProvider.prototype.getAll2 = function (dado) {
        return this.db.list(dado, function (ref) { return ref.orderByChild('total'); }).snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data.map(function (d) { return (__assign({ key: d.key }, d.payload.val())); });
        }));
    };
    FirebaseServiceProvider.prototype.getAllEspecificoMsm = function (dado, parametro, quantidade) {
        return this.db.list(dado, function (ref) { return ref.orderByChild(parametro).limitToLast(quantidade); }).snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data.map(function (d) { return (__assign({ key: d.key }, d.payload.val())); });
        }));
    };
    FirebaseServiceProvider.prototype.save = function (dado, compras) {
        return this.db.list(dado)
            .push(compras)
            .then(function (r) { return console.log(r); });
    };
    FirebaseServiceProvider.prototype.update = function (dado, compras) {
        return this.db.list(dado)
            .update(compras.key, compras)
            .then(function (r) { return console.log(r); });
    };
    FirebaseServiceProvider.prototype.revome = function (dado, compras) {
        return this.db.list(dado)
            .remove(compras.key)
            .then(function (r) { return console.log(r); });
    };
    FirebaseServiceProvider.prototype.getArray = function (dado) {
        var teste = this.getAll2(dado);
        var array = [];
        teste.forEach(function (dado) { return dado.forEach(function (dado2) { return array.push(dado2); }); });
        return (array);
    };
    FirebaseServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseServiceProvider);
    return FirebaseServiceProvider;
}());

//# sourceMappingURL=firebase-service.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdicionarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AdicionarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdicionarPage = /** @class */ (function () {
    function AdicionarPage(navCtrl, navParams, dbService, statusBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.statusBar = statusBar;
        this.remedios = [];
        this.dentes = [];
        this.atividades = [];
        this.pessoas = [];
        this.role = [];
        this.estudos = [];
        this.controle = {
            'dia': '',
            'mes': '',
            'ano': '',
            'remedios': '',
            'dentes': '',
            'atividades': '',
            'passos': '0',
            'peso': '0',
            'andando': '0',
            'correndo': '0',
            'tempinho': '0',
            'tempinhoQ': '0',
            'UHU': '0',
            'cafe': '0',
            'lancheM': '0',
            'almoco': '0',
            'lancheT': '0',
            'jantar': '0',
            'lancheN': '0',
            'doce': '0',
            'refrigerante': '0',
            'alcool': '0',
            'estudos': '',
            'tempoE': '0',
            'tempoA': '0',
            'role': '',
            'pessoas': '',
            'resumo': '',
            'viagemLugar': '',
            'barba': false,
            'agradecimento': false,
            'meditacao': false,
            'escrever': false,
            'raser': false,
            'leitura': false,
            'besteira': false,
            'viagem': false,
            'exercicios': false,
            'total': '',
            'parcial': '',
        };
        this.DataO = new Date().toISOString();
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.rows = 5;
        this.Remedios = this.dbService.getAll('configuracoes/remedios', 'ordem');
        this.Atividades = this.dbService.getAll('configuracoes/atividades', 'ordem');
        this.Roles = this.dbService.getAll('configuracoes/roles', 'ordem');
        this.Estudos = this.dbService.getAll('configuracoes/estudos', 'ordem');
        this.Pessoas = this.dbService.getAll('configuracoes/pessoas', 'ordem');
        this.Dentes = this.dbService.getAll('configuracoes/dentes', 'ordem');
        this.remedios = [
            { title: "Homeopatia - manhã" },
            { title: "Homeopatia - noite" },
            { title: "Advil" },
            { title: "Vitamina C" },
            { title: "Vitamina D" },
            { title: "Antibiótico" },
            { title: "Antialergico" },
            { title: "Antiflamatório" },
            { title: "Creme" },
            { title: "Buscopan" },
            { title: "Eno" },
            { title: "Omeoprazol" },
            { title: "" }
        ];
        this.dentes = [
            { title: "Manhã" },
            { title: "Tarde" },
            { title: "Noite" },
            { title: "Outro" },
            { title: "Fio dental" },
            { title: "Aparelho" },
            { title: "" }
        ];
        this.atividades = [
            { title: "Corrida" },
            { title: "Caminhada" },
            { title: "Intervalado" },
            { title: "Abdominais" },
            { title: "Flexões" },
            { title: "Gêmeos" },
            { title: "Outro" },
            { title: "" }
        ];
        this.estudos = [
            { title: "Frances" },
            { title: "Ingles" },
            { title: "Projet Constru" },
            { title: "Programação" },
            { title: "Outro" },
            { title: "" }
        ];
        this.pessoas = [
            { title: "Dani" },
            { title: "Amanda" },
            { title: "Luma" },
            { title: "India" },
            { title: "Filippo" },
            { title: "Marina" },
            { title: "Marianinha" },
            { title: "Pai" },
            { title: "Mãe" },
            { title: "Felipe" },
            { title: "Sttefany" },
            { title: "Bella" },
            { title: "Outro" },
            { title: "" }
        ];
        this.role = [
            { title: "Pizza" },
            { title: "Mcdonalds" },
            { title: "Burger King" },
            { title: "Hamburguer" },
            { title: "Aniversário" },
            { title: "Bar" },
            { title: "Churrasco" },
            { title: "Dani" },
            { title: "Japones" },
            { title: "Balada" },
            { title: "Festa" },
            { title: "Turistar" },
            { title: "Viajar" },
            { title: "Outro" },
            { title: "" }
        ];
    }
    AdicionarPage.prototype.roww = function () {
        this.rows = 5;
    };
    AdicionarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdicionarPage');
    };
    AdicionarPage.prototype.Data = function () {
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        var array = [dia, mes, ano];
        return array;
    };
    AdicionarPage.prototype.Criacao = function (controle) {
        this.MudandoData(this.DataO);
        this.dbService.save('diario', controle);
    };
    AdicionarPage.prototype.Total = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia);
        return total;
    };
    AdicionarPage.prototype.Total2 = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia - 1);
        return total;
    };
    AdicionarPage.prototype.Parcial = function () {
        var total;
        var data = new Date();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 100 + (mes + 1));
        return total;
    };
    AdicionarPage.prototype.Ontem = function () {
        var date = new Date;
        date.setDate(date.getDate() - 1);
        this.DataO = date.toISOString();
        this.Criacao(this.controle);
    };
    AdicionarPage.prototype.atualiza = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    AdicionarPage.prototype.Mostra = function () {
        this.MudandoData(this.DataO);
    };
    AdicionarPage.prototype.MudandoData = function (valor) {
        var fields = valor.split('-');
        var dia = fields[2].split('T');
        this.controle.dia = dia[0];
        this.controle.ano = fields[0];
        this.controle.mes = String(Number(fields[1]));
        this.controle.total = String(Number(Number(this.controle.ano) * 10000 + Number(this.controle.mes) * 100 + Number(dia[0])));
        this.controle.parcial = String(Number(Number(this.controle.ano) * 100 + Number(this.controle.mes)));
    };
    AdicionarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adicionar',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\adicionar\adicionar.html"*/'<!--\n  Generated template for the AdicionarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Adicionar</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="atualiza()">\n        <ion-icon name="sync"></ion-icon>\n    </button></ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n\n    <ion-row  class="roww">\n      <ion-item>\n        <ion-label class="nome">Remedios: </ion-label>\n          <ion-select class="input" [(ngModel)]="controle.remedios" interface="popover" multiple =  True>\n            <ion-option *ngFor="let rem of (Remedios | async) ">{{rem.title}}</ion-option>\n          </ion-select>\n      </ion-item>\n    </ion-row>\n\n    <ion-row class="roww">\n      <ion-item>\n        <ion-label class="nome" >Dentes: </ion-label>\n        <ion-select  text-righ [(ngModel)]="controle.dentes" interface="popover" multiple =  True>\n          <ion-option text-righ *ngFor="let den of (Dentes | async)">{{den.title}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-row>\n\n    <ion-row class="roww">\n      <ion-item>\n        <ion-label class="nome" >Atividades: </ion-label>\n        <ion-select text-righ [(ngModel)]="controle.atividades" interface="popover" multiple =  True>\n          <ion-option text-righ *ngFor="let ativ of (Atividades | async)">{{ativ.title}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-row>\n\n    <ion-row class="roww">\n      <ion-item>\n        <ion-label class="nome" >Passos: </ion-label>\n        <ion-input text-right type="number" value="" [(ngModel)]="controle.passos"></ion-input>\n      </ion-item>\n    </ion-row>\n\n    \n    <ion-row class="roww">\n      <ion-item>\n        <ion-label class="nome" >Peso: </ion-label>\n        <ion-input text-right type="number"  value="" [(ngModel)]="controle.peso"></ion-input>\n      </ion-item>\n    </ion-row>\n\n    <ion-row class="roww">\n      <ion-item no-lines>\n        <ion-range no-padding min="0" max="100" step = \'5\' [(ngModel)]="controle.andando">\n          <ion-label range-left class="nome">Andando: </ion-label>\n          <ion-label range-right>{{controle.andando}}</ion-label>\n        </ion-range>\n      </ion-item>\n    </ion-row>\n\n    <ion-row class="roww">\n        <ion-item>\n          <ion-range no-padding min="0" max="100" step=\'5\' [(ngModel)]="controle.correndo">\n            <ion-label class="nome" range-left >Correndo: </ion-label>\n            <ion-label range-right>{{controle.correndo}}</ion-label>\n          </ion-range>\n        </ion-item>\n      </ion-row>\n\n   <ion-row  class="roww">\n      <ion-item no-lines>\n        <ion-range no-padding min="0" max="60"  [(ngModel)]="controle.tempinho">\n          <ion-label class="nome" range-left>Tempinho: </ion-label>\n          <ion-label range-right>{{controle.tempinho}}</ion-label>\n        </ion-range>\n      </ion-item>\n    </ion-row>\n\n    <ion-row  class="roww">\n      <ion-item no-lines>\n        <ion-range no-padding min="0" max="10"  [(ngModel)]="controle.tempinhoQ">\n          <ion-label class="nome" range-left>Tempinho: </ion-label>\n          <ion-label range-right>{{controle.tempinhoQ}}</ion-label>\n        </ion-range>\n      </ion-item>\n    </ion-row>\n\n    <ion-row  class="roww">\n      <ion-item>\n        <ion-range no-padding min="0" max="10" [(ngModel)]="controle.UHU">\n          <ion-label class="nome" range-left>Uhu: </ion-label>\n          <ion-label range-right>{{controle.UHU}}</ion-label>\n        </ion-range>\n      </ion-item>\n    </ion-row>\n\n    <ion-row  class="roww">\n      <ion-item no-lines>\n        <ion-range no-padding min="0" max="5" [(ngModel)]="controle.cafe">\n          <ion-label class="nome" range-left>Cafe: </ion-label>\n          <ion-label range-right>{{controle.cafe}}</ion-label>\n        </ion-range>\n      </ion-item>\n    </ion-row>\n\n    <ion-row  class="roww">\n      <ion-item no-lines>\n        <ion-range no-padding min="0" max="5" [(ngModel)]="controle.lancheM">\n          <ion-label class="nome" range-left>Lanche: </ion-label>\n          <ion-label range-right>{{controle.lancheM}}</ion-label>\n        </ion-range>\n      </ion-item>\n    </ion-row>\n\n    <ion-row  class="roww">\n      <ion-item no-lines  >\n        <ion-range no-padding min="0" max="5" [(ngModel)]="controle.almoco">\n          <ion-label class="nome" range-left>Almoço: </ion-label>\n          <ion-label range-right>{{controle.almoco}}</ion-label>\n        </ion-range>\n      </ion-item>\n    </ion-row>\n\n    <ion-row  class="roww">\n      <ion-item no-lines>\n        <ion-range no-padding min="0" max="5" [(ngModel)]="controle.lancheT">\n          <ion-label class="nome" range-left>Lanche: </ion-label>\n          <ion-label range-right>{{controle.lancheT}}</ion-label>\n        </ion-range>\n      </ion-item>\n    </ion-row>\n\n\n    <ion-row  class="roww">\n      <ion-item no-lines>\n        <ion-range no-padding min="0" max="5" [(ngModel)]="controle.jantar">\n          <ion-label class="nome" range-left>Jantar: </ion-label>\n          <ion-label range-right>{{controle.jantar}}</ion-label>\n        </ion-range>\n      </ion-item>\n    </ion-row>\n\n    <ion-row  class="roww">\n      <ion-item>\n        <ion-range no-padding min="0" max="5" [(ngModel)]="controle.lancheN">\n          <ion-label class="nome" range-left>Lanche: </ion-label>\n          <ion-label range-right>{{controle.lancheN}}</ion-label>\n        </ion-range>\n      </ion-item>\n    </ion-row>\n\n    <ion-row  class="roww">\n      <ion-item no-lines>\n        <ion-range no-padding min="0" max="5" [(ngModel)]="controle.doce">\n          <ion-label class="nome" range-left>Doce: </ion-label>\n          <ion-label range-right>{{controle.doce}}</ion-label>\n        </ion-range>\n      </ion-item>\n    </ion-row>\n\n    <ion-row  class="roww">\n      <ion-item no-lines>\n        <ion-range no-padding min="0" max="5" [(ngModel)]="controle.refrigerante">\n          <ion-label class="nome" range-left>Refrigerante: </ion-label>\n          <ion-label range-right>{{controle.refrigerante}}</ion-label>\n        </ion-range>\n      </ion-item>\n    </ion-row>\n\n    <ion-row  class="roww">\n      <ion-item>\n        <ion-range no-padding min="0" max="5" [(ngModel)]="controle.alcool">\n          <ion-label class="nome" range-left>Alcool: </ion-label>\n          <ion-label range-right>{{controle.alcool}}</ion-label>\n        </ion-range>\n      </ion-item>\n    </ion-row>\n\n    <ion-row  class="roww">\n      <ion-item no-lines>\n        <ion-range no-padding min="0" max="12" [(ngModel)]="controle.tempoE">\n          <ion-label class="nome" range-left>Estudando: </ion-label>\n          <ion-label range-right>{{controle.tempoE}}</ion-label>\n        </ion-range>\n      </ion-item>\n    </ion-row>\n\n    <ion-row  class="roww">\n      <ion-item> \n        <ion-range no-padding min="0" max="12" [(ngModel)]="controle.tempoA">\n          <ion-label class="nome" range-left>Aulas: </ion-label>\n          <ion-label range-right>{{controle.tempoA}}</ion-label>\n        </ion-range>\n      </ion-item>\n    </ion-row>\n\n      <ion-grid no-padding justify-content-center>\n        <ion-row>\n        <ion-col col-4 no-paddig>\n          <ion-row justify-content-center>\n            <ion-item no-lines>\n              <ion-label class="nome2">Viagem:</ion-label>\n            </ion-item>\n          </ion-row>\n          <ion-row justify-content-center>\n            <ion-toggle class="toggle" checked="false" [(ngModel)]="controle.viagem" ></ion-toggle>\n          </ion-row>\n        </ion-col>\n\n        <ion-col col-4 no-paddig>\n          <ion-row justify-content-center>\n            <ion-item no-lines>\n              <ion-label class="nome2">Besteira:</ion-label>\n            </ion-item>\n          </ion-row>\n          <ion-row justify-content-center>\n            <ion-toggle class="toggle" checked="false" [(ngModel)]="controle.besteira" ></ion-toggle>\n          </ion-row>\n        </ion-col>\n\n\n        <ion-col col-4 no-paddig>\n          <ion-row justify-content-center>\n            <ion-item no-lines>\n              <ion-label class="nome2">Barba:</ion-label>\n            </ion-item>\n          </ion-row>\n          <ion-row justify-content-center>\n            <ion-toggle class="toggle" checked="false" [(ngModel)]="controle.barba" ></ion-toggle>\n          </ion-row>\n        </ion-col>\n      \n\n        <ion-col col-4 no-paddig>\n          <ion-row justify-content-center>\n            <ion-item no-lines justify-content-center>\n              <ion-label class="nome2">Agradecer: </ion-label>\n            </ion-item>\n          </ion-row>\n          <ion-row justify-content-center>\n            <ion-toggle class="toggle" checked="false" [(ngModel)]="controle.agradecimento" ></ion-toggle>\n          </ion-row>\n        </ion-col>\n\n        <ion-col col-4 no-paddig>\n          <ion-row justify-content-center>\n            <ion-item no-lines justify-content-center>\n              <ion-label class="nome2">Meditação: </ion-label>\n            </ion-item>\n          </ion-row>\n          <ion-row justify-content-center>\n            <ion-toggle class="toggle" checked="false" [(ngModel)]="controle.meditacao" ></ion-toggle>\n          </ion-row>\n        </ion-col>\n\n        <ion-col col-4 no-paddig>\n          <ion-row justify-content-center>\n            <ion-item no-lines justify-content-center>\n              <ion-label class="nome2">Escrever: </ion-label>\n            </ion-item>\n          </ion-row>\n          <ion-row justify-content-center>\n            <ion-toggle class="toggle" checked="false" [(ngModel)]="controle.escrever" ></ion-toggle>\n          </ion-row>\n        </ion-col>\n\n        <ion-col col-4 no-paddig>\n          <ion-row justify-content-center>\n            <ion-item no-lines justify-content-center>\n              <ion-label class="nome2">Raser: </ion-label>\n            </ion-item>\n          </ion-row>\n          <ion-row justify-content-center>\n            <ion-toggle class="toggle" checked="false" [(ngModel)]="controle.raser" ></ion-toggle>\n          </ion-row>\n        </ion-col>\n\n        <ion-col col-4 no-paddig>\n          <ion-row justify-content-center>\n            <ion-item no-lines justify-content-center>\n              <ion-label class="nome2">Exercicios: </ion-label>\n            </ion-item>\n          </ion-row>\n          <ion-row justify-content-center>\n            <ion-toggle class="toggle" checked="false" [(ngModel)]="controle.exercicios" ></ion-toggle>\n          </ion-row>\n        </ion-col>\n\n        <ion-col col-4 no-paddig>\n          <ion-row justify-content-center>\n            <ion-item no-lines justify-content-center>\n              <ion-label class="nome2">Leitura: </ion-label>\n            </ion-item>\n          </ion-row>\n          <ion-row justify-content-center>\n            <ion-toggle class="toggle" checked="false" [(ngModel)]="controle.leitura" ></ion-toggle>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n    <ion-row>\n    <ion-item class="roww2"></ion-item>\n      <ion-item no-lines>\n        <ion-label class="nome" >Role: </ion-label>\n          <ion-select class="input" [(ngModel)]="controle.role" interface="popover" multiple =  True>\n            <ion-option *ngFor="let rol of (Roles | async)">{{rol.title}}</ion-option>\n          </ion-select>\n      </ion-item>\n    </ion-row>\n\n    <ion-row>\n      <ion-item no-lines>\n          <ion-label class="nome" >Estudos: </ion-label>\n            <ion-select class="input" [(ngModel)]="controle.estudos" interface="popover" multiple =  True>\n              <ion-option *ngFor="let est of (Estudos | async)">{{est.title}}</ion-option>\n            </ion-select>\n        </ion-item>\n    </ion-row>\n\n    <ion-row>\n      <ion-item> \n          <ion-label class="nome" >Pessoas: </ion-label>\n            <ion-select class="input" [(ngModel)]="controle.pessoas" interface="popover" multiple =  True>\n              <ion-option *ngFor="let pes of (Pessoas | async)">{{pes.title}}</ion-option>\n            </ion-select>\n        </ion-item>\n    </ion-row>\n\n    <ion-row>\n      <ion-item>\n        <ion-label class="nome" no-padding >Resumo: </ion-label>\n        <ion-textarea   (click)="roww()" style="color: black; font-size: 13px;" rows="5" autocomplete="on" autocorrect="on" type="text" value="" [(ngModel)]="controle.resumo"></ion-textarea>\n      </ion-item>\n    </ion-row>\n\n    <ion-row>\n      <ion-item>\n        <ion-label class="nome" no-padding >Viagem: </ion-label>\n        <ion-input [(ngModel)]="controle.viagemLugar"  (click)="roww()" style="color: black; font-size: 13px;" rows="1" autocomplete="on" autocorrect="on" type="text" value="" ></ion-input>\n      </ion-item>\n    </ion-row>\n\n    <ion-item>\n      <ion-label class="nome" no-padding (click)="Mostra()">Data</ion-label>\n      <ion-datetime  (click)="Mostra()" displayFormat="DD/MM/YYYY" [(ngModel)]="DataO"></ion-datetime>\n    </ion-item>\n\n    <ion-row justify-content-center>\n      <button class="btn3" ion-button round small outline (click)="Ontem(controle)">Ontem</button>\n      <button class="btn3" ion-button round small (click)="Criacao(controle)">Adicionar</button>\n   </ion-row>\n\n \n\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\adicionar\adicionar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
    ], AdicionarPage);
    return AdicionarPage;
}());

//# sourceMappingURL=adicionar.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalisePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edicao_edicao__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AnalisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnalisePage = /** @class */ (function () {
    function AnalisePage(navCtrl, navParams, dbService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.Dados = this.dbService.getAll('diario', 'parcial').map(function (a) { return a.reverse(); }).map(function (a) { return a.sort(function (a, b) { return Number(String(b['total'] - Number(String(a['total'])))); }); });
        this.itens = [{ title: "Leitura" }, { title: "Corrida" }, { title: "8000" }, { title: "Agradecer" },
            { title: "Meditar" }, { title: "Peso" }, { title: "Passos" }
        ];
    }
    AnalisePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnalisePage');
    };
    AnalisePage.prototype.GoEdicao = function (single) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edicao_edicao__["a" /* EdicaoPage */], { 'single': single });
    };
    AnalisePage.prototype.icon = function (dado) {
        if (dado == true) {
            return ("checkmark-circle");
        }
        else {
            return ("close-circle");
        }
    };
    AnalisePage.prototype.iconColor = function (dado) {
        if (dado == true) {
            return ("primary");
        }
        else {
            return ("dark");
        }
    };
    AnalisePage.prototype.contem = function (dado, parametro) {
        if (dado.includes(parametro) == true) {
            return ("checkmark-circle");
        }
        else {
            return ("close-circle");
        }
    };
    AnalisePage.prototype.contemCor = function (dado, parametro) {
        if (dado.includes(parametro) == true) {
            return ("primary");
        }
        else {
            return ("dark");
        }
    };
    AnalisePage.prototype.contador = function (dado, parametro) {
        if (Number(dado) > parametro) {
            return ("checkmark-circle");
        }
        else {
            return ("close-circle");
        }
    };
    AnalisePage.prototype.contadorCor = function (dado, parametro) {
        if (Number(dado) > parametro) {
            return ("primary");
        }
        else {
            return ("dark");
        }
    };
    AnalisePage.prototype.ChecaDia = function (dia, mes, ano) {
        var myDate = new Date();
        myDate.setFullYear(Number(ano));
        myDate.setMonth(Number(mes) - 1);
        myDate.setDate(Number(dia));
        if (myDate.getDay() == 6) {
            return true;
        }
        else {
            return false;
        }
    };
    AnalisePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-analise',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\analise\analise.html"*/'<!--\n\n  Generated template for the AnalisePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Analise</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-scroll scrollX="true" scrollY="true" style="width:150%; height: 100%">\n\n    <div class="inner">\n\n      <ion-row>\n\n        <ion-col col-1>\n\n          <h2 class="dados" justify-content-center>Dia</h2>\n\n        </ion-col>\n\n        <ion-col col-1 *ngFor="let item of itens" justify-content-center> \n\n          <h2 class="cabecalho" justify-content-center>{{item.title}} </h2>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row *ngFor="let dado of (Dados | async)">\n\n      <ion-row col-12 *ngIf="ChecaDia(dado.dia,dado.mes,dado.ano) == true"> ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</ion-row>        \n\n        <ion-col no-padding col-1 justify-content-center (click)="GoEdicao(dado)">\n\n          <h2 class="dados">{{dado.dia}}/{{dado.mes}}</h2>\n\n        </ion-col>\n\n        <ion-col no-padding col-1 justify-content-center>\n\n          <h2 class="dados" justify-content-center>\n\n            <ion-icon  color="{{iconColor(dado.leitura)}}" name="{{icon(dado.leitura)}}"></ion-icon>\n\n          </h2>\n\n        </ion-col>\n\n\n\n        <ion-col no-padding col-1 justify-content-center>\n\n          <h2 class="dados" justify-content-center>\n\n            <ion-icon  color="{{contemCor(dado.atividades,\'Corrida\')}}" name="{{contem(dado.atividades,\'Corrida\')}}"></ion-icon>\n\n          </h2>\n\n        </ion-col>\n\n\n\n        <ion-col no-padding col-1 justify-content-center>\n\n          <h2 class="dados" justify-content-center>\n\n            <ion-icon  color="{{contadorCor(dado.passos,\'8000\')}}" name="{{contador(dado.passos,\'8000\')}}"></ion-icon>\n\n          </h2>\n\n        </ion-col>\n\n\n\n        <ion-col no-padding col-1 justify-content-center>\n\n          <h2 class="dados" justify-content-center>\n\n            <ion-icon  color="{{iconColor(dado.agradecimento)}}" name="{{icon(dado.agradecimento)}}"></ion-icon>\n\n          </h2>\n\n        </ion-col>\n\n\n\n\n\n        <ion-col no-padding col-1 justify-content-center>\n\n          <h2 class="dados" justify-content-center>\n\n            <ion-icon  color="{{iconColor(dado.meditacao)}}" name="{{icon(dado.meditacao)}}"></ion-icon>\n\n          </h2>\n\n        </ion-col>\n\n\n\n        <ion-col no-padding col-1 justify-content-center>\n\n          <h2 class="dados" justify-content-center> {{dado.peso}}\n\n          </h2>\n\n        </ion-col>\n\n\n\n        <ion-col no-padding col-1 justify-content-center>\n\n          <h2 class="dados" justify-content-center> {{dado.passos}}\n\n          </h2>\n\n        </ion-col>\n\n\n\n        \n\n\n\n\n\n      </ion-row>\n\n    </div>\n\n  </ion-scroll>\n\n    \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\analise\analise.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], AnalisePage);
    return AnalisePage;
}());

//# sourceMappingURL=analise.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracoesEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ConfiguracoesEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfiguracoesEditPage = /** @class */ (function () {
    function ConfiguracoesEditPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.edits = this.navParams.get('edicao');
    }
    ConfiguracoesEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfiguracoesEditPage');
    };
    ConfiguracoesEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configuracoes-edit',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\configuracoes-edit\configuracoes-edit.html"*/'<!--\n  Generated template for the ConfiguracoesEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Edição de Configuração</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row class="roww">\n        <ion-item>\n          <ion-label class="nome" >Nome: </ion-label>\n          <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="edit.title"></ion-input>\n        </ion-item>\n      </ion-row>\n\n    <ion-row class="roww">\n      <ion-item>\n        <ion-label class="nome" >Check: </ion-label>\n        <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="tarefa.mes"></ion-input>\n      </ion-item>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\configuracoes-edit\configuracoes-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ConfiguracoesEditPage);
    return ConfiguracoesEditPage;
}());

//# sourceMappingURL=configuracoes-edit.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsDoMesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edicao_edicao__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CardsDoMesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CardsDoMesPage = /** @class */ (function () {
    function CardsDoMesPage(navCtrl, navParams, dbService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.mes = this.navParams.get('mes');
        this.gastos = this.navParams.get('gastos');
        this.verdade = true;
        if (this.mes != "total") {
            this.dias = this.dbService.getAllEspecifico('diario', 'parcial', String(this.mes)).map(function (a) { return a.reverse(); }).map(function (a) { return a.sort(function (a, b) { return Number(String(b['dia'] - Number(String(a['dia'])))); }); });
        }
        if (this.mes == "total") {
            this.dias = this.dbService.getAll('diario', 'parcial').map(function (a) { return a.reverse(); }).map(function (a) { return a.sort(function (a, b) { return Number(String(b['total'] - Number(String(a['total'])))); }); });
        }
        this.dias2 = this.dias.map(function (a) { return a.reverse(); });
        this.graficoG = this.Media2('passos');
        this.graficoData = this.graficoG[0];
        this.graficoDado = this.graficoG[1];
        this.graficoDataMedia = this.graficoG[2];
        this.graficoDataMedia7 = this.graficoG[3];
        this.graficoDataMedia7F = this.graficoG[4];
        this.graficoPassosMin = this.graficoG[5];
        this.grafPesoG = this.Media2('peso');
        this.grafPeso = this.grafPesoG[0];
        this.grafPesoMedia = this.grafPesoG[2];
        this.graficoPesoMedia7F = this.grafPesoG[4];
        this.graficoCafeG = this.Media2('cafe');
        this.graficoCafeData = this.graficoCafeG[0];
        this.graficoCafeDado = this.graficoCafeG[1];
        this.graficoLancheMG = this.Media2('lancheM');
        this.graficoLancheMData = this.graficoLancheMG[0];
        this.graficoLancheMDado = this.graficoLancheMG[1];
        this.graficoLancheMG = this.Media2('almoco');
        this.graficoAlmocoData = this.graficoLancheMG[0];
        this.graficoLancheMG = this.Media2('lancheT');
        this.graficoLancheTData = this.graficoLancheMG[0];
        this.graficoLancheMG = this.Media2('jantar');
        this.graficoJantarData = this.graficoLancheMG[0];
        this.graficoLancheMG = this.Media2('lancheN');
        this.graficoLancheNData = this.graficoLancheMG[0];
        this.passos = this.Media("passos");
        this.tempinho = this.Media("tempinho");
        this.quantidade = this.Media("tempinhoQ");
        this.UHU = this.Media("UHU");
        this.cafe = this.Media("cafe");
        this.lancheM = this.Media("lancheM");
        this.almoco = this.Media("almoco");
        this.lancheT = this.Media("lancheT");
        this.jantar = this.Media("jantar");
        this.estudos = this.Media("tempoE");
        this.aulas = this.Media("tempoA");
        this.refrigerante = this.SeHouve('refrigerante');
        this.alcool = this.SeHouve('alcool');
        this.leitura = this.SeHouve('leitura');
        this.agradecimento = this.SeHouve('agradecimento');
        this.graficoMedia1 = this.MediaAlimentacao();
        this.graficoMedia = this.graficoMedia1[0];
        this.graficoMediaMedia = this.graficoMedia1[1];
    }
    CardsDoMesPage.prototype.Media3 = function (dado) {
        var cont = 1;
        var sum = 0;
        var array = [];
        dado.forEach(function (A) { sum += Number(A), array.push((Number(A) / cont)), cont += 1; });
        return [array];
    };
    CardsDoMesPage.prototype.FormataParcial2 = function (data) {
        data = String(data);
        var datinha = data.substr(0, 4);
        var datinha2 = data.substr(4, 2);
        var final = [datinha2, datinha].join('/');
        return final;
    };
    CardsDoMesPage.prototype.Sinal = function (termo) {
        if (termo == true) {
            return "✔";
        }
        ;
        if (termo == false) {
            return "✘";
        }
    };
    CardsDoMesPage.prototype.Termos = function (termo) {
        var valor = ("termo".match(/,/g) || []).length;
        return valor;
    };
    CardsDoMesPage.prototype.GoEdicao = function (single) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edicao_edicao__["a" /* EdicaoPage */], { 'single': single });
    };
    CardsDoMesPage.prototype.Media2 = function (dado) {
        var cont = 0;
        var sum = 0;
        var array = [];
        var array2 = [];
        var array3 = [];
        var array4 = [];
        var array5 = [];
        var array6 = [];
        var array7 = [];
        var v1 = 0;
        var v2 = 0;
        var v3 = 0;
        var v4 = 0;
        var v5 = 0;
        var v6 = 0;
        var v7 = 0;
        var Med;
        this.dias2.forEach(function (element) {
            element.forEach(function (dia) {
                (array).push(Number(dia[dado])), (array2).push(Number(dia['dia'])), sum += Number(dia[dado]), cont += 1, (array4).push(sum / cont),
                    (v7 = v6, v6 = v5, v5 = v4, v4 = v3, v3 = v2, v2 = v1), v1 = dia[dado], Med = ((Number(v1)) + (Number(v2)) + (Number(v3)) + (Number(v4)) + (Number(v5)) + (Number(v6)) + (Number(v7))) / 7, array5.push(Med);
                if (cont % 7 == 0) {
                    array6.push(Med, Med, Med, Med, Med, Med, Med);
                }
                array7.push(8000);
            });
        });
        array3 = [array, array2, array4, array5, array6, array7];
        return array3;
    };
    CardsDoMesPage.prototype.Media = function (dado) {
        var soma = 0;
        var quantidade = 0;
        var array = [];
        var final;
        this.dias2.forEach(function (element) {
            element.forEach(function (dia) { quantidade += 1, soma += Number(dia[dado]); }),
                final = Number(soma) / Number(quantidade),
                final = parseFloat(final.toFixed(1));
            array.push(final);
        });
        return array;
    };
    CardsDoMesPage.prototype.MediaAlimentacao = function () {
        var array = [];
        var cont = 0;
        var sum = 0;
        var arrayF;
        var array2 = [];
        var MEDIA;
        this.dias2.forEach(function (itens) {
            itens.forEach(function (item) {
                MEDIA = (Number(item.cafe) * 1 +
                    Number(item.almoco) * 5 + Number(item.jantar) * 8 + Number(item.lancheM) * 0.3 +
                    Number(item.lancheT) * 0.3 + Number(item.lancheN) * 1) / Number(15.6), array.push(MEDIA), cont += 1, sum += MEDIA, array2.push(sum / cont);
            });
        });
        arrayF = [array, array2];
        return arrayF;
    };
    CardsDoMesPage.prototype.SeHouve = function (dado) {
        var soma = 0;
        var quantidade = 0;
        var array = [];
        var final;
        this.dias2.forEach(function (element) {
            element.forEach(function (dia) { quantidade += 1; if (dia[dado] > 0 || dia[dado] == true) {
                soma += 1;
            } }),
                final = (Number(soma) / Number(quantidade)) * 100,
                final = Math.round(final);
            array.push(final);
        });
        return array;
    };
    //--------------------CHarts-------------------------------//
    CardsDoMesPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.barChart = _this.getBarChart();
            _this.bar2Chart = _this.getBarChart2();
            _this.bar3Chart = _this.getBarChart3();
        }, 800);
        setTimeout(function () {
        }, 200);
    };
    CardsDoMesPage.prototype.getBarChart = function () {
        var data = {
            labels: this.graficoDado,
            datasets: [{
                    label: ['Passos'],
                    data: this.graficoData,
                    backgroundColor: '#2f6acf',
                    borderWidth: 2
                }, {
                    label: ['Média'],
                    data: this.graficoDataMedia,
                    type: 'line',
                    backgroundColor: 'rgba(255, 255, 255, .4)',
                    borderColor: '#2f6acf'
                }, {
                    label: ['Ponderado 7'],
                    data: this.graficoDataMedia7,
                    type: 'line',
                    backgroundColor: 'rgba(255, 255, 255, .4)',
                    borderColor: '#2f6acf'
                },
                {
                    label: ['Semanas'],
                    data: this.graficoDataMedia7F,
                    type: 'line',
                    backgroundColor: 'rgba(255, 255, 255, .4)',
                    borderColor: '#2f6acf'
                },
                {
                    label: ['Minimo'],
                    data: this.graficoPassosMin,
                    type: 'line',
                    backgroundColor: 'rgba(255, 255, 255, .4)',
                    borderColor: '#FF0000'
                }
            ]
        };
        var options = {
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            autoSkip: false,
                        }
                    }],
                xAxes: [{
                        ticks: {
                            autoSkip: false,
                        }
                    }]
            }
        };
        return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);
    };
    CardsDoMesPage.prototype.getChart = function (context, charType, data, options) {
        return new __WEBPACK_IMPORTED_MODULE_4_chart_js___default.a(context, {
            data: data,
            options: options,
            type: charType
        });
    };
    CardsDoMesPage.prototype.getBarChart2 = function () {
        var data = {
            labels: this.graficoCafeDado,
            datasets: [{
                    label: ['Café'],
                    data: this.graficoCafeData,
                    backgroundColor: '#2f6acf',
                    borderWidth: 2
                }, {
                    label: ['LancheM'],
                    data: this.graficoLancheMData,
                    backgroundColor: "#6892da",
                    borderWidth: 2
                }, {
                    label: ['Almoco'],
                    data: this.graficoAlmocoData,
                    backgroundColor: '#85a6e0',
                    borderWidth: 2
                }, {
                    label: ['Lanche T'],
                    data: this.graficoLancheTData,
                    backgroundColor: '#a1bbe6',
                    borderWidth: 2
                }, {
                    label: ['Jantar'],
                    data: this.graficoJantarData,
                    backgroundColor: '#becfec',
                    borderWidth: 2
                }, {
                    label: ['Lanche N'],
                    data: this.graficoLancheNData,
                    backgroundColor: '#dae3f1',
                    borderWidth: 2
                }, {
                    label: ['Parcial'],
                    data: this.graficoMedia,
                    type: 'line',
                    backgroundColor: 'rgba(255, 255, 255, .4)',
                    borderColor: '#2f6acf'
                }, {
                    label: ['Média'],
                    data: this.graficoMediaMedia,
                    type: 'line',
                    backgroundColor: 'rgba(230, 230, 255, .4)',
                    borderColor: '#808080'
                }]
        };
        var options = {
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            autoSkip: false,
                        }
                    }],
                xAxes: [{
                        ticks: {
                            autoSkip: false,
                        }
                    }]
            }
        };
        return this.getChart(this.barCanvas2.nativeElement, 'bar', data, options);
    };
    CardsDoMesPage.prototype.getPieChart = function () {
        var data = {
            labels: ["Sim", "Não"],
            datasets: [{
                    label: 'Refri',
                    data: [this.refrigerante, (100 - this.refrigerante)],
                    backgroundColor: "#2f6acf",
                    borderWidth: 2
                }, {
                    label: 'Gasto',
                    data: [0],
                    backgroundColor: "#2f6acf",
                    borderWidth: 2
                }],
        };
        var options = {};
        return this.getChart(this.pieCanvas.nativeElement, 'pie', data, options);
    };
    CardsDoMesPage.prototype.getBarChart3 = function () {
        var data = {
            labels: this.graficoDado,
            datasets: [{
                    label: ['Peso'],
                    data: this.grafPeso,
                    backgroundColor: '#2f6acf',
                    borderWidth: 2
                }, {
                    label: ['Média'],
                    data: this.grafPesoMedia,
                    type: 'line',
                    backgroundColor: 'rgba(255, 255, 255, .4)',
                    borderColor: '#2f6acf'
                },
                {
                    label: ['Semana'],
                    data: this.graficoPesoMedia7F,
                    type: 'line',
                    backgroundColor: 'rgba(255, 255, 255, .4)',
                    borderColor: '#2f6acf'
                }
            ]
        };
        var options = {
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: false,
                            autoSkip: false,
                        }
                    }],
                xAxes: [{
                        ticks: {
                            autoSkip: false,
                        }
                    }]
            }
        };
        return this.getChart3(this.barCanvas3.nativeElement, 'bar', data, options);
    };
    CardsDoMesPage.prototype.getChart3 = function (context, charType, data, options) {
        return new __WEBPACK_IMPORTED_MODULE_4_chart_js___default.a(context, {
            data: data,
            options: options,
            type: charType
        });
    };
    CardsDoMesPage.prototype.somaPagamento = function (data) {
        var valorPag = 0;
        this.gastos.forEach(function (item) { if (String(item[4]) == String(data)) {
            valorPag = valorPag + Number(item[0]);
        } });
        return (Math.round(valorPag));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], CardsDoMesPage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pieCanvas'),
        __metadata("design:type", Object)
    ], CardsDoMesPage.prototype, "pieCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas2'),
        __metadata("design:type", Object)
    ], CardsDoMesPage.prototype, "barCanvas2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas3'),
        __metadata("design:type", Object)
    ], CardsDoMesPage.prototype, "barCanvas3", void 0);
    CardsDoMesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cards-do-mes',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\cards-do-mes\cards-do-mes.html"*/'<!--\n\n  Generated template for the CardsDoMesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Card Do Mes - {{FormataParcial2(mes)}}</ion-title>\n\n   \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12 col-xl-6>\n\n        <ion-card>\n\n          <div>\n\n            <canvas #barCanvas3 height="100vh" width="200vh" ></canvas>\n\n          </div>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-12 col-xl-6>\n\n        <ion-card>\n\n          <div>\n\n            <canvas #barCanvas height="100vh" width="200vh" ></canvas>\n\n          </div>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-12 col-xl-6>\n\n        <ion-card>\n\n          <div>\n\n            <canvas #barCanvas2 height="150vh" width="200vh" justify-content-center></canvas>\n\n          </div>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-12 col-xl-6>\n\n          <ion-card>\n\n              <ion-card-header>Análise: </ion-card-header>\n\n              <ion-grid no-padding>\n\n                <ion-row>\n\n                  <ion-col col-4 col-xl-2 col-xl-2 no-padding>\n\n                      <ion-row justify-content-center>\n\n                        <ion-item no-lines justify-content-center >\n\n                          <ion-label class="nome2">Passos: </ion-label>\n\n                        </ion-item>\n\n                      </ion-row>\n\n                      <ion-row justify-content-center>\n\n                        <ion-badge>{{passos[0]}}</ion-badge>\n\n                      </ion-row>\n\n                    </ion-col>\n\n                  \n\n                    <ion-col col-4 col-xl-2 col-xl-2 no-padding>\n\n                      <ion-row justify-content-center>\n\n                        <ion-item no-lines justify-content-center >\n\n                          <ion-label class="nome2">Tempinho: </ion-label>\n\n                        </ion-item>\n\n                      </ion-row>\n\n                      <ion-row justify-content-center>\n\n                        <ion-badge>{{tempinho[0]}}</ion-badge>\n\n                      </ion-row>\n\n                    </ion-col>\n\n                  \n\n          \n\n                  <ion-col col-4 col-xl-2 col-xl-2 no-padding>\n\n                    <ion-row justify-content-center>\n\n                      <ion-item no-lines justify-content-center>\n\n                        <ion-label class="nome2">Quantidade: </ion-label>\n\n                      </ion-item>\n\n                    </ion-row>\n\n                    <ion-row justify-content-center>\n\n                      <ion-badge>{{quantidade[0]}}</ion-badge>\n\n                    </ion-row>\n\n                  </ion-col>\n\n          \n\n          \n\n                  <ion-col col-4 col-xl-2 col-xl-2 no-padding>\n\n                    <ion-row justify-content-center>\n\n                      <ion-item no-lines justify-content-center>\n\n                        <ion-label class="nome2">Uhu: </ion-label>\n\n                      </ion-item>\n\n                    </ion-row>\n\n                    <ion-row justify-content-center>\n\n                      <ion-badge>{{UHU[0]}}</ion-badge>\n\n                    </ion-row>\n\n                  </ion-col>\n\n          \n\n                  <ion-col col-4 col-xl-2 col-xl-2 no-padding>\n\n                    <ion-row justify-content-center>\n\n                      <ion-item no-lines justify-content-center>\n\n                        <ion-label class="nome2">Cafe: </ion-label>\n\n                      </ion-item>\n\n                    </ion-row>\n\n                    <ion-row justify-content-center>\n\n                      <ion-badge>{{cafe[0]}}</ion-badge>\n\n                    </ion-row>\n\n                  </ion-col>\n\n          \n\n                  <ion-col col-4 col-xl-2  col-xl-2 no-padding>\n\n                    <ion-row justify-content-center>\n\n                      <ion-item no-lines justify-content-center>\n\n                        <ion-label class="nome2">Lanche: </ion-label>\n\n                      </ion-item>\n\n                    </ion-row>\n\n                    <ion-row justify-content-center>\n\n                      <ion-badge>{{lancheM[0]}}</ion-badge>\n\n                    </ion-row>\n\n                  </ion-col>\n\n          \n\n                  <ion-col col-4 col-xl-2 col-xl-2 no-padding>\n\n                    <ion-row justify-content-center>\n\n                      <ion-item no-lines justify-content-center>\n\n                        <ion-label class="nome2">Almoco: </ion-label>\n\n                      </ion-item>\n\n                    </ion-row>\n\n                    <ion-row justify-content-center>\n\n                      <ion-badge>{{almoco[0]}}</ion-badge>\n\n                    </ion-row>\n\n                  </ion-col>\n\n          \n\n                  <ion-col col-4 col-xl-2 no-padding>\n\n                    <ion-row justify-content-center>\n\n                      <ion-item no-lines justify-content-center>\n\n                        <ion-label class="nome2">Lanche: </ion-label>\n\n                      </ion-item>\n\n                    </ion-row>\n\n                    <ion-row justify-content-center>\n\n                      <ion-badge>{{lancheT[0]}}</ion-badge>\n\n                    </ion-row>\n\n                  </ion-col>\n\n          \n\n                  <ion-col col-4 col-xl-2 no-padding>\n\n                    <ion-row justify-content-center>\n\n                      <ion-item no-lines justify-content-center>\n\n                        <ion-label class="nome2">Jantar: </ion-label>\n\n                      </ion-item>\n\n                    </ion-row>\n\n                    <ion-row justify-content-center>\n\n                      <ion-badge>{{jantar[0]}}</ion-badge>\n\n                    </ion-row>\n\n                  </ion-col>\n\n          \n\n                  <ion-col col-4 col-xl-2 no-padding>\n\n                    <ion-row justify-content-center>\n\n                      <ion-item no-lines justify-content-center>\n\n                        <ion-label class="nome2">Refri: </ion-label>\n\n                      </ion-item>\n\n                    </ion-row>\n\n                    <ion-row justify-content-center>\n\n                      <ion-badge>{{refrigerante[0]}}%</ion-badge>\n\n                    </ion-row>\n\n                  </ion-col>\n\n      \n\n                  <ion-col col-4 col-xl-2 no-padding>\n\n                      <ion-row justify-content-center>\n\n                        <ion-item no-lines justify-content-center>\n\n                          <ion-label class="nome2">Alcool: </ion-label>\n\n                        </ion-item>\n\n                      </ion-row>\n\n                      <ion-row justify-content-center>\n\n                        <ion-badge>{{alcool[0]}}%</ion-badge>\n\n                      </ion-row>\n\n                    </ion-col>\n\n            \n\n                    <ion-col col-4 col-xl-2 no-padding>\n\n                      <ion-row justify-content-center>\n\n                        <ion-item no-lines justify-content-center>\n\n                          <ion-label class="nome2">Estudos: </ion-label>\n\n                        </ion-item>\n\n                      </ion-row>\n\n                      <ion-row justify-content-center>\n\n                        <ion-badge>{{estudos[0]}}</ion-badge>\n\n                      </ion-row>\n\n                    </ion-col>\n\n            \n\n                    <ion-col col-4 col-xl-2 no-padding>\n\n                      <ion-row justify-content-center>\n\n                        <ion-item no-lines justify-content-center>\n\n                          <ion-label class="nome2">Aulas: </ion-label>\n\n                        </ion-item>\n\n                      </ion-row>\n\n                      <ion-row justify-content-center>\n\n                        <ion-badge>{{aulas[0]}}</ion-badge>\n\n                      </ion-row>\n\n                    </ion-col>\n\n            \n\n                    <ion-col col-4 col-xl-2 no-padding>\n\n                      <ion-row justify-content-center>\n\n                        <ion-item no-lines justify-content-center>\n\n                          <ion-label class="nome2">Leitura: </ion-label>\n\n                        </ion-item>\n\n                      </ion-row>\n\n                      <ion-row justify-content-center>\n\n                        <ion-badge>{{leitura[0]}}%</ion-badge>\n\n                      </ion-row>\n\n                    </ion-col>\n\n            \n\n                    <ion-col col-4 col-xl-2 no-padding>\n\n                      <ion-row justify-content-center>\n\n                        <ion-item no-lines justify-content-center>\n\n                          <ion-label class="nome2">Agradecimento: </ion-label>\n\n                        </ion-item>\n\n                      </ion-row>\n\n                      <ion-row justify-content-center>\n\n                        <ion-badge>{{agradecimento[0]}}%</ion-badge>\n\n                      </ion-row>\n\n                    </ion-col>\n\n                  </ion-row>\n\n              </ion-grid>\n\n           \n\n            <ion-card-header>Dias com controle:</ion-card-header>\n\n            <ion-grid>  \n\n              <ion-row>\n\n                <ion-col col-2 justify-content-center  *ngFor="let h of (dias  | async )" (click)="GoEdicao(h)">\n\n                    <ion-badge>{{h.dia}}</ion-badge>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n   \n\n\n\n\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12 col-xl-6  *ngFor="let h of (dias  | async )">\n\n          <ion-card class="card" (click)="GoEdicao(h)">\n\n          <ion-card-header>{{h.dia}}/{{h.mes}}/{{h.ano}}</ion-card-header>\n\n          <ion-grid no-padding>\n\n            <ion-row>\n\n              <ion-item-divider>Gastos:</ion-item-divider>\n\n              <ion-item>{{somaPagamento(h.total)}}</ion-item>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-item-divider>\n\n                    Saude\n\n                  </ion-item-divider>\n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Remédios: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{(h.remedios.length)}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Dentes: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{h.dentes.length}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n            <ion-item-divider>\n\n                Atividades\n\n              </ion-item-divider>\n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Atividades: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{h.atividades.length}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Passos: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{h.passos}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Peso: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{h.peso}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Andando: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{h.andando}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Correndo: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{h.correndo}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Tempinho: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{h.tempinho}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n      \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Quantidade: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{h.tempinhoQ}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Uhu: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{h.UHU}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n            <ion-item-divider>\n\n              Alimentação\n\n            </ion-item-divider>\n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Café: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{h.cafe}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Lanche: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{h.lancheM}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Almoço: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{h.almoco}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Lanche: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{h.lancheT}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Jantar: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{h.jantar}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n      \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Lanche: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{h.lancheN}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Doce: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{h.doce}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Refrigerante: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{h.refrigerante}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n          \n\n          \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Alcool: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{h.alcool}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n            <ion-item-divider>\n\n                Saude\n\n            </ion-item-divider>\n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Estudos: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{h.tempoE}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Aulas: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{h.tempoA}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Barba: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{Sinal(h.barba)}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Agradecimento: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{Sinal(h.agradecimento)}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Meditacao: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{Sinal(h.meditacao)}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Escrever: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{Sinal(h.escrever)}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Raser: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{Sinal(h.raser)}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Leitura: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{Sinal(h.leitura)}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n      \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Viagem: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{Sinal(h.viagem)}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n      \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Besteira: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{Sinal(h.besteira)}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n      \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Exercicios: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{Sinal(h.exercicios)}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Role: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{h.role.length}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n        \n\n            <ion-col col-4 col-xl-2 no-paddig>\n\n              <ion-row justify-content-center>\n\n                <ion-item no-lines justify-content-center>\n\n                  <ion-label class="nome2">Pessoas: </ion-label>\n\n                </ion-item>\n\n              </ion-row>\n\n              <ion-row justify-content-center>\n\n                <ion-badge>{{h.pessoas.length}}</ion-badge>\n\n              </ion-row>\n\n            </ion-col>\n\n            </ion-row>\n\n              \n\n        \n\n              <p margin ion-text>Remedios: {{h.remedios}} <br>\n\n                  Dentes: {{h.dentes}} <br> \n\n                  Atividades: {{h.atividades}} <br>\n\n                  Estudos: {{h.estudos}} <br>\n\n                  Role: {{h.role}} <br>\n\n                  Pessoas: {{h.pessoas}} <br>\n\n                  Resumo: {{h.resumo}} <br>\n\n                  Viagem: {{h.viagemLugar}}\n\n                </p>\n\n          </ion-grid>\n\n        </ion-card>\n\n              \n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n \n\n \n\n      \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\cards-do-mes\cards-do-mes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], CardsDoMesPage);
    return CardsDoMesPage;
}());

//# sourceMappingURL=cards-do-mes.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cards_do_mes_cards_do_mes__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CardsPage = /** @class */ (function () {
    function CardsPage(navCtrl, navParams, dbService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.controleArray = [];
        this.meses = this.Today();
        this.teste = (this.dbService.getAllEspecifico('diario', 'total', '20181026'));
        this.controle = this.dbService.getAll('diario', 'total');
        this.heightt = "500px";
        this.controleArray = this.CriaArray();
        this.compras = this.dbService.getAll('compras', 'total');
        this.ComprasArray = this.arrayCompras(this.compras);
        this.ArrayCompleto = this.CriaArrayCompleto;
        this.totais = [
            { title: "itens", parametro: "passos", tipo: 'Numero', arredonda: '0', nome: 'Passos', extra: '', quero: "maior" },
            { title: "itens", parametro: "peso", tipo: 'Numero', arredonda: '1', nome: 'Peso', extra: 'kg' },
            { title: "itens", parametro: "tempinho", tipo: 'Numero0', arredonda: '1', nome: 'Tempo', extra: 'm', quero: "maior" },
            { title: "itens", parametro: "tempinhoQ", tipo: 'Numero', arredonda: '1', nome: 'Quant', extra: '' },
            { title: "itens", parametro: "UHU", tipo: 'Numero', arredonda: '1', nome: 'Uhu', extra: '', quero: "maior" },
            { title: "itens", parametro: "cafe", tipo: 'Numero', arredonda: '2', nome: 'Cafe', extra: '' },
            { title: "itens", parametro: "almoco", tipo: 'Numero', arredonda: '2', nome: 'Almoco', extra: '' },
            { title: "itens", parametro: "jantar", tipo: 'Numero', arredonda: '2', nome: 'Jantar', extra: '' },
            { title: "itens", parametro: "leitura", tipo: 'TorF', arredonda: '0', nome: 'Ler', extra: '%', quero: "maior" },
            { title: "itens", parametro: "refrigerante", tipo: 'TorFNumber', arredonda: '0', nome: 'Refri', extra: '%' },
            { title: "itens", parametro: "alcool", tipo: 'TorFNumber', arredonda: '0', nome: 'Alcool', extra: '%' },
            { title: "itens", parametro: "alcool", tipo: 'TorFNumber', arredonda: '0', nome: 'Correr', extra: '%' },
            { title: "itens", parametro: "agradecimento", tipo: 'TorF', arredonda: '0', nome: 'Agrad.', extra: '%', quero: "maior" },
            { title: "itens", parametro: "tempoA", tipo: 'Numero', arredonda: '2', nome: 'Aula', extra: 'h', quero: "maior" },
            { title: "itens", parametro: "tempoE", tipo: 'Numero', arredonda: '2', nome: 'Estudo', extra: 'h', quero: "maior" },
        ];
    }
    CardsPage.prototype.CriaArrayCompleto = function () {
        var array = [];
        this.controle.forEach(function (itens) { return itens.forEach(function (item) {
            array.push(item);
        }); });
    };
    CardsPage.prototype.CriaArray = function () {
        var array = [];
        this.controle.forEach(function (element) {
            array.push(element);
        });
        return array;
    };
    CardsPage.prototype.RetornaMedia = function (Parcial, parametro, tipo) {
        var valor = 0;
        var contador = 0;
        if (tipo == "Numero") {
            this.controleArray.forEach(function (itens) {
                itens.forEach(function (item) {
                    if (item['parcial'] == Parcial) {
                        contador += 1;
                        valor += Number(item[parametro]);
                    }
                });
            });
            valor = valor / contador;
            return (valor);
        }
        if (tipo == "Numero0") {
            this.controleArray.forEach(function (itens) {
                itens.forEach(function (item) {
                    if (item['parcial'] == Parcial && item[parametro] != '0') {
                        contador += 1;
                        valor += Number(item[parametro] / item['tempinhoQ']);
                    }
                });
            });
            valor = valor / contador;
            return (valor);
        }
        if (tipo == "TorF") {
            this.controleArray.forEach(function (itens) {
                itens.forEach(function (item) {
                    if (item['parcial'] == Parcial) {
                        contador += 1;
                        if (item[parametro] == true) {
                            valor += 1;
                        }
                    }
                });
            });
            valor = valor * 100 / contador;
            return (valor);
        }
        if (tipo == "TorFNumber") {
            this.controleArray.forEach(function (itens) {
                itens.forEach(function (item) {
                    if (item['parcial'] == Parcial) {
                        contador += 1;
                        if (item[parametro] > 0) {
                            valor += 1;
                        }
                    }
                });
            });
            valor = valor * 100 / contador;
            return (valor);
        }
    };
    CardsPage.prototype.RetornaMediaTotal = function (Parcial, parametro, tipo) {
        var valor = 0;
        var contador = 0;
        if (tipo == "Numero") {
            this.controleArray.forEach(function (itens) {
                itens.forEach(function (item) {
                    contador += 1;
                    valor += Number(item[parametro]);
                });
            });
            valor = valor / contador;
            return (valor);
        }
        if (tipo == "Numero0") {
            this.controleArray.forEach(function (itens) {
                itens.forEach(function (item) {
                    if (item[parametro] != '0') {
                        contador += 1;
                        valor += Number(item[parametro]);
                    }
                });
            });
            valor = valor / contador;
            return (valor);
        }
        if (tipo == "TorF") {
            this.controleArray.forEach(function (itens) {
                itens.forEach(function (item) {
                    contador += 1;
                    if (item[parametro] == true) {
                        valor += 1;
                    }
                });
            });
            valor = valor * 100 / contador;
            return (valor);
        }
        if (tipo == "TorFNumber") {
            this.controleArray.forEach(function (itens) {
                itens.forEach(function (item) {
                    contador += 1;
                    if (item[parametro] > 0) {
                        valor += 1;
                    }
                });
            });
            valor = valor * 100 / contador;
            return (valor);
        }
    };
    CardsPage.prototype.VerificaMelhor = function (title, parametro, tipo, condicao) {
        var mes = this.RetornaMedia(title, parametro, tipo);
        var total = this.RetornaMediaTotal(title, parametro, tipo);
        var resultado = total - mes;
        if (resultado < 0) {
            if (condicao == 'maior') {
                return ('arrow-round-up');
            }
            else {
                return ("arrow-round-down");
            }
        }
        if (resultado > 0) {
            if (condicao == 'menor') {
                return ('arrow-round-up');
            }
            else {
                return ("arrow-round-down");
            }
        }
    };
    CardsPage.prototype.Arredonda = function (val, casas) {
        var b;
        b = (Math.round(val * Math.pow(10, casas)) / (Math.pow(10, casas)));
        return b;
    };
    CardsPage.prototype.Sinal = function (termo) {
        if (termo == true) {
            return "✔";
        }
        ;
        if (termo == false) {
            return "✘";
        }
    };
    CardsPage.prototype.Termos = function (termo) {
        var valor = ("termo".match(/,/g) || []).length;
        return valor;
    };
    CardsPage.prototype.Today = function () {
        var total;
        var array = [];
        var data = new Date();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 100 + (mes + 1));
        var comeco = 201810;
        var teste1 = (total - 201810);
        if (teste1 > 15) {
            while (comeco <= 201812) {
                array.push(comeco);
                comeco += 1;
            }
            comeco = 201901;
            while (comeco <= total) {
                array.push(comeco);
                comeco += 1;
            }
        }
        if (teste1 < 100) {
            while (comeco <= total) {
                array.push(comeco);
                comeco += 1;
            }
        }
        array = array.reverse();
        return array;
    };
    CardsPage.prototype.Mes = function () {
        return (this.dbService.getAllEspecifico('diario', 'total', '20181026'));
    };
    CardsPage.prototype.RetornaData = function (data) {
        data = String(data);
        var datinha = data.substr(0, 4);
        var datinha2 = data.substr(4, 2);
        if (datinha2 == 1) {
            datinha2 = "Janeiro";
        }
        if (datinha2 == 2) {
            datinha2 = "Fevereiro";
        }
        if (datinha2 == 3) {
            datinha2 = "Março";
        }
        if (datinha2 == 4) {
            datinha2 = "Abril";
        }
        if (datinha2 == 5) {
            datinha2 = "Maio";
        }
        if (datinha2 == 6) {
            datinha2 = "Junho";
        }
        if (datinha2 == 7) {
            datinha2 = "Julho";
        }
        if (datinha2 == 8) {
            datinha2 = "Agosto";
        }
        if (datinha2 == 9) {
            datinha2 = "Setembro";
        }
        if (datinha2 == 10) {
            datinha2 = "Outubro";
        }
        if (datinha2 == 11) {
            datinha2 = "Novembro";
        }
        if (datinha2 == 12) {
            datinha2 = "Dezembro";
        }
        var final = [datinha, datinha2].join(' - ');
        return final;
    };
    CardsPage.prototype.goToMes = function (itens) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cards_do_mes_cards_do_mes__["a" /* CardsDoMesPage */], { 'mes': itens,
            'gastos': this.ComprasArray });
    };
    CardsPage.prototype.arrayCompras = function (compras) {
        var array = [];
        var linha = [];
        compras.forEach(function (itens) { return itens.forEach(function (item) { linha = [], linha.push(item.payload, item.title, item.categoria, item.pagamento, item.total), array.push(linha); }); });
        return (array);
    };
    CardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cards',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\cards\cards.html"*/'<!--\n\n  Generated template for the CardsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Cards</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="goToMes(\'total\')">\n\n        <ion-icon name="calendar"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-row>\n\n    \n\n      <ion-col col-12 col-xl-6 *ngFor="let itens of meses" (click)="goToMes(itens)"> \n\n        <ion-card >\n\n          <button ion-item >{{RetornaData(itens)}}</button>\n\n          <ion-row justify-content-center>\n\n              <ion-col class="centralizado" justify-content-center col-2 col-xl-2 *ngFor="let total of totais">\n\n                <p class="centralizado"  justify-content-center>{{total.nome}}</p>\n\n                <ion-badge class="centralizado"  justify-content-center> {{Arredonda(RetornaMedia(itens,total.parametro,total.tipo),total.arredonda) }}{{total.extra}} \n\n                <ion-icon  name="{{VerificaMelhor(itens,total.parametro,total.tipo,\'maior\')}}"></ion-icon>\n\n                </ion-badge>\n\n              </ion-col>\n\n          </ion-row>\n\n        </ion-card>\n\n      </ion-col>\n\n    \n\n\n\n    <ion-col>\n\n      <ion-card>\n\n        <button ion-item>Total</button>\n\n        <ion-row justify-content-center>\n\n          <ion-col class="centralizado" justify-content-center col-2 col-xl-2 *ngFor="let total of totais">\n\n            <P class="centralizado"  justify-content-center>{{total.nome}}<p>\n\n            <ion-badge class="centralizado"  justify-content-center> {{Arredonda(RetornaMediaTotal(total.title,total.parametro,total.tipo),total.arredonda) }}{{total.extra}} </ion-badge>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\cards\cards.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], CardsPage);
    return CardsPage;
}());

//# sourceMappingURL=cards.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuracoes_edit_configuracoes_edit__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfiguracoesPage = /** @class */ (function () {
    function ConfiguracoesPage(navCtrl, navParams, dbService, alertCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.tarefa = {
            'title': '',
            'nivel': '',
            'check': true,
            'categoria': '',
            'ordem': Number(''),
        };
        this.remedio = {
            'title': '',
            'check': true,
            'ordem': Number(''),
        };
        this.dente = {
            'title': '',
            'check': true,
            'ordem': Number(''),
        };
        this.atividade = {
            'title': '',
            'check': true,
            'ordem': Number(''),
        };
        this.role = {
            'title': '',
            'check': true,
            'ordem': Number(''),
        };
        this.estudo = {
            'title': '',
            'check': true,
            'ordem': Number(''),
        };
        this.pessoa = {
            'title': '',
            'check': true,
            'ordem': Number(''),
        };
        this.viagem = {
            'pais': '',
            'check': true,
        };
        this.cidade = {
            'title': '',
            'check': true,
        };
        this.dia = {
            'title': Number(''),
        };
        this.show = {
            'title': '',
            'check': true,
            'ordem': Number('')
        };
        this.remedios = this.dbService.getAll('configuracoes/remedios', 'ordem');
        this.dentes = this.dbService.getAll('configuracoes/dentes', 'ordem');
        this.atividades = this.dbService.getAll('configuracoes/atividades', 'ordem');
        this.roles = this.dbService.getAll('configuracoes/roles', 'ordem');
        this.estudos = this.dbService.getAll('configuracoes/estudos', 'ordem');
        this.pessoas = this.dbService.getAll('configuracoes/pessoas', 'ordem');
        this.viagens = this.dbService.getAll('configuracoes/viagens', 'ordem');
        this.tarefas = this.dbService.getAll('configuracoes/tarefas', 'ordem');
        this.shows = this.dbService.getAll('configuracoes/shows', 'ordem');
        this.parametros = [{ title: 'atalho' },
            { title: 'categoria' },
            { title: 'configuracoes' },
            { title: 'diario' },
            { title: 'filmes' },
            { title: 'livros' },
            { title: 'pagamento' },
            { title: 'previsao' },
            { title: 'restaurantes' },
            { title: 'series' },
            { title: 'tarefas' },
            { title: 'trackers' },
            { title: 'vinhos' },
            { title: 'visual' },
            { title: 'restaurantes' },
        ];
        /** this.OrdemNumber() */
    }
    ConfiguracoesPage.prototype.Atualizar = function (tarefas, nome) {
        if (nome == 'remedios') {
            this.dbService.update('configuracoes/remedios', tarefas);
        }
        if (nome == 'dentes') {
            this.dbService.update('configuracoes/dentes', tarefas);
        }
        if (nome == 'atividades') {
            this.dbService.update('configuracoes/atividades', tarefas);
        }
        if (nome == 'roles') {
            this.dbService.update('configuracoes/roles', tarefas);
        }
        if (nome == 'estudos') {
            this.dbService.update('configuracoes/estudos', tarefas);
        }
        if (nome == 'pessoas') {
            this.dbService.update('configuracoes/pessoas', tarefas);
        }
        if (nome == 'viagens') {
            this.dbService.update('configuracoes/viagens', tarefas);
        }
        if (nome == 'tarefas') {
            this.dbService.update('configuracoes/tarefas', tarefas);
        }
        if (nome == 'shows') {
            this.dbService.update('configuracoes/shows', tarefas);
        }
    };
    ConfiguracoesPage.prototype.CriaNovo = function (local) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Novo:' + String(local),
            message: "Entre com o nome e ordem",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Nome',
                },
                {
                    name: 'ordem',
                    placeholder: "Ordem"
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Adicionar',
                    handler: function (data) {
                        if (local == "remedios") {
                            _this.remedio.title = data.title, _this.remedio.ordem = data.ordem;
                            _this.dbService.save('configuracoes/remedios', _this.remedio);
                        }
                        if (local == "dentes") {
                            _this.dente.title = data.title, _this.dente.ordem = data.ordem;
                            _this.dbService.save('configuracoes/dentes', _this.dente);
                        }
                        if (local == "atividades") {
                            _this.atividade.title = data.title, _this.atividade.ordem = data.ordem;
                            _this.dbService.save('configuracoes/atividades', _this.atividade);
                        }
                        if (local == "roles") {
                            _this.role.title = data.title, _this.role.ordem = data.ordem;
                            _this.dbService.save('configuracoes/roles', _this.role);
                        }
                        if (local == "estudos") {
                            _this.estudo.title = data.title, _this.estudo.ordem = data.ordem;
                            _this.dbService.save('configuracoes/estudos', _this.estudo);
                        }
                        if (local == "pessoas") {
                            _this.pessoa.title = data.title, _this.pessoa.ordem = Number(data.ordem);
                            _this.dbService.save('configuracoes/pessoas', _this.pessoa);
                        }
                        if (local == "shows") {
                            _this.show.title = data.title, _this.show.ordem = Number(data.ordem);
                            _this.dbService.save('configuracoes/shows2', _this.show);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    ConfiguracoesPage.prototype.OrdemNumber = function () {
        var _this = this;
        this.tarefas.forEach(function (element) { element.forEach(function (item) { item.ordem = Number(item.ordem); _this.dbService.update('configuracoes/tarefas', item); }); });
        this.remedios.forEach(function (element) { element.forEach(function (item) { item.ordem = Number(item.ordem); _this.dbService.update('configuracoes/remedios', item); }); });
        this.atividades.forEach(function (element) { element.forEach(function (item) { item.ordem = Number(item.ordem); _this.dbService.update('configuracoes/atividades', item); }); });
        this.roles.forEach(function (element) { element.forEach(function (item) { item.ordem = Number(item.ordem); _this.dbService.update('configuracoes/roles', item); }); });
        this.estudos.forEach(function (element) { element.forEach(function (item) { item.ordem = Number(item.ordem); _this.dbService.update('configuracoes/estudos', item); }); });
        this.pessoas.forEach(function (element) { element.forEach(function (item) { item.ordem = Number(item.ordem); _this.dbService.update('configuracoes/pessoas', item); }); });
        this.dentes.forEach(function (element) { element.forEach(function (item) { item.ordem = Number(item.ordem); _this.dbService.update('configuracoes/dentes', item); }); });
    };
    ConfiguracoesPage.prototype.CriaTarefa = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Nova Tarefa',
            message: "Entre com o nome e ordem",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Nome',
                },
                {
                    name: 'nivel',
                    placeholder: "Nivel"
                },
                {
                    name: 'categoria',
                    placeholder: "Categoria"
                },
                {
                    name: 'ordem',
                    placeholder: "Ordem"
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Adicionar',
                    handler: function (data) {
                        _this.tarefa.title = data.title, _this.tarefa.ordem = data.ordem;
                        _this.tarefa.nivel = data.nivel;
                        _this.tarefa.categoria = data.categoria;
                        _this.dbService.save('configuracoes/tarefas', _this.tarefa);
                    }
                }
            ]
        });
        prompt.present();
    };
    ConfiguracoesPage.prototype.GoToEdit = function (edicao) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__configuracoes_edit_configuracoes_edit__["a" /* ConfiguracoesEditPage */], { 'edicao': edicao });
    };
    ConfiguracoesPage.prototype.Opcoes = function (track, local) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Opções',
            buttons: [
                {
                    text: 'Deletar',
                    handler: function () {
                        _this.Deletar(track, local);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ConfiguracoesPage.prototype.Deletar = function (track, local) {
        console.log(track.key, local, String('configuracoes/' + local));
        this.dbService.revome(String('configuracoes/' + local), track);
    };
    ConfiguracoesPage.prototype.CriaBackup = function () {
        var _this = this;
        var obs;
        var backup = [];
        this.parametros.forEach(function (nome) {
            obs = _this.dbService.getAll(nome.title, 'total');
            obs.forEach(function (element) { backup.push(element); });
        });
        var array = [this.parametros, this.parametros];
        setTimeout(function () {
            _this.dbService.save('backup', backup);
            console.log('enviei', _this.parametros);
        }, 10000);
    };
    ConfiguracoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configuracoes',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\configuracoes\configuracoes.html"*/'<!--\n  Generated template for the ConfiguracoesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Configuracoes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-item-group>\n      <ion-item-divider color="light" (click)="CriaNovo(\'remedios\')" >Remédio</ion-item-divider>\n      <ion-item *ngFor="let f of (remedios | async)">\n      <ion-label> {{f.ordem}} - {{f.title}} </ion-label>\n          <ion-checkbox  [(ngModel)]="f.check" color="dark" checked="f.check" (click) ="Atualizar(f,\'remedios\')" (press)="Opcoes(f,\'remedios\')" ></ion-checkbox>\n        </ion-item>\n    </ion-item-group>\n\n    <ion-item-group>\n      <ion-item-divider color="light" (click)="CriaNovo(\'dentes\')" >Dentes</ion-item-divider>\n      <ion-item *ngFor="let f of (dentes | async)">\n      <ion-label> {{f.ordem}} - {{f.title}} </ion-label>\n          <ion-checkbox  [(ngModel)]="f.check" color="dark" checked="f.check" (click) ="Atualizar(f,\'dentes\')" (press)="Opcoes(f,\'dentes\')" ></ion-checkbox>\n        </ion-item>\n    </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color="light" (click)="CriaNovo(\'atividades\')" >Atividades</ion-item-divider>\n    <ion-item *ngFor="let f of (atividades | async)">\n    <ion-label> {{f.ordem}} - {{f.title}} </ion-label>\n        <ion-checkbox  [(ngModel)]="f.check" color="dark" checked="f.check" (click) ="Atualizar(f,\'atividades\')" (press)="Opcoes(f,\'atividades\')" ></ion-checkbox>\n      </ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color="light" (click)="CriaNovo(\'roles\')" >Roles</ion-item-divider>\n    <ion-item *ngFor="let f of (roles | async)">\n      <ion-label> {{f.ordem}} - {{f.title}} </ion-label>\n        <ion-checkbox (press)="Opcoes(f,\'roles\')" [(ngModel)]="f.check" color="dark" checked="f.check" (click) ="Atualizar(f,\'roles\')" (press)="Opcoes(f,\'roles\')"></ion-checkbox>\n      </ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color="light" (click)="CriaNovo(\'estudos\')" >Estudos</ion-item-divider>\n    <ion-item *ngFor="let f of (estudos | async)">\n      <ion-label> {{f.ordem}} - {{f.title}} </ion-label>\n        <ion-checkbox (press)="Opcoes(f,\'roles\')" [(ngModel)]="f.check" color="dark" checked="f.check" (click) ="Atualizar(f,\'estudos\')" (press)="Opcoes(f,\'estudos\')"></ion-checkbox>\n      </ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color="light" (click)="CriaNovo(\'pessoas\')" >Pessoas</ion-item-divider>\n    <ion-item *ngFor="let f of (pessoas | async)">\n      <ion-label> {{f.ordem}} - {{f.title}} </ion-label>\n        <ion-checkbox (press)="Opcoes(f,\'pessoas\')" [(ngModel)]="f.check" color="dark" checked="f.check" (click) ="Atualizar(f,\'pessoas\')" (press)="Opcoes(f,\'pessoas\')"></ion-checkbox>\n      </ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color="light" (click)="CriaTarefa()" >Tarefas</ion-item-divider>\n    <ion-item *ngFor="let f of (tarefas | async)">\n      <ion-label> {{f.ordem}} - {{f.title}} - Nível:{{f.nivel}} </ion-label>\n        <ion-checkbox  (press)="Opcoes(f,\'tarefas\')" [(ngModel)]="f.check" color="dark" checked="f.check" (click) ="Atualizar(f,\'tarefa\')"></ion-checkbox>\n      </ion-item>\n  </ion-item-group>\n  <ion-item-group>\n      <ion-item-divider color="light" (click)="CriaNovo(\'shows\')" >Show</ion-item-divider>\n      <ion-item *ngFor="let f of (shows | async)">\n        <ion-label> {{f.ordem}} - {{f.title}}</ion-label>\n          <ion-checkbox  [(ngModel)]="f.check" color="dark" checked="f.check" (click) ="Atualizar(f,\'tarefa\')"></ion-checkbox>\n        </ion-item>\n    </ion-item-group>\n\n    <ion-item-group>\n      <ion-item-divider color="light" (click)="CriaBackup()" >Backup</ion-item-divider>\n      <ion-item *ngFor="let f of (backup | async)">\n        <ion-label>Teste</ion-label>\n          <ion-checkbox  [(ngModel)]="f.check" color="dark" checked="f.check" (click) ="Atualizar(f,\'tarefa\')"></ion-checkbox>\n        </ion-item>\n    </ion-item-group>\n\n  \n\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\configuracoes\configuracoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ConfiguracoesPage);
    return ConfiguracoesPage;
}());

//# sourceMappingURL=configuracoes.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmeEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FilmeEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilmeEditPage = /** @class */ (function () {
    function FilmeEditPage(navCtrl, navParams, dbService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.filme = this.navParams.get('filme');
        this.Genero = [
            { title: "Ação" },
            { title: "Comédia" },
            { title: "Drama" },
            { title: "Romance" },
            { title: "Super-heroi" },
            { title: "Suspense" },
            { title: "Teror" },
            { title: "Animação" },
            { title: "Plot Twist" },
            { title: "Real" },
            { title: "Clássico" },
            { title: "Teen" },
            { title: "Ficção Científica" },
            { title: "Musical" },
            { title: "Nacional" },
            { title: "Estrangeiro" },
            { title: "" }
        ];
        this.Premiacao = [
            { title: "Oscar" },
            { title: "Indicação ao Oscar" },
            { title: "Clássico" },
            { title: "Globo de ouro" },
            { title: "Outro" },
            { title: "" }
        ];
    }
    FilmeEditPage_1 = FilmeEditPage;
    FilmeEditPage.prototype.Data = function () {
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        var array = [dia, mes, ano];
        return array;
    };
    FilmeEditPage.prototype.Criacao = function (filme) {
        var array = this.Data();
        this.filme.dia = String(array[0]);
        this.filme.mes = String(array[1]);
        this.filme.ano = String(array[2]);
        this.filme.total = String(this.Total());
        this.filme.parcial = String(this.Parcial());
        this.dbService.save('filmes', filme);
    };
    FilmeEditPage.prototype.Total = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia);
        return total;
    };
    FilmeEditPage.prototype.Total2 = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia - 1);
        return total;
    };
    FilmeEditPage.prototype.Parcial = function () {
        var total;
        var data = new Date();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 100 + (mes + 1));
        return total;
    };
    FilmeEditPage.prototype.Ontem = function (filme) {
        var array = this.Data();
        this.filme.dia = String(array[0] - 1);
        this.filme.mes = String(array[1]);
        this.filme.ano = String(array[2]);
        this.filme.total = String(this.Total2());
        this.filme.parcial = String(this.Parcial());
        this.dbService.save('filmes', filme);
    };
    FilmeEditPage.prototype.goToEdit = function (itens) {
        this.navCtrl.push(FilmeEditPage_1, { 'filme': itens, });
    };
    FilmeEditPage.prototype.Atualizar = function (filme) {
        var _this = this;
        this.dbService.update('filmes', filme).then(function (d) {
            _this.navCtrl.pop();
        });
    };
    FilmeEditPage.prototype.Deletar = function (filme) {
        var _this = this;
        this.dbService.revome('filmes', filme).then(function (d) {
            _this.navCtrl.pop();
        });
    };
    var FilmeEditPage_1;
    FilmeEditPage = FilmeEditPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filme-edit',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\filme-edit\filme-edit.html"*/'<!--\n  Generated template for the FilmeEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editar Filme</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row class="roww">\n      <ion-item>\n        <ion-label class="nome" >Dia: </ion-label>\n        <ion-input text-right type="number"  value="" [(ngModel)]="filme.dia"></ion-input>\n      </ion-item>\n    </ion-row>\n\n    <ion-row class="roww">\n      <ion-item>\n        <ion-label class="nome" >Mes: </ion-label>\n        <ion-input text-right type="number"  value="" [(ngModel)]="filme.mes"></ion-input>\n      </ion-item>\n    </ion-row>\n\n    <ion-row class="roww">\n      <ion-item>\n        <ion-label class="nome" >Ano: </ion-label>\n        <ion-input text-right type="number"  value="" [(ngModel)]="filme.ano"></ion-input>\n      </ion-item>\n    </ion-row>\n\n    <ion-row class="roww">\n      <ion-item>\n        <ion-label class="nome" >Total: </ion-label>\n        <ion-input text-right type="number"  value="" [(ngModel)]="filme.total"></ion-input>\n      </ion-item>\n    </ion-row>\n\n    <ion-row class="roww">\n      <ion-item>\n        <ion-label class="nome" >Parcial: </ion-label>\n        <ion-input text-right type="number"  value="" [(ngModel)]="filme.parcial"></ion-input>\n      </ion-item>\n    </ion-row>\n\n    <ion-row class="roww">\n      <ion-item>\n        <ion-label class="nome" >Título: </ion-label>\n        <ion-input text-right type="text"  value="" [(ngModel)]="filme.title"></ion-input>\n      </ion-item>\n    </ion-row>\n\n    <ion-row class="roww">\n      <ion-item>\n        <ion-label class="nome" >Nota: </ion-label>\n        <ion-input text-right type="number"  value="" [(ngModel)]="filme.nota"></ion-input>\n      </ion-item>\n    </ion-row>\n\n    <ion-row class="roww">\n      <ion-item>\n        <ion-label class="nome" >Diretor: </ion-label>\n        <ion-input text-right type="text"  value="" [(ngModel)]="filme.diretor"></ion-input>\n      </ion-item>\n    </ion-row>\n\n    <ion-row class="roww">\n      <ion-item>\n        <ion-label class="nome" >Ano: </ion-label>\n        <ion-input text-right type="number"  value="" [(ngModel)]="filme.lancamento"></ion-input>\n      </ion-item>\n    </ion-row>\n\n    <ion-row  class="roww">\n      <ion-item>\n        <ion-label class="nome">Genero: </ion-label>\n          <ion-select class="input" [(ngModel)]="filme.genero" interface="popover" multiple =  True>\n            <ion-option *ngFor="let gen of Genero">{{gen.title}}</ion-option>\n          </ion-select>\n      </ion-item>\n    </ion-row>\n\n    <ion-row  class="roww">\n      <ion-item>\n        <ion-label class="nome">Prémios: </ion-label>\n          <ion-select class="input" [(ngModel)]="filme.premios" interface="popover" multiple =  True>\n            <ion-option *ngFor="let prem of Premiacao">{{prem.title}}</ion-option>\n          </ion-select>\n      </ion-item>\n    </ion-row>\n    \n\n    <ion-row>\n      <ion-col col-4 no-paddig>\n        <ion-row justify-content-center>\n          <ion-item no-lines justify-content-center>\n            <ion-label class="nome2">Netflix: </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row justify-content-center>\n          <ion-toggle class="toggle" checked="false" [(ngModel)]="filme.netflix" ></ion-toggle>\n        </ion-row>\n      </ion-col>\n    \n\n    \n      <ion-col col-4 no-paddig>\n        <ion-row justify-content-center>\n          <ion-item no-lines justify-content-center>\n            <ion-label class="nome2">Cinema: </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row justify-content-center>\n          <ion-toggle class="toggle" checked="false" [(ngModel)]="filme.cinema" ></ion-toggle>\n        </ion-row>\n      </ion-col>\n   \n\n    \n      <ion-col col-4 no-paddig>\n        <ion-row justify-content-center>\n          <ion-item no-lines justify-content-center>\n            <ion-label class="nome2">Produção Netflix: </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row justify-content-center>\n          <ion-toggle class="toggle" checked="false" [(ngModel)]="filme.producaoN" ></ion-toggle>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-item>\n        <ion-label class="nome" no-padding >Resumo: </ion-label>\n        <ion-textarea   (click)="roww()" style="color: black; font-size: 13px;" rows="5" autocomplete="on" autocorrect="on" type="text" value="" [(ngModel)]="filme.comentario"></ion-textarea>\n      </ion-item>\n    </ion-row>\n    \n\n\n  </ion-grid>\n\n    <ion-row justify-content-center>\n      <button class="btn3" round small  color="danger" ion-button outline (click)="Deletar(filme)">Deletar</button>\n      <button class="btn3" round small ion-button outline (click)="Atualizar(filme)">Atualizar</button>\n   </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\filme-edit\filme-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], FilmeEditPage);
    return FilmeEditPage;
}());

//# sourceMappingURL=filme-edit.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filme_edit_filme_edit__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FilmesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilmesPage = /** @class */ (function () {
    function FilmesPage(navCtrl, navParams, dbService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.alertCtrl = alertCtrl;
        this.filme = {
            'dia': '',
            'mes': '',
            'ano': '',
            'total': '',
            'parcial': '',
            'title': '',
            'nota': '',
            'diretor': '',
            'comentario': '',
            'lancamento': '',
            'premios': '',
            'genero': '',
            'cinema': false,
            'netflix': false,
            'producaoN': false,
        };
        this.show = false;
        this.Filmes = this.dbService.getAll('filmes', 'total').map(function (a) { return a.reverse(); });
        this.DataO = new Date().toISOString();
        this.Genero = [
            { title: "Ação" },
            { title: "Comédia" },
            { title: "Drama" },
            { title: "Romance" },
            { title: "Super-heroi" },
            { title: "Suspense" },
            { title: "Teror" },
            { title: "Animação" },
            { title: "Plot Twist" },
            { title: "Real" },
            { title: "Clássico" },
            { title: "Teen" },
            { title: "Ficção Científica" },
            { title: "Musical" },
            { title: "Nacional" },
            { title: "Estrangeiro" },
            { title: "" }
        ];
        this.Premiacao = [
            { title: "Oscar" },
            { title: "Indicação ao Oscar" },
            { title: "Clássico" },
            { title: "Globo de ouro" },
            { title: "Outro" },
            { title: "" }
        ];
    }
    FilmesPage.prototype.Data = function () {
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        var array = [dia, mes, ano];
        return array;
    };
    FilmesPage.prototype.Criacao = function (filme) {
        this.MudandoData(this.DataO);
        this.dbService.save('filmes', filme);
    };
    FilmesPage.prototype.Total = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia);
        return total;
    };
    FilmesPage.prototype.Total2 = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia - 1);
        return total;
    };
    FilmesPage.prototype.Parcial = function () {
        var total;
        var data = new Date();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 100 + (mes + 1));
        return total;
    };
    FilmesPage.prototype.Ontem = function (filme) {
        var date = new Date;
        date.setDate(date.getDate() - 1);
        this.DataO = date.toISOString();
        this.MudandoData(this.DataO);
        this.dbService.save('filmes', filme);
    };
    FilmesPage.prototype.goToEdit = function (itens) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__filme_edit_filme_edit__["a" /* FilmeEditPage */], { 'filme': itens, });
    };
    FilmesPage.prototype.AtualizarP = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    FilmesPage.prototype.Show = function () {
        this.show = !this.show;
        return (this.show);
    };
    FilmesPage.prototype.Informacoes = function (filme) {
        var alert = this.alertCtrl.create({
            title: filme.title,
            subTitle: ("Data: " + filme.dia + "/" + filme.mes + "/" + filme.ano + "<br>Tipo: " + filme.genero + "<br>Nota: " + filme.nota + "<br>Diretor: " + filme.diretor + "<br>Comentario: " + filme.comentario),
            buttons: ['OK']
        });
        alert.present();
    };
    FilmesPage.prototype.Mostra = function () {
        this.MudandoData(this.DataO);
    };
    FilmesPage.prototype.MudandoData = function (valor) {
        console.log("Data Aqui", valor);
        var fields = valor.split('-');
        var dia = fields[2].split('T');
        this.filme.dia = dia[0];
        this.filme.ano = fields[0];
        this.filme.mes = String(Number(fields[1]));
        this.filme.total = String(Number(Number(this.filme.ano) * 10000 + Number(this.filme.mes) * 100 + Number(dia[0])));
        this.filme.parcial = String(Number(Number(this.filme.ano) * 100 + Number(this.filme.mes)));
    };
    FilmesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filmes',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\filmes\filmes.html"*/'<!--\n  Generated template for the FilmesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Filmes</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="AtualizarP()">\n        <ion-icon name="sync"></ion-icon>\n    </button>\n    <button ion-button icon-only (click)="Show()">\n        <ion-icon name="calendar"></ion-icon>\n    </button>\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row class="roww">\n      <ion-item>\n        <ion-label class="nome" >Título: </ion-label>\n        <ion-input text-right type="text"  value="" [(ngModel)]="filme.title"></ion-input>\n      </ion-item>\n    </ion-row>\n\n    <ion-row class="roww">\n      <ion-item>\n        <ion-label class="nome" >Nota: </ion-label>\n        <ion-input text-right type="number"  value="" [(ngModel)]="filme.nota"></ion-input>\n      </ion-item>\n    </ion-row>\n\n    <ion-row class="roww">\n      <ion-item>\n        <ion-label class="nome" >Diretor: </ion-label>\n        <ion-input text-right type="text"  value="" [(ngModel)]="filme.diretor"></ion-input>\n      </ion-item>\n    </ion-row>\n\n    <ion-row class="roww">\n      <ion-item>\n        <ion-label class="nome" >Ano: </ion-label>\n        <ion-input text-right type="number"  value="" [(ngModel)]="filme.lancamento"></ion-input>\n      </ion-item>\n    </ion-row>\n\n    <ion-row  class="roww">\n      <ion-item>\n        <ion-label class="nome">Genero: </ion-label>\n          <ion-select class="input" [(ngModel)]="filme.genero" interface="popover" multiple =  True>\n            <ion-option *ngFor="let gen of Genero">{{gen.title}}</ion-option>\n          </ion-select>\n      </ion-item>\n    </ion-row>\n\n    <ion-row  class="roww">\n      <ion-item>\n        <ion-label class="nome">Prémios: </ion-label>\n          <ion-select class="input" [(ngModel)]="filme.premios" interface="popover" multiple =  True>\n            <ion-option *ngFor="let prem of Premiacao">{{prem.title}}</ion-option>\n          </ion-select>\n      </ion-item>\n    </ion-row>\n\n    <ion-row class ="roww">\n      <ion-item>\n        <ion-label class="nome" no-padding (click)="Mostra()">Data</ion-label>\n        <ion-datetime  (click)="Mostra()" displayFormat="DD/MM/YYYY" [(ngModel)]="DataO"></ion-datetime>\n      </ion-item>\n    </ion-row>\n\n\n    <ion-row>\n        <ion-item>\n          <ion-label class="nome" no-padding >Comentário: </ion-label>\n          <ion-textarea   (click)="roww()" style="color: black; font-size: 13px;" rows="3" autocomplete="on" autocorrect="on" type="text" value="" [(ngModel)]="filme.comentario"></ion-textarea>\n        </ion-item>\n      </ion-row>\n    \n\n    <ion-row>\n      <ion-col col-4 no-paddig>\n        <ion-row justify-content-center>\n          <ion-item no-lines justify-content-center>\n            <ion-label class="nome2">Netflix: </ion-label>\n          </ion-item>\n          \n        </ion-row>\n        <ion-row justify-content-center>\n          <ion-toggle class="toggle" checked="false" [(ngModel)]="filme.netflix" ></ion-toggle>\n        </ion-row>\n      </ion-col>\n    \n\n    \n      <ion-col col-4 no-paddig>\n        <ion-row justify-content-center>\n          <ion-item no-lines justify-content-center>\n            <ion-label class="nome2">Cinema: </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row justify-content-center>\n          <ion-toggle class="toggle" checked="false" [(ngModel)]="filme.cinema" ></ion-toggle>\n        </ion-row>\n      </ion-col>\n   \n\n    \n      <ion-col col-4 no-paddig>\n        <ion-row justify-content-center>\n          <ion-item no-lines justify-content-center>\n            <ion-label class="nome2">Produção Netflix: </ion-label>\n          </ion-item>\n        </ion-row>\n        <ion-row justify-content-center>\n          <ion-toggle class="toggle" checked="false" [(ngModel)]="filme.producaoN" ></ion-toggle>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    \n    \n\n\n  </ion-grid>\n\n\n  \n    <ion-row justify-content-center>\n      <button class="btn3" round small ion-button outline (click)="Ontem(filme)">Ontem</button>\n      <button class="btn3" round small ion-button  (click)="Criacao(filme)">Adicionar</button>\n   </ion-row>\n\n   <ion-list>\n    <button ion-item *ngFor="let f of (Filmes  | async) " (click)="goToEdit(f)" (press)="Informacoes(f)">\n      <h2> {{ f.title }}</h2>\n      <ion-icon *ngIf="f.cinema == true" style="color: black" name="film" item-end></ion-icon>\n      <ion-icon *ngIf="f.cinema == false" style="color: rgb(233, 233, 233)" name="film" item-end></ion-icon>\n      <ion-note *ngIf="show==true" item-end ><p>{{f.dia}}/{{f.mes}}/{{f.ano}}</p></ion-note>\n      \n    \n    </button>  \n  </ion-list>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\filmes\filmes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], FilmesPage);
    return FilmesPage;
}());

//# sourceMappingURL=filmes.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivrosEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LivrosEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LivrosEditPage = /** @class */ (function () {
    function LivrosEditPage(navCtrl, navParams, dbService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.livro = this.navParams.get('livro');
    }
    LivrosEditPage.prototype.Final = function (livro) {
        this.livro.fim = this.Total();
    };
    LivrosEditPage.prototype.Total = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia);
        return total;
    };
    LivrosEditPage.prototype.Atualizar = function (tarefa) {
        var _this = this;
        this.dbService.update('livros', tarefa).then(function (d) {
            _this.navCtrl.pop();
        });
    };
    LivrosEditPage.prototype.Deletar = function (tarefa) {
        var _this = this;
        this.dbService.revome('livros', tarefa).then(function (d) {
            _this.navCtrl.pop();
        });
    };
    LivrosEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-livros-edit',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\livros-edit\livros-edit.html"*/'<!--\n  Generated template for the LivrosEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editar Livro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-grid>\n      <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Dia: </ion-label>\n            <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="livro.dia"></ion-input>\n          </ion-item>\n        </ion-row>\n  \n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Mes: </ion-label>\n            <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="livro.mes"></ion-input>\n          </ion-item>\n        </ion-row>\n  \n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Ano: </ion-label>\n            <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="livro.ano"></ion-input>\n          </ion-item>\n        </ion-row>\n  \n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Total: </ion-label>\n            <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="livro.total"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Título: </ion-label>\n            <ion-input text-right type="text"  value="" [(ngModel)]="livro.title"></ion-input>\n          </ion-item>\n        </ion-row>\n  \n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Autor: </ion-label>\n            <ion-input text-right type="text"  value="" [(ngModel)]="livro.autor"></ion-input>\n          </ion-item>\n        </ion-row>\n    \n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Paginas: </ion-label>\n            <ion-input text-right type="number"  value="" [(ngModel)]="livro.paginas"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Idioma: </ion-label>\n            <ion-input text-right type="text"  value="" [(ngModel)]="livro.idioma"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row class="roww">\n            <ion-item>\n              <ion-label class="nome" >Fim: </ion-label>\n              <ion-input text-right type="number"  value="" [(ngModel)]="livro.fim"></ion-input>\n            </ion-item>\n          </ion-row>\n\n        <ion-row>\n            <ion-item>\n              <ion-label class="nome" no-padding>Comentário: </ion-label>\n              <ion-textarea   (click)="roww()" style="color: black; font-size: 13px;" rows="3" autocomplete="on" autocorrect="on" type="text" value="" [(ngModel)]="livro.comentario"></ion-textarea>\n            </ion-item>\n          </ion-row>\n        </ion-grid>\n        \n        <ion-row justify-content-center>\n            <button class="btn3" round small ion-button outline (click)="Final(livro)">Fim</button>\n            <button class="btn3" round small ion-button outline color="danger" (click)="Deletar(livro)">Deletar</button>\n            <button class="btn3" round small ion-button outline (click)="Atualizar(livro)">Atualizar</button>\n          </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\livros-edit\livros-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], LivrosEditPage);
    return LivrosEditPage;
}());

//# sourceMappingURL=livros-edit.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivrosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__livros_edit_livros_edit__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LivrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LivrosPage = /** @class */ (function () {
    function LivrosPage(navCtrl, navParams, dbService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.alertCtrl = alertCtrl;
        this.livro = {
            'dia': '',
            'mes': '',
            'ano': '',
            'total': '',
            'parcial': '',
            'title': '',
            'autor': '',
            'paginas': '',
            'idioma': '',
            'comentario': '',
            'fim': '',
        };
        this.livros = this.dbService.getAll('livros', 'total').map(function (a) { return a.reverse(); });
    }
    LivrosPage.prototype.Data = function () {
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        var array = [dia, mes, ano];
        return array;
    };
    LivrosPage.prototype.Criacao = function (livro) {
        var array = this.Data();
        this.livro.dia = String(array[0]);
        this.livro.mes = String(array[1]);
        this.livro.ano = String(array[2]);
        this.livro.total = String(this.Total());
        this.livro.parcial = String(this.Parcial());
        this.dbService.save('livros', livro);
    };
    LivrosPage.prototype.Total = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia);
        return total;
    };
    LivrosPage.prototype.Total2 = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia - 1);
        return total;
    };
    LivrosPage.prototype.Parcial = function () {
        var total;
        var data = new Date();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 100 + (mes + 1));
        return total;
    };
    LivrosPage.prototype.Ontem = function (livro) {
        var array = this.Data();
        this.livro.dia = String(array[0] - 1);
        this.livro.mes = String(array[1]);
        this.livro.ano = String(array[2]);
        this.livro.total = String(this.Total2());
        this.livro.parcial = String(this.Parcial());
        this.dbService.save('livros', livro);
    };
    LivrosPage.prototype.goToEdit = function (itens) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__livros_edit_livros_edit__["a" /* LivrosEditPage */], { 'livro': itens });
    };
    LivrosPage.prototype.Alert = function (item) {
        var alert = this.alertCtrl.create({
            title: item.title,
            subTitle: ("Data: " + item.dia + "/" + item.mes + "/" + item.ano + "<br>Autor: " + item.autor + "<br>Páginas: " + item.paginas + "<br>Fim:" + item.fim + "<br>Comentario: " + item.comentario),
            buttons: ['OK']
        });
        alert.present();
    };
    LivrosPage.prototype.CalculaDias = function (final, inicio) {
        final = String(final);
        console.log(final, inicio);
        var ano1 = inicio.substr(0, 4);
        var mes1 = inicio.substr(4, 2);
        var dia1 = inicio.substr(6, 2);
        var ano2 = final.substr(0, 4);
        var mes2 = final.substr(4, 2);
        var dia2 = final.substr(6, 2);
        var date1 = new Date(mes1 + '/' + dia1 + '/' + ano1);
        var date2 = new Date(mes2 + '/' + dia2 + '/' + ano2);
        console.log(date1, date2);
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        console.log(diffDays);
        return (diffDays);
    };
    LivrosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-livros',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\livros\livros.html"*/'<!--\n  Generated template for the LivrosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Livros</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-grid>\n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Título: </ion-label>\n            <ion-input text-right type="text"  value="" [(ngModel)]="livro.title"></ion-input>\n          </ion-item>\n        </ion-row>\n  \n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Autor: </ion-label>\n            <ion-input text-right type="text"  value="" [(ngModel)]="livro.autor"></ion-input>\n          </ion-item>\n        </ion-row>\n    \n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Paginas: </ion-label>\n            <ion-input text-right type="number"  value="" [(ngModel)]="livro.paginas"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Idioma: </ion-label>\n            <ion-input text-right type="text"  value="" [(ngModel)]="livro.idioma"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n            <ion-item>\n              <ion-label class="nome" no-padding>Comentário: </ion-label>\n              <ion-textarea   (click)="roww()" style="color: black; font-size: 13px;" rows="3" autocomplete="on" autocorrect="on" type="text" value="" [(ngModel)]="livro.comentario"></ion-textarea>\n            </ion-item>\n          </ion-row>\n        </ion-grid>\n\n      \n      <ion-row justify-content-center>\n        <button class="btn3" round small ion-button outline (click)="Ontem(livro)">Ontem</button>\n        <button class="btn3" round small ion-button (click)="Criacao(livro)">Adicionar</button>\n      </ion-row>\n\n      <ion-list>\n      <button ion-item *ngFor="let f of (livros | async) " (click)="goToEdit(f)" (press)="Alert(f)">\n        <h2> {{ f.title }}  </h2>\n        <h2 *ngIf="f.fim != \'\'"> {{CalculaDias(f.fim,f.total)}}</h2>\n        <ion-icon *ngIf="f.fim != \'\'" style="color: black" name="book" item-end></ion-icon>\n        <ion-icon *ngIf="f.fim == \'\'" style="color: rgb(233, 233, 233)" name="book" item-end></ion-icon>\n      </button>  \n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\livros\livros.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], LivrosPage);
    return LivrosPage;
}());

//# sourceMappingURL=livros.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotasPage = /** @class */ (function () {
    function NotasPage(navCtrl, navParams, dbService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.DiasArray = navParams.get('Dias');
        this.DiasDiasArray = this.CriaDiasDias();
        this.ArrayTrackers = navParams.get('TrackerArray');
        this.ArrayOb = navParams.get('ArrayOb');
        this.valores = this.valores = [0.5, 1, 2, 4, 6, 4];
        this.NotasArray = this.CriaArrayNotas();
        console.log(this.DiasDiasArray);
        this.NotasMedia = this.CriaArrayMedia();
        console.log(this.NotasMedia, 'aquiiiii');
    }
    NotasPage.prototype.CriaArrayMedia = function () {
        var cont = 0;
        var sum = 0;
        var array = [];
        var array2 = [];
        var array3 = [];
        var array4 = [];
        var array5 = [];
        var array6 = [];
        var array7 = [];
        var v1 = 0;
        var v2 = 0;
        var v3 = 0;
        var v4 = 0;
        var v5 = 0;
        var v6 = 0;
        var v7 = 0;
        var Med;
        this.NotasArray.forEach(function (element) {
            cont += 1,
                (v7 = v6, v6 = v5, v5 = v4, v4 = v3, v3 = v2, v2 = v1), v1 = element, Med = ((Number(v1)) + (Number(v2)) + (Number(v3)) + (Number(v4)) + (Number(v5)) + (Number(v6)) + (Number(v7))) / 7;
            array5.push(Med);
            if (cont % 7 == 0) {
                array6.push(Med, Med, Med, Med, Med, Med, Med);
            }
            array7.push(8000);
        });
        array3 = [array, array2, array4, array5, array6, array7];
        return array6;
    };
    NotasPage.prototype.Pontua = function (total) {
        var valores = this.valores;
        var horas = [0, 0, 0, 0, 0, 0];
        this.ArrayTrackers.forEach(function (item) { if (item['total'] == total) {
            horas[(Number(item['nivel']) + 2)] += Number(item['duracao']);
        } });
        var i = 0;
        var final = 0;
        while (i < 6) {
            final += horas[i] * valores[i];
            i += 1;
        }
        return (final);
    };
    NotasPage.prototype.CriaDiasDias = function () {
        var _this = this;
        var array = [];
        this.DiasArray.forEach(function (element) {
            var data = new Date(_this.DivideData(element[0])[0], _this.DivideData(element[0])[1], _this.DivideData(element[0])[2], 0, 0, 0, 0);
            array.push(data);
        });
        return array;
    };
    NotasPage.prototype.DivideData = function (total) {
        var dia;
        var mes;
        var ano;
        ano = Number(total.substr(0, 4));
        mes = Number(total.substr(4, 2));
        dia = Number(total.substr(6, 2));
        console.log([ano, mes, dia]);
        return ([ano, mes, dia]);
    };
    NotasPage.prototype.CriaArrayNotas = function () {
        var _this = this;
        var array = [];
        this.DiasArray.forEach(function (element) { array.push(_this.Pontua(element[0])); });
        console.log(array);
        return array;
    };
    NotasPage.prototype.TotalToData = function (total) {
        var dia;
        var mes;
        var ano;
        var semana;
        var final;
        ano = total.substr(0, 4);
        mes = total.substr(4, 2);
        dia = total.substr(6, 2);
        var myDate = new Date();
        myDate.setFullYear(Number(ano));
        myDate.setMonth(Number(mes) - 1);
        myDate.setDate(Number(dia));
        if (myDate.getDay() == 1) {
            semana = 'Segunda';
        }
        if (myDate.getDay() == 2) {
            semana = 'Terça';
        }
        if (myDate.getDay() == 3) {
            semana = 'Quarta';
        }
        if (myDate.getDay() == 4) {
            semana = 'Quinta';
        }
        if (myDate.getDay() == 5) {
            semana = 'Sexta';
        }
        if (myDate.getDay() == 6) {
            semana = 'Sábado';
        }
        if (myDate.getDay() == 0) {
            semana = 'Domingo';
        }
        final = (dia + '/' + mes + '/' + ano + " - " + semana);
        return (final);
    };
    NotasPage.prototype.Arredonda = function (val) {
        var b;
        b = (Math.round(val * 100) / 100);
        return b;
    };
    //---------------------------------------CHARTS----------------------------------//
    NotasPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.bar3Chart = _this.getBarChart3();
        }, 800);
        setTimeout(function () {
        }, 200);
    };
    NotasPage.prototype.getBarChart3 = function () {
        var data = {
            labels: this.DiasDiasArray,
            datasets: [{
                    label: ['Nota'],
                    type: 'bar',
                    data: this.NotasArray,
                    backgroundColor: '#2f6acf',
                    borderWidth: 1
                }, {
                    label: ['Semanas'],
                    data: this.NotasMedia,
                    type: 'line',
                    backgroundColor: 'rgba(255, 255, 255, .4)',
                    borderColor: '#2f6acf'
                },
            ]
        };
        var options = {
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            autoSkip: false,
                        }
                    }],
                xAxes: [{
                        barPercentage: 0.5,
                        barThickness: 5,
                        maxBarThickness: 6,
                        minBarLength: 2,
                        gridLines: {
                            offsetGridLines: true
                        },
                        type: 'time',
                        time: {
                            unit: 'week',
                            displayFormats: { week: 'DD MM' }
                        }
                    }]
            }
        };
        return this.getChart3(this.barCanvas3.nativeElement, 'bar', data, options);
    };
    NotasPage.prototype.getChart3 = function (context, charType, data, options) {
        return new __WEBPACK_IMPORTED_MODULE_3_chart_js___default.a(context, {
            data: data,
            options: options,
            type: charType
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas3'),
        __metadata("design:type", Object)
    ], NotasPage.prototype, "barCanvas3", void 0);
    NotasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notas',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\notas\notas.html"*/'<!--\n  Generated template for the NotasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Notas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <div>\n      <canvas #barCanvas3 height="100vh" width="150vh" ></canvas>\n    </div>\n  </ion-card>\n  \n  <ion-list>\n    <ion-item *ngFor="let dias of DiasArray">\n      <p>{{TotalToData(dias[0])}} - {{Arredonda(Pontua(dias[0]),2)}}</p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\notas\notas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], NotasPage);
    return NotasPage;
}());

//# sourceMappingURL=notas.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantesEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RestaurantesEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RestaurantesEditPage = /** @class */ (function () {
    function RestaurantesEditPage(navCtrl, navParams, dbService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.restaurante = this.navParams.get('restaurante');
        this.Pessoas = this.dbService.getAll('configuracoes/pessoas', 'ordem');
        this.restaurantes = this.navParams.get('restaurantes');
        this.tipos = this.navParams.get('tipos');
    }
    RestaurantesEditPage.prototype.Atualizar = function (tarefa) {
        var _this = this;
        this.dbService.update('restaurantes', tarefa).then(function (d) {
            _this.navCtrl.pop();
        });
    };
    RestaurantesEditPage.prototype.Deletar = function (tarefa) {
        var _this = this;
        this.dbService.revome('restaurantes', tarefa).then(function (d) {
            _this.navCtrl.pop();
        });
    };
    RestaurantesEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-restaurantes-edit',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\restaurantes-edit\restaurantes-edit.html"*/'<!--\n  Generated template for the RestaurantesEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editar Restaurante</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-content>\n    <ion-grid>\n      <ion-row class="roww">\n        <ion-item>\n          <ion-label class="nome" >Dia: </ion-label>\n          <ion-input text-right type="number"  value="" [(ngModel)]="restaurante.dia"></ion-input>\n        </ion-item>\n      </ion-row>\n  \n      <ion-row class="roww">\n        <ion-item>\n          <ion-label class="nome" >Mes: </ion-label>\n          <ion-input text-right type="number"  value="" [(ngModel)]="restaurante.mes"></ion-input>\n        </ion-item>\n      </ion-row>\n  \n      <ion-row class="roww">\n        <ion-item>\n          <ion-label class="nome" >Ano: </ion-label>\n          <ion-input text-right type="number"  value="" [(ngModel)]="restaurante.ano"></ion-input>\n        </ion-item>\n      </ion-row>\n  \n      <ion-row class="roww">\n        <ion-item>\n          <ion-label class="nome" >Total: </ion-label>\n          <ion-input text-right type="number"  value="" [(ngModel)]="restaurante.total"></ion-input>\n        </ion-item>\n      </ion-row>\n  \n      <ion-row class="roww">\n        <ion-item>\n          <ion-label class="nome" >Parcial: </ion-label>\n          <ion-input text-right type="number"  value="" [(ngModel)]="restaurante.parcial"></ion-input>\n        </ion-item>\n      </ion-row>\n\n      <ion-row class="roww">\n        <ion-item>\n          <ion-label class="nome" >Título: </ion-label>\n          <ion-input text-right type="text"  value="" [(ngModel)]="restaurante.title"></ion-input>\n        </ion-item>\n      </ion-row>\n  \n      <ion-row class="roww">\n        <ion-item>\n          <ion-label class="nome" >Tipo: </ion-label>\n          <ion-input text-right type="text"  value="" [(ngModel)]="restaurante.tipo"></ion-input>\n        </ion-item>\n      </ion-row>\n\n      <ion-row class="roww">\n        <ion-item>\n          <ion-label class="nome" >Preço: </ion-label>\n          <ion-input text-right type="number"  value="" [(ngModel)]="restaurante.preco"></ion-input>\n        </ion-item>\n      </ion-row>\n\n      <ion-row  class="roww">\n        <ion-item>\n          <ion-label class="nome">Tipo Dropdown: </ion-label>\n            <ion-select class="input" [(ngModel)]="restaurante.tipo" interface="popover" multiple =  True>\n              <ion-option *ngFor="let tip of tipos">{{tip}}</ion-option>\n            </ion-select>\n        </ion-item>\n      </ion-row>\n\n    \n      <ion-row>\n        <ion-item>\n          <ion-label class="nome" no-padding >Comentário: </ion-label>\n          <ion-textarea   (click)="roww()" style="color: black; font-size: 13px;" rows="3" autocomplete="on" autocorrect="on" type="text" value="" [(ngModel)]="restaurante.comentario"></ion-textarea>\n        </ion-item>\n      </ion-row>\n\n      <ion-row>\n          <ion-item> \n              <ion-label class="nome" >Companhia: </ion-label>\n                <ion-select class="input" [(ngModel)]="restaurante.cia" interface="popover" multiple =  True>\n                  <ion-option *ngFor="let pes of (Pessoas | async)">{{pes.title}}</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-row>\n  \n\n      <ion-row>\n        <ion-col col-4 no-paddig>\n          <ion-row justify-content-center>\n            <ion-item no-lines justify-content-center>\n              <ion-label class="nome2">Casa: </ion-label>\n            </ion-item>\n          </ion-row>\n          <ion-row justify-content-center>\n            <ion-toggle class="toggle" [(ngModel)]="restaurante.casa" ></ion-toggle>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-row justify-content-center>\n        <button class="btn3" round ion-button outline color="danger" (click)="Deletar(restaurante)">Deletar</button>\n        <button class="btn3" round ion-button outline (click)="Atualizar(restaurante)">Atualizar</button>\n    </ion-row>\n\n  \n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\restaurantes-edit\restaurantes-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], RestaurantesEditPage);
    return RestaurantesEditPage;
}());

//# sourceMappingURL=restaurantes-edit.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__restaurantes_edit_restaurantes_edit__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RestaurantesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RestaurantesPage = /** @class */ (function () {
    function RestaurantesPage(navCtrl, navParams, dbService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.alertCtrl = alertCtrl;
        this.show = true;
        this.showA = false;
        this.restaurante = {
            'dia': '',
            'mes': '',
            'ano': '',
            'total': '',
            'parcial': '',
            'title': '',
            'tipo': '',
            'preco': '',
            'cia': '',
            'casa': false,
            'comentario': '',
        };
        this.restaurantes = this.dbService.getAll('restaurantes', 'total').map(function (a) { return a.reverse(); });
        this.atalhos = this.Atalhos();
        this.restaurantesArray = this.ArrayTotal();
        this.Pessoas = this.dbService.getAll('configuracoes/pessoas', 'ordem');
        this.tipos = this.Tipos();
    }
    RestaurantesPage.prototype.doRefresh = function (refresher) {
        this.showA = !this.showA;
        setTimeout(function () {
            refresher.complete();
        }, 50);
    };
    RestaurantesPage.prototype.ArrayTotal = function () {
        var linha = [];
        var coluna = [];
        this.restaurantes.forEach(function (itens) { itens.forEach(function (item) { linha = []; linha.push(item.title); linha.push(item.tipo); coluna.push(linha); }); });
        return coluna;
    };
    RestaurantesPage.prototype.Tipos = function () {
        var array = [];
        var B = false;
        this.restaurantes.forEach(function (element) {
            element.forEach(function (elem) { B = false; array.forEach(function (a) { if (a == elem.tipo) {
                B = true;
            } }); if (B == false) {
                console.log(String(elem.tipo)), array.push(String(elem.tipo));
            } });
        });
        return (array);
    };
    RestaurantesPage.prototype.Atalhos = function () {
        var array = [];
        var B = false;
        this.restaurantes.forEach(function (element) {
            element.forEach(function (elem) { B = false; array.forEach(function (a) { if (a == elem.title) {
                B = true;
            } }); if (B == false) {
                array.push(elem.title);
            } });
        });
        return (array);
    };
    RestaurantesPage.prototype.ArrayUnico = function (a) {
        var b = {};
        for (var i = 0; i < a.length; i++) {
            b[a[i]] = a[i];
        }
        var arr = [];
        for (var key in b) {
            arr.push(key);
        }
        return (arr);
    };
    RestaurantesPage.prototype.Data = function () {
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        var array = [dia, mes, ano];
        return array;
    };
    RestaurantesPage.prototype.Criacao = function (restaurante) {
        var array = this.Data();
        this.restaurante.dia = String(array[0]);
        this.restaurante.mes = String(array[1]);
        this.restaurante.ano = String(array[2]);
        this.restaurante.total = String(this.Total());
        this.restaurante.parcial = String(this.Parcial());
        this.dbService.save('restaurantes', restaurante);
    };
    RestaurantesPage.prototype.CriacaoO = function (restaurante) {
        var array = this.Data();
        this.restaurante.dia = String(array[0] - 1);
        this.restaurante.mes = String(array[1]);
        this.restaurante.ano = String(array[2]);
        this.restaurante.total = String(this.Total() - 1);
        this.restaurante.parcial = String(this.Parcial());
        this.dbService.save('restaurantes', restaurante);
    };
    RestaurantesPage.prototype.Total = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia);
        return total;
    };
    RestaurantesPage.prototype.Total2 = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia - 1);
        return total;
    };
    RestaurantesPage.prototype.Parcial = function () {
        var total;
        var data = new Date();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 100 + (mes + 1));
        return total;
    };
    RestaurantesPage.prototype.goToEdit = function (itens) {
        console.log('itens', itens);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__restaurantes_edit_restaurantes_edit__["a" /* RestaurantesEditPage */], { 'restaurante': itens,
            'restaurantes': this.restaurantes,
            'tipos': this.tipos });
    };
    RestaurantesPage.prototype.AtualizarP = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    RestaurantesPage.prototype.Show = function () {
        this.show = !this.show;
        return (this.show);
    };
    RestaurantesPage.prototype.Informacoes = function (filme) {
        var alert = this.alertCtrl.create({
            title: filme.title,
            subTitle: ("Data: " + filme.dia + "/" + filme.mes + "/" + filme.ano + "<br>Tipo: " + filme.genero + "<br>Nota: " + filme.nota + "<br>Diretor: " + filme.diretor + "<br>Comentario: " + filme.comentario),
            buttons: ['OK']
        });
        alert.present();
    };
    RestaurantesPage.prototype.Conta = function (atalho) {
        var a = 0;
        this.restaurantesArray.forEach(function (itens) { if (itens[0] == atalho) {
            a += 1;
        } });
        return (a);
    };
    RestaurantesPage.prototype.Atalho = function (atalho) {
        var _this = this;
        this.restaurante.title = atalho;
        this.restaurantesArray.forEach(function (itens) { console.log(itens); if (itens[0] == atalho) {
            _this.restaurante.tipo = itens[1];
        } });
        console.log("aqui mesmo", this.restaurante.title, this.restaurante.tipo);
        this.Criacao(this.restaurante);
    };
    RestaurantesPage.prototype.Casa = function (item) {
        var a = item.casa;
        a != a;
        item.casa = a;
        this.dbService.update('restaurante', item);
    };
    RestaurantesPage.prototype.Alert = function (item) {
        var alert = this.alertCtrl.create({
            title: item.title,
            subTitle: ("Data: " + item.dia + "/" + item.mes + "/" + item.ano + "<br>Tipo: " + item.tipo + "<br>Companhia: " + item.cia + "<br>Comentario: " + item.comentario),
            buttons: ['OK']
        });
        alert.present();
    };
    RestaurantesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-restaurantes',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\restaurantes\restaurantes.html"*/'<!--\n  Generated template for the RestaurantesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Restaurantes:</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="AtualizarP()">\n          <ion-icon name="sync"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="Show()">\n          <ion-icon name="calendar"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-refresher (ionRefresh)="doRefresh($event)"></ion-refresher>\n\n    <ion-grid>\n      <ion-row class="roww">\n        <ion-item>\n          <ion-label class="nome" >Título: </ion-label>\n          <ion-input text-right type="text"  value="" [(ngModel)]="restaurante.title"></ion-input>\n        </ion-item>\n      </ion-row>\n  \n      <ion-row class="roww">\n        <ion-item>\n          <ion-label class="nome" >Tipo: </ion-label>\n          <ion-input text-right type="text"  value="" [(ngModel)]="restaurante.tipo"></ion-input>\n        </ion-item>\n      </ion-row>\n\n      <ion-row  class="roww">\n          <ion-item>\n            <ion-label class="nome">Tipo Dropdown: </ion-label>\n              <ion-select class="input" [(ngModel)]="restaurante.tipo" interface="popover" multiple =  True>\n                <ion-option *ngFor="let tip of tipos">{{tip}}</ion-option>\n              </ion-select>\n          </ion-item>\n        </ion-row>\n\n    \n        <ion-row>\n          <ion-item> \n              <ion-label class="nome" >Pessoas: </ion-label>\n                <ion-select class="input" [(ngModel)]="restaurante.cia" interface="popover" multiple =  True>\n                  <ion-option *ngFor="let pes of (Pessoas | async)">{{pes.title}}</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-row>\n  \n      <ion-row justify-content-center >\n        <button class="btn3" ion-button  outline round small  (click)="CriacaoO(restaurante)">Ontem</button>\n        <button class="btn3" ion-button  round small  (click)="Criacao(restaurante)">Adicionar</button>\n      </ion-row>\n  </ion-grid>\n\n  <div *ngIf = "showA == true">\n    <ion-grid no-padding>\n      <ion-row justify-content-center >\n        <ion-col col-3 *ngFor="let atalho of (atalhos)">\n          <button class="btn4" ion-button round small outline (click)=Atalho(atalho)>{{atalho}} - {{Conta(atalho)}}</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-list>\n      <button ion-item *ngFor="let f of (restaurantes  | async) " (click)="goToEdit(f)" (press)="Alert(f)">\n        <h2> {{ f.title }}</h2>\n        <ion-icon *ngIf="f.casa == true" style="color: black" name="home" item-end></ion-icon>\n        <ion-icon *ngIf="f.casa == false" style="color: rgb(233, 233, 233)" name="home" item-end></ion-icon>\n        <ion-icon *ngIf="f.cia != \'\'" style="color: black" name="people" item-end></ion-icon>\n        <ion-icon *ngIf="f.cia == \'\'" style="color: rgb(233, 233, 233)" name="people" item-end></ion-icon>\n      </button>  \n    </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\restaurantes\restaurantes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], RestaurantesPage);
    return RestaurantesPage;
}());

//# sourceMappingURL=restaurantes.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumoSemanalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ResumoSemanalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResumoSemanalPage = /** @class */ (function () {
    function ResumoSemanalPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.DadosSemList = [];
        this.DadosSemList2 = [];
        this.DadosSemRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/diario').limitToLast(14).orderByChild("total");
        this.DadosMesRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/diario').limitToLast(31).orderByChild("total");
        this.Mes = this.GetMes();
        this.DadosSemRef.on('value', function (DadosSemList) {
            var DadosArray = [];
            DadosSemList.forEach(function (dado) {
                var obj;
                obj = dado.val();
                obj.DiaSemana = _this.TotalToData(obj.total);
                obj.key = dado.key;
                DadosArray.push(obj);
                return false;
            });
            DadosArray = DadosArray.reverse();
            var numero = 0;
            numero = DadosArray.findIndex(function (element) { return element.DiaSemana == "Domingo"; });
            console.log(numero, 'qual o numero do array');
            DadosArray.slice(0, numero);
            _this.DadosSemList = (DadosArray.slice(0, Number(numero) + 1)).reverse();
            _this.DadosSemList2 = (DadosArray.slice(Number(numero), Number(numero) + 7)).reverse();
            console.log("ola", _this.DadosSemList, _this.DadosSemList2);
        });
        this.DadosMesRef.on('value', function (DadosMesList) {
            var DadosArray = [];
            DadosMesList.forEach(function (dado) {
                var obj;
                obj = dado.val();
                obj.key = dado.key;
                if (obj.parcial == _this.Mes) {
                    DadosArray.push(obj);
                }
                return false;
            });
            _this.DadosMesList = DadosArray;
            console.log('Array', DadosArray);
        });
        console.log("ola", this.DadosSemList, this.DadosSemList2);
        console.log('oi');
    }
    ResumoSemanalPage.prototype.GetMes = function () {
        var data = new Date;
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        var parcial = Number(ano) * 100 + mes;
        return (parcial);
    };
    ResumoSemanalPage.prototype.TotalToData = function (total) {
        var dia;
        var mes;
        var ano;
        var semana;
        var final;
        ano = total.substr(0, 4);
        mes = total.substr(4, 2);
        dia = total.substr(6, 2);
        var myDate = new Date();
        myDate.setFullYear(Number(ano));
        myDate.setMonth(Number(mes) - 1);
        myDate.setDate(Number(dia));
        if (myDate.getDay() == 1) {
            semana = 'Segunda';
        }
        if (myDate.getDay() == 2) {
            semana = 'Terça';
        }
        if (myDate.getDay() == 3) {
            semana = 'Quarta';
        }
        if (myDate.getDay() == 4) {
            semana = 'Quinta';
        }
        if (myDate.getDay() == 5) {
            semana = 'Sexta';
        }
        if (myDate.getDay() == 6) {
            semana = 'Sábado';
        }
        if (myDate.getDay() == 0) {
            semana = 'Domingo';
        }
        final = (dia + '/' + mes + '/' + ano + " - " + semana);
        return (semana);
    };
    ResumoSemanalPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.barChart = _this.getBarChart();
            _this.barChart2 = _this.getBarChart2();
            _this.circleChart = _this.getCircleChart();
        }, 600);
    };
    ResumoSemanalPage.prototype.getBarChart = function () {
        var data = {
            labels: ['Dom', "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
            datasets: [{
                    label: ['Minimo'],
                    data: [8000, 8000, 8000, 8000, 8000, 8000, 8000],
                    type: 'line',
                    backgroundColor: 'rgba(255, 255, 255, .100)',
                    borderColor: '#FF0000'
                },
                {
                    label: ['Passos passados'],
                    data: this.DadosSemList2.map(function (a) { return Number(a.passos); }),
                    backgroundColor: '#C4DAFF',
                    borderWidth: 0.5,
                }, {
                    label: ['Atual'],
                    data: this.DadosSemList.map(function (a) { return Number(a.passos); }),
                    backgroundColor: '#2f6acf',
                    borderWidth: 2
                },
            ]
        };
        var options = {
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            autoSkip: false,
                        }
                    }],
                xAxes: [{
                        ticks: {
                            autoSkip: false,
                        }
                    }]
            }
        };
        return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);
    };
    ResumoSemanalPage.prototype.getBarChart2 = function () {
        var data = {
            labels: this.DadosMesList.map(function (a) { return Number(a.dia); }),
            datasets: [{
                    label: ['Peso'],
                    yAxisID: 'B',
                    data: this.DadosMesList.map(function (a) { return Number(a.peso); }),
                    type: 'line',
                    backgroundColor: 'rgba(255, 255, 255, .255)',
                    borderColor: '#008354'
                }, {
                    label: ['Passos Mes'],
                    yAxesGroup: 'A',
                    data: this.DadosMesList.map(function (a) { return Number(a.passos); }),
                    backgroundColor: '#2f6acf',
                    borderWidth: 0.5,
                }]
        };
        var options = {
            scales: {
                yAxes: [{
                        id: 'A',
                        type: 'linear',
                        position: 'left',
                        scalePositionLeft: true
                    },
                    {
                        id: 'B',
                        type: 'linear',
                        position: 'right',
                        scalePositionLeft: true,
                        ticks: {
                            max: 100,
                            min: 60
                        }
                    }
                ],
                xAxes: [{
                        ticks: {
                            autoSkip: false,
                        }
                    }]
            }
        };
        return this.getChart(this.barCanvas2.nativeElement, 'bar', data, options);
    };
    ResumoSemanalPage.prototype.getChart = function (context, charType, data, options) {
        return new __WEBPACK_IMPORTED_MODULE_3_chart_js___default.a(context, {
            data: data,
            options: options,
            type: charType
        });
    };
    ResumoSemanalPage.prototype.getCircleChart = function () {
        var data = {
            labels: ['Ler', 'Correr', "Doce", "Refri", "Alcool", "Tempinho", "uhu", "Agradecer", "Meditar"],
            datasets: [
                {
                    label: ['Atual'],
                    data: this.Teste(this.DadosSemList),
                    backgroundColor: '#2f6acf',
                    borderWidth: 0.5,
                }, {
                    label: ['Mes'],
                    data: this.Teste(this.DadosMesList),
                    backgroundColor: '#C4DAFF',
                    borderWidth: 2
                },
            ]
        };
        var options = {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            autoSkip: false,
                        }
                    }],
                xAxes: [{
                        ticks: {
                            autoSkip: false,
                        }
                    }]
            }
        };
        return this.getChart(this.circleCanvas.nativeElement, 'bar', data, options);
    };
    ResumoSemanalPage.prototype.Teste = function (valor) {
        var array = [];
        var total = 0;
        var leitura = 0;
        var correr = 0;
        var doce = 0;
        var refri = 0;
        var alcool = 0;
        var tempinho = 0;
        var uhu = 0;
        var besteira = 0;
        var agradecer = 0;
        var meditar = 0;
        valor.forEach(function (element) {
            if (element.leitura == true) {
                leitura += 1;
            }
            ;
            if (Number(element.andando) > 0 || Number(element.correndo) > 0) {
                correr += 1;
            }
            ;
            if (Number(element.doce) > 0) {
                doce += 1;
            }
            ;
            if (Number(element.refri) > 0) {
                refri += 1;
            }
            ;
            if (Number(element.alcool) > 0) {
                alcool += 1;
            }
            ;
            if (Number(element.tempinho) > 0) {
                tempinho += 1;
            }
            ;
            if (Number(element.uhu) > 0) {
                uhu += 1;
            }
            ;
            if ((element.besteira) == true) {
                besteira += 1;
            }
            ;
            if ((element.agradecer) == true) {
                agradecer += 1;
            }
            ;
            if ((element.meditar) == true) {
                meditar += 1;
            }
            ;
            total += 1;
        });
        array.push(leitura / total);
        array.push(correr / total);
        array.push(doce / total);
        array.push(refri / total, alcool / total, tempinho / total, uhu / total, besteira / total, agradecer / total, agradecer / meditar);
        console.log("aqui valores,", total, leitura, array);
        return array;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], ResumoSemanalPage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas2'),
        __metadata("design:type", Object)
    ], ResumoSemanalPage.prototype, "barCanvas2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('circleCanvas'),
        __metadata("design:type", Object)
    ], ResumoSemanalPage.prototype, "circleCanvas", void 0);
    ResumoSemanalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resumo-semanal',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\resumo-semanal\resumo-semanal.html"*/'<!--\n  Generated template for the ResumoSemanalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Resumo Semanal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid no-padding>\n    <ion-row>\n      <ion-col col-12>\n\n    \n\n\n  <ion-scroll scrollX="true" direction="x">\n    <ion-card>\n        <ion-grid>\n        <ion-row>\n          <ion-col col-12>\n            <canvas #barCanvas class="canvass"></canvas>\n          </ion-col>\n          <ion-col col-12>\n            <canvas #barCanvas2 class="canvass"></canvas>\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n    </ion-card>\n  </ion-scroll>\n  </ion-col>\n\n  <ion-col col-12 col-xl-6 col-l-6>\n  <ion-scroll scrollX="true" direction="x">\n      <ion-card>\n        <ion-grid>\n        <ion-row style="height: 100px">\n          <ion-col col-6>\n            <canvas #circleCanvas class="canvass"></canvas>\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n      </ion-card>\n    </ion-scroll>\n    </ion-col>\n    </ion-row>\n    </ion-grid>\n\n     \n</ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\resumo-semanal\resumo-semanal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ResumoSemanalPage);
    return ResumoSemanalPage;
}());

//# sourceMappingURL=resumo-semanal.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerieEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SerieEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SerieEditPage = /** @class */ (function () {
    function SerieEditPage(navCtrl, navParams, dbService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.serie = this.navParams.get('serie');
        this.Serie = [
            { title: "Modern Family" },
            { title: "Izoombie" },
            { title: "House of cards" },
            { title: "How to get away with murder" },
            { title: "The flash" },
            { title: "Santa Clarita Diet" },
            { title: "Atypical" },
            { title: "Suits" },
            { title: "Orphan black" }
        ];
    }
    SerieEditPage.prototype.Data = function () {
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        var array = [dia, mes, ano];
        return array;
    };
    SerieEditPage.prototype.Criacao = function (filme) {
        var array = this.Data();
        this.serie.dia = String(array[0]);
        this.serie.mes = String(array[1]);
        this.serie.ano = String(array[2]);
        this.serie.total = String(this.Total());
        this.serie.parcial = String(this.Parcial());
        this.dbService.save('filmes', filme);
    };
    SerieEditPage.prototype.Total = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia);
        return total;
    };
    SerieEditPage.prototype.Parcial = function () {
        var total;
        var data = new Date();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 100 + (mes + 1));
        return total;
    };
    SerieEditPage.prototype.Atualizar = function (serie) {
        var _this = this;
        this.dbService.update('series', serie).then(function (d) {
            _this.navCtrl.pop();
        });
    };
    SerieEditPage.prototype.Deletar = function (serie) {
        var _this = this;
        this.dbService.revome('series', serie).then(function (d) {
            _this.navCtrl.pop();
        });
    };
    SerieEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-serie-edit',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\serie-edit\serie-edit.html"*/'<!--\n  Generated template for the SerieEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Editar Série</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row class="roww">\n      <ion-item>\n        <ion-label class="nome" >Dia: </ion-label>\n        <ion-input text-right type="number"  value="" [(ngModel)]="serie.dia"></ion-input>\n      </ion-item>\n    </ion-row>\n\n    <ion-row class="roww">\n      <ion-item>\n        <ion-label class="nome" >Mes: </ion-label>\n        <ion-input text-right type="number"  value="" [(ngModel)]="serie.mes"></ion-input>\n      </ion-item>\n    </ion-row>\n\n    <ion-row class="roww">\n      <ion-item>\n        <ion-label class="nome" >Ano: </ion-label>\n        <ion-input text-right type="number"  value="" [(ngModel)]="serie.ano"></ion-input>\n      </ion-item>\n    </ion-row>\n\n    <ion-row class="roww">\n      <ion-item>\n        <ion-label class="nome" >Total: </ion-label>\n        <ion-input text-right type="number"  value="" [(ngModel)]="serie.total"></ion-input>\n      </ion-item>\n    </ion-row>\n\n    <ion-row class="roww">\n      <ion-item>\n        <ion-label class="nome" >Parcial: </ion-label>\n        <ion-input text-right type="number"  value="" [(ngModel)]="serie.parcial"></ion-input>\n      </ion-item>\n    </ion-row>\n\n      <ion-row class="roww">\n        <ion-item>\n          <ion-label class="nome" >Série: </ion-label>\n          <ion-input text-right type="text"  value="" [(ngModel)]="serie.title"></ion-input>\n        </ion-item>\n      </ion-row>\n  \n      <ion-row class="roww">\n        <ion-item>\n          <ion-label class="nome" >Temporada: </ion-label>\n          <ion-input text-right type="number"  value="" [(ngModel)]="serie.temp"></ion-input>\n        </ion-item>\n      </ion-row>\n  \n      <ion-row class="roww">\n        <ion-item>\n          <ion-label class="nome" >Episódio: </ion-label>\n          <ion-input text-right type="number"  value="" [(ngModel)]="serie.ep"></ion-input>\n        </ion-item>\n      </ion-row>\n\n      <ion-row class="roww">\n        <ion-item>\n          <ion-label class="nome" >Duração: </ion-label>\n          <ion-input text-right type="number"  value="" [(ngModel)]="serie.duracao"></ion-input>\n        </ion-item>\n      </ion-row>\n  \n  \n      <ion-row  class="roww">\n        <ion-item>\n          <ion-label class="nome">Série: </ion-label>\n            <ion-select class="input" [(ngModel)]="serie.title" interface="popover" multiple =  True>\n              <ion-option *ngFor="let ser of Serie">{{ser.title}}</ion-option>\n            </ion-select>\n        </ion-item>\n      </ion-row>\n      \n      <ion-row>\n        <ion-item>\n          <ion-label class="nome" no-padding >Comentário: </ion-label>\n          <ion-textarea   (click)="roww()" style="color: black; font-size: 13px;" rows="3" autocomplete="on" autocorrect="on" type="text" value="" [(ngModel)]="serie.comentario"></ion-textarea>\n        </ion-item>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col col-6 no-paddig>\n          <ion-row justify-content-center>\n            <ion-item no-lines justify-content-center>\n              <ion-label class="nome2">Netflix: </ion-label>\n            </ion-item>\n          </ion-row>\n          <ion-row justify-content-center>\n            <ion-toggle class="toggle" checked="true" [(ngModel)]="serie.netflix" ></ion-toggle>\n          </ion-row>\n        </ion-col>\n      \n        <ion-col col-6 no-paddig>\n          <ion-row justify-content-center>\n            <ion-item no-lines justify-content-center>\n              <ion-label class="nome2">Produção Netflix: </ion-label>\n            </ion-item>\n          </ion-row>\n          <ion-row justify-content-center>\n            <ion-toggle class="toggle" checked="false" [(ngModel)]="serie.producaoN" ></ion-toggle>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      \n  \n  \n    </ion-grid>\n  \n    <ion-row justify-content-center>\n      <button class="btn3" round small  color="danger" ion-button outline (click)="Deletar(serie)">Deletar</button>\n      <button class="btn3" round small ion-button  (click)="Atualizar(serie)">Atualizar</button>\n   </ion-row>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\serie-edit\serie-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], SerieEditPage);
    return SerieEditPage;
}());

//# sourceMappingURL=serie-edit.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__serie_edit_serie_edit__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SeriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SeriesPage = /** @class */ (function () {
    function SeriesPage(navCtrl, navParams, dbService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.alertCtrl = alertCtrl;
        this.serie = {
            'dia': '',
            'mes': '',
            'ano': '',
            'total': '',
            'parcial': '',
            'title': '',
            'temp': '',
            'ep': '',
            'duracao': '',
            'comentario': '',
            'netflix': true,
            'producaoN': false,
        };
        this.series = this.dbService.getAll('series', 'total').map(function (a) { return a.reverse(); });
        this.DataO = new Date().toISOString();
        this.Serie = this.SeriesA();
    }
    SeriesPage.prototype.SeriesA = function () {
        var array = [];
        var B = false;
        this.series.forEach(function (element) {
            element.forEach(function (elem) { B = false; array.forEach(function (A) { if (A == elem.title) {
                B = true;
            } }); if (B == false) {
                array.push(elem.title);
            } });
        });
        return (array);
    };
    SeriesPage.prototype.Data = function () {
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        var array = [dia, mes, ano];
        return array;
    };
    SeriesPage.prototype.Criacao = function (serie) {
        this.serie.title = String(this.serie.title);
        var array = this.Data();
        this.MudandoData(this.DataO);
        this.dbService.save('series', serie);
        this.serie.ep = String(Number(this.serie.ep) + 1);
    };
    SeriesPage.prototype.Total = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia);
        return total;
    };
    SeriesPage.prototype.Total2 = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia - 1);
        return total;
    };
    SeriesPage.prototype.Parcial = function () {
        var total;
        var data = new Date();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 100 + (mes + 1));
        return total;
    };
    SeriesPage.prototype.Ontem = function (serie) {
        var array = this.Data();
        var date = new Date;
        date.setDate(date.getDate() - 1);
        this.DataO = date.toISOString();
        this.MudandoData(this.DataO);
        this.dbService.save('series', serie);
        this.serie.ep = String(Number(this.serie.ep) + 1);
    };
    SeriesPage.prototype.goToEdit = function (itens) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__serie_edit_serie_edit__["a" /* SerieEditPage */], { 'serie': itens });
    };
    SeriesPage.prototype.AtualizarP = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    SeriesPage.prototype.Atalho = function (Serie) {
        this.serie.title = Serie.title;
        this.serie.duracao = Serie.duracao;
        this.serie.ep = String(Number(Serie.ep) + 1);
        this.serie.netflix = Serie.netflix;
        this.serie.producaoN = Serie.producaoN;
        this.serie.temp = Serie.temp;
        this.Criacao(this.serie);
    };
    SeriesPage.prototype.Alert = function (item) {
        var alert = this.alertCtrl.create({
            title: item.title,
            subTitle: ("Data: " + item.dia + "/" + item.mes + "/" + item.ano + "<br>Temporada: " + item.temp + "<br>Episódio: " + item.ep + "<br>Duração: " + item.duracao + "<br>Comentario: " + item.comentario),
            buttons: ['OK']
        });
        alert.present();
    };
    SeriesPage.prototype.Mostra = function () {
        this.MudandoData(this.DataO);
    };
    SeriesPage.prototype.MudandoData = function (valor) {
        console.log("Data Aqui", valor);
        var fields = valor.split('-');
        var dia = fields[2].split('T');
        this.serie.dia = dia[0];
        this.serie.ano = fields[0];
        this.serie.mes = String(Number(fields[1]));
        this.serie.total = String(Number(Number(this.serie.ano) * 10000 + Number(this.serie.mes) * 100 + Number(dia[0])));
        this.serie.parcial = String(Number(Number(this.serie.ano) * 100 + Number(this.serie.mes)));
    };
    SeriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-series',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\series\series.html"*/'<!--\n\n  Generated template for the SeriesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>Series</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="AtualizarP()">\n\n        <ion-icon name="sync"></ion-icon>\n\n    </button></ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row class="roww">\n\n      <ion-item>\n\n        <ion-label class="nome" >Série: </ion-label>\n\n        <ion-input text-right type="text"  value="" [(ngModel)]="serie.title"></ion-input>\n\n      </ion-item>\n\n    </ion-row>\n\n\n\n    <ion-row class="roww">\n\n      <ion-item>\n\n        <ion-label class="nome" >Temporada: </ion-label>\n\n        <ion-input text-right type="number"  value="" [(ngModel)]="serie.temp"></ion-input>\n\n      </ion-item>\n\n    </ion-row>\n\n\n\n    <ion-row class="roww">\n\n      <ion-item>\n\n        <ion-label class="nome" >Episódio: </ion-label>\n\n        <ion-input text-right type="number"  value="" [(ngModel)]="serie.ep"></ion-input>\n\n      </ion-item>\n\n    </ion-row>\n\n\n\n    <ion-row class="roww">\n\n      <ion-item>\n\n        <ion-label class="nome" >Duração: </ion-label>\n\n        <ion-input text-right type="number"  value="" [(ngModel)]="serie.duracao"></ion-input>\n\n      </ion-item>\n\n    </ion-row>\n\n\n\n\n\n    <ion-row  class="roww">\n\n      <ion-item>\n\n        <ion-label class="nome">Série: </ion-label>\n\n          <ion-select class="input" [(ngModel)]="serie.title" interface="popover">\n\n            <ion-option *ngFor="let ser of Serie">{{ser}}</ion-option>\n\n          </ion-select>\n\n      </ion-item>\n\n    </ion-row>\n\n\n\n    <ion-row class ="roww">\n\n      <ion-item>\n\n        <ion-label class="nome" no-padding (click)="Mostra()">Data</ion-label>\n\n        <ion-datetime  (click)="Mostra()" displayFormat="DD/MM/YYYY" [(ngModel)]="DataO"></ion-datetime>\n\n      </ion-item>\n\n    </ion-row>\n\n\n\n\n\n\n\n    <ion-row>\n\n      <ion-item>\n\n        <ion-label class="nome" no-padding >Comentário: </ion-label>\n\n        <ion-textarea    style="color: black; font-size: 13px;" rows="3" autocomplete="on" autocorrect="on" type="text" value="" [(ngModel)]="serie.comentario"></ion-textarea>\n\n      </ion-item>\n\n    </ion-row>\n\n    \n\n    <ion-row>\n\n      <ion-col col-6 no-paddig>\n\n        <ion-row justify-content-center>\n\n          <ion-item no-lines justify-content-center>\n\n            <ion-label class="nome2">Netflix: </ion-label>\n\n          </ion-item>\n\n        </ion-row>\n\n        <ion-row justify-content-center>\n\n          <ion-toggle class="toggle" checked="true" [(ngModel)]="serie.netflix" ></ion-toggle>\n\n        </ion-row>\n\n      </ion-col>\n\n    \n\n      <ion-col col-6 no-paddig>\n\n        <ion-row justify-content-center>\n\n          <ion-item no-lines justify-content-center>\n\n            <ion-label class="nome2">Produção Netflix: </ion-label>\n\n          </ion-item>\n\n        </ion-row>\n\n        <ion-row justify-content-center>\n\n          <ion-toggle class="toggle" checked="false" [(ngModel)]="serie.producaoN" ></ion-toggle>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    \n\n    \n\n\n\n\n\n  </ion-grid>\n\n\n\n\n\n \n\n    <ion-row justify-content-center>\n\n      <button class="btn3" round small ion-button outline (click)="Ontem(serie)">Ontem</button>\n\n      <button class="btn3" round small ion-button  (click)="Criacao(serie)">Adicionar</button>\n\n      \n\n   </ion-row>\n\n \n\n\n\n   <ion-list>\n\n    <ion-item *ngFor="let f of (series  | async) " >\n\n      <ion-icon (press)="Atalho(f)" name="add" item-start></ion-icon>\n\n    <h2 (click)="goToEdit(f)" (press)="Alert(f)" > {{ f.title }} - {{f.ep}} </h2>\n\n      <ion-note item-end><p>{{f.dia}}/{{f.mes}}</p></ion-note>\n\n    </ion-item>  \n\n  </ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\series\series.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], SeriesPage);
    return SeriesPage;
}());

//# sourceMappingURL=series.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarefasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tarefa_edit_tarefa_edit__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todas_tarefas_todas_tarefas__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TarefasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TarefasPage = /** @class */ (function () {
    function TarefasPage(navCtrl, navParams, dbService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.tarefa = {
            'dia': '',
            'mes': '',
            'ano': '',
            'total': '',
            'parcial': '',
            'title': '',
            'check': false,
        };
        this.tarefas = this.dbService.getAll('tarefas', 'total').map(function (d) { return d.reverse(); });
        this.hoje = this.Total();
        this.amanha = this.Total3();
        this.ontem = this.Total2();
    }
    TarefasPage.prototype.Data = function () {
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        var array = [dia, mes, ano];
        return array;
    };
    TarefasPage.prototype.Criacao = function (tarefa) {
        var array = this.Data();
        this.tarefa.dia = String(array[0]);
        this.tarefa.mes = String(array[1]);
        this.tarefa.ano = String(array[2]);
        this.tarefa.total = String(this.Total());
        this.tarefa.parcial = String(this.Parcial());
        this.dbService.save('tarefas', tarefa);
        this.tarefa.title = " ";
    };
    TarefasPage.prototype.Total = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia);
        return total;
    };
    TarefasPage.prototype.Total2 = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia - 1);
        return total;
    };
    TarefasPage.prototype.Total3 = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia + 1);
        return total;
    };
    TarefasPage.prototype.Parcial = function () {
        var total;
        var data = new Date();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 100 + (mes + 1));
        return total;
    };
    TarefasPage.prototype.Ontem = function (tarefa) {
        var array = this.Data();
        this.tarefa.dia = String(array[0] - 1);
        this.tarefa.mes = String(array[1]);
        this.tarefa.ano = String(array[2]);
        this.tarefa.total = String(this.Total2());
        this.tarefa.parcial = String(this.Parcial());
        this.dbService.save('tarefas', tarefa);
    };
    TarefasPage.prototype.Amanha = function (tarefa) {
        var array = this.Data();
        this.tarefa.dia = String(array[0] + 1);
        this.tarefa.mes = String(array[1]);
        this.tarefa.ano = String(array[2]);
        this.tarefa.total = String(this.Total3());
        this.tarefa.parcial = String(this.Parcial());
        this.dbService.save('tarefas', tarefa);
    };
    TarefasPage.prototype.goToEdit = function (itens) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tarefa_edit_tarefa_edit__["a" /* TarefaEditPage */], { 'tarefa': itens });
    };
    TarefasPage.prototype.goToTotal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__todas_tarefas_todas_tarefas__["a" /* TodasTarefasPage */], { 'tarefas': this.tarefas });
    };
    TarefasPage.prototype.Atualizar = function (tarefas) {
        this.dbService.update('tarefas', tarefas);
    };
    TarefasPage.prototype.Deletar = function (tarefas) {
        this.dbService.revome('tarefas', tarefas);
    };
    TarefasPage.prototype.atualiza = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    TarefasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tarefas',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\tarefas\tarefas.html"*/'<!--\n  Generated template for the TarefasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Tarefas</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="atualiza()">\n        <ion-icon name="sync"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="goToTotal()">\n        <ion-icon name="calendar"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row class="roww">\n      <ion-item>\n        <ion-label class="nome" >Tarefa: </ion-label>\n        <ion-input text-right type="text"  value="" [(ngModel)]="tarefa.title" (keyup.enter)="Criacao(tarefa)"></ion-input>\n      </ion-item>\n    </ion-row>\n  </ion-grid>\n  \n  \n    \n      <ion-row justify-content-center >\n        <button class="btn2" ion-button outline round small (click)="Amanha(tarefa)">Amanhã</button>\n        <button class="btn3" ion-button  round small  (click)="Criacao(tarefa)">Adicionar</button>\n        <button class="btn2" ion-button outline  round small (click)="Ontem(tarefa)">Ontem</button>\n    </ion-row>\n    \n\n    <ion-card no-padding>\n      <ion-card-header  class="item">Hoje: </ion-card-header>\n      <ion-list>\n        <div *ngFor="let f of (tarefas | async)">\n          <ion-row *ngIf="f.total == hoje" class="item">\n            <ion-col col-2>\n              <ion-item class="item" >\n                  <ion-checkbox  [(ngModel)]="f.check" color="dark" checked="f.check" (click) ="Atualizar(f)" ></ion-checkbox>    \n              </ion-item>\n            </ion-col>\n              <ion-col col-10>\n                <ion-item  (click)="goToEdit(f)" (press)="Deletar(f)" >\n                  <ion-label >{{f.title}} </ion-label>\n                  <ion-note item-end><p>{{f.dia}}/{{f.mes}}</p></ion-note>\n                </ion-item>\n                \n              </ion-col>\n          </ion-row>\n        </div>  \n        <ion-row style="max-height: 1em;"><ion-item  ></ion-item> </ion-row>\n      </ion-list>\n    </ion-card>\n\n    <ion-card no-padding>\n      <ion-card-header  class="item">Ontem: </ion-card-header>\n      <ion-list>\n        <div *ngFor="let f of (tarefas | async)">\n          <ion-row *ngIf="f.total == ontem" class="item">\n            <ion-col col-2>\n              <ion-item >\n                  <ion-checkbox  [(ngModel)]="f.check" color="dark" checked="f.check" (click) ="Atualizar(f)" ></ion-checkbox>    \n              </ion-item>\n            </ion-col>\n              <ion-col col-10>\n                <ion-item  (click)="goToEdit(f)" (press)="Deletar(f)" >\n                  <ion-label >{{f.title }} </ion-label>\n                  <ion-note item-end><p>{{f.dia}}/{{f.mes}}</p></ion-note>\n                </ion-item>\n                \n              </ion-col>\n          </ion-row>\n        </div>  \n        <ion-row style="max-height: 1em;"><ion-item  ></ion-item> </ion-row>\n      </ion-list>\n    </ion-card>\n\n    <ion-card no-padding>\n      <ion-card-header class="item">Amanha:</ion-card-header>\n      <ion-list>\n        <div *ngFor="let f of (tarefas | async)">\n          <ion-row *ngIf="f.total == amanha" class="item">\n            <ion-col col-2>\n              <ion-item >\n                  <ion-checkbox  [(ngModel)]="f.check" color="dark" checked="f.check" (click) ="Atualizar(f)" ></ion-checkbox>    \n              </ion-item>\n            </ion-col>\n              <ion-col col-10>\n                <ion-item  (click)="goToEdit(f)" (press)="Deletar(f)" >\n                  <ion-label >{{f.title }} </ion-label>\n                  <ion-note item-end><p>{{f.dia}}/{{f.mes}}</p></ion-note>\n                </ion-item>\n                \n              </ion-col>\n          </ion-row>\n        </div>  \n      </ion-list>\n      <ion-row style="max-height: 1em;"><ion-item  ></ion-item> </ion-row>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\tarefas\tarefas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], TarefasPage);
    return TarefasPage;
}());

//# sourceMappingURL=tarefas.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodasTarefasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tarefa_edit_tarefa_edit__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TodasTarefasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TodasTarefasPage = /** @class */ (function () {
    function TodasTarefasPage(navCtrl, navParams, dbService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.tarefa = {
            'dia': '',
            'mes': '',
            'ano': '',
            'total': '',
            'parcial': '',
            'title': '',
            'check': false,
        };
        this.tarefas = this.navParams.get('tarefas');
        this.hoje = this.Total();
        this.amanha = this.Total3();
        this.ontem = this.Total2();
    }
    TodasTarefasPage.prototype.Data = function () {
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        var array = [dia, mes, ano];
        return array;
    };
    TodasTarefasPage.prototype.Criacao = function (tarefa) {
        var array = this.Data();
        this.tarefa.dia = String(array[0]);
        this.tarefa.mes = String(array[1]);
        this.tarefa.ano = String(array[2]);
        this.tarefa.total = String(this.Total());
        this.tarefa.parcial = String(this.Parcial());
        this.dbService.save('tarefas', tarefa);
        this.tarefa.title = " ";
    };
    TodasTarefasPage.prototype.Total = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia);
        return total;
    };
    TodasTarefasPage.prototype.Total2 = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia - 1);
        return total;
    };
    TodasTarefasPage.prototype.Total3 = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia + 1);
        return total;
    };
    TodasTarefasPage.prototype.Parcial = function () {
        var total;
        var data = new Date();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 100 + (mes + 1));
        return total;
    };
    TodasTarefasPage.prototype.Ontem = function (tarefa) {
        var array = this.Data();
        this.tarefa.dia = String(array[0] - 1);
        this.tarefa.mes = String(array[1]);
        this.tarefa.ano = String(array[2]);
        this.tarefa.total = String(this.Total2());
        this.tarefa.parcial = String(this.Parcial());
        this.dbService.save('tarefas', tarefa);
    };
    TodasTarefasPage.prototype.Amanha = function (tarefa) {
        var array = this.Data();
        this.tarefa.dia = String(array[0] + 1);
        this.tarefa.mes = String(array[1]);
        this.tarefa.ano = String(array[2]);
        this.tarefa.total = String(this.Total3());
        this.tarefa.parcial = String(this.Parcial());
        this.dbService.save('tarefas', tarefa);
    };
    TodasTarefasPage.prototype.goToEdit = function (itens) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tarefa_edit_tarefa_edit__["a" /* TarefaEditPage */], { 'tarefa': itens });
    };
    TodasTarefasPage.prototype.goToTotal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tarefa_edit_tarefa_edit__["a" /* TarefaEditPage */], { 'tarefas': this.tarefas });
    };
    TodasTarefasPage.prototype.Atualizar = function (tarefas) {
        this.dbService.update('tarefas', tarefas);
    };
    TodasTarefasPage.prototype.Deletar = function (tarefas) {
        this.dbService.revome('tarefas', tarefas);
    };
    TodasTarefasPage.prototype.atualiza = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    TodasTarefasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-todas-tarefas',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\todas-tarefas\todas-tarefas.html"*/'<ion-header>\n\n    <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Todas as tarefas</ion-title>\n  \n      <ion-buttons end>\n        <button ion-button icon-only (click)="atualiza()">\n          <ion-icon name="sync"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content>\n      <ion-grid>\n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Tarefa: </ion-label>\n            <ion-input text-right type="text"  value="" [(ngModel)]="tarefa.title" (keyup.enter)="Criacao(tarefa)"></ion-input>\n          </ion-item>\n        </ion-row>\n      </ion-grid>\n    \n    \n      <ion-row justify-content-center >\n        <button class="btn2" ion-button outline round small (click)="Amanha(tarefa)">Amanhã</button>\n        <button class="btn3" ion-button  round small  (click)="Criacao(tarefa)">Adicionar</button>\n        <button class="btn2" ion-button outline  round small (click)="Ontem(tarefa)">Ontem</button>\n    </ion-row>\n\n      <ion-list>\n        <ion-row *ngFor="let f of (tarefas | async)">\n          <ion-col col-2>\n            <ion-item >\n                <ion-checkbox  [(ngModel)]="f.check" color="dark" checked="f.check" (click) ="Atualizar(f)" ></ion-checkbox>    \n            </ion-item>\n          </ion-col>\n            <ion-col col-10>\n              <ion-item  (click)="goToEdit(f)" (press)="Deletar(f)" >\n                <ion-label >{{f.title }} </ion-label>\n                <ion-note item-end><p>{{f.dia}}/{{f.mes}}/{{f.ano}}</p></ion-note>\n              </ion-item>\n              \n            </ion-col>\n        </ion-row>\n      </ion-list>\n        \n  \n  </ion-content>\n  \n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\todas-tarefas\todas-tarefas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], TodasTarefasPage);
    return TodasTarefasPage;
}());

//# sourceMappingURL=todas-tarefas.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosTrackersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tracker_especifico_tracker_especifico__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notas_notas__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TodosTrackersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TodosTrackersPage = /** @class */ (function () {
    function TodosTrackersPage(navCtrl, navParams, dbService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.teste = 20;
        this.ShowResumo = false;
        this.testeL = 1;
        this.pontuacao = [];
        this.trackers = this.dbService.getAll('trackers', 'total').map(function (a) { return a.reverse(); });
        this.trackers2 = this.trackers;
        this.arrayOb = this.CriaArrayObjetos();
        this.Dias = this.GetArrayDias();
        this.trackerArray = this.CreateArray();
        this.medias = [
            { title: '-2' },
            { title: '-1' },
            { title: '0' },
            { title: '1' },
            { title: '2' },
            { title: '3' },
        ];
        this.pontuacao = this.pontuaT();
        console.log(this.pontuacao);
        this.valores = [0.5, 1, 2, 4, 6, 4];
    }
    TodosTrackersPage.prototype.GoToNotas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__notas_notas__["a" /* NotasPage */], {
            'Dias': this.Dias,
            'TrackerArray': this.trackerArray,
            'ArrayOb': this.arrayOb
        });
    };
    TodosTrackersPage.prototype.MediaFinal = function () {
        var _this = this;
        var soma = 0;
        this.medias.forEach(function (element) {
            soma += Number(_this.Media(element.title)) * _this.valores[Number(element.title) + 2];
        });
        return this.Arredonda(soma);
    };
    TodosTrackersPage.prototype.MediaContado = function () {
        var _this = this;
        var soma = 0;
        this.medias.forEach(function (element) {
            soma += Number(_this.Media(element.title));
        });
        return this.Arredonda(soma);
    };
    TodosTrackersPage.prototype.CreateArray = function () {
        var array = [];
        this.trackers.forEach(function (element) { element.forEach(function (item) { array.push(item); }); });
        return array;
    };
    TodosTrackersPage.prototype.Media = function (nivel) {
        var soma = 0;
        var denominador = this.Dias.length;
        this.trackerArray.forEach(function (item) { if (item['nivel'] == nivel) {
            soma += Number(item['duracao']);
        } });
        return (soma / denominador);
    };
    TodosTrackersPage.prototype.Pontua = function (total) {
        var valores = this.valores;
        var horas = [0, 0, 0, 0, 0, 0];
        this.trackerArray.forEach(function (item) { if (item['total'] == total) {
            horas[(Number(item['nivel']) + 2)] += Number(item['duracao']);
        } });
        var i = 0;
        var final = 0;
        while (i < 6) {
            final += horas[i] * valores[i];
            i += 1;
        }
        return (final);
    };
    TodosTrackersPage.prototype.pontuaT = function () {
        var _this = this;
        var array = [];
        this.Dias.forEach(function (itens) { console.log(itens), array.push(_this.Pontua(itens[0])); });
        return array;
    };
    TodosTrackersPage.prototype.Arredonda2 = function (val, casas) {
        var b;
        b = (Math.round(val * Math.pow(10, casas)) / (Math.pow(10, casas)));
        return b;
    };
    TodosTrackersPage.prototype.GetArrayDias = function () {
        var _this = this;
        var array = [];
        this.trackers.forEach(function (elements) {
            elements.forEach(function (element) {
                if (_this.VerificoSeHa(element.total, array) == true) {
                    array[_this.RetornoPosArray(element.total, array)][Number(element.nivel) + 3] += Number(element.duracao) / 24;
                }
                else {
                    array.push([element.total, 0, 0, 0, 0, 0, 0]), array[_this.RetornoPosArray(element.total, array)][Number(element.nivel) + 3] += Number(element.duracao) / 24;
                }
            });
        });
        return array;
    };
    TodosTrackersPage.prototype.RetornoPosArray = function (valor, array) {
        var a = 0;
        var b = 0;
        while (a < array.length) {
            if (array[a][0] == valor) {
                b = a;
            }
            a += 1;
        }
        return b;
    };
    TodosTrackersPage.prototype.VerificoSeHa = function (valor, array) {
        var retornavel = false;
        array.forEach(function (element) {
            if (element[0] == valor) {
                retornavel = true;
            }
        });
        return retornavel;
    };
    TodosTrackersPage.prototype.GetSoma = function (total) {
        var array = [0, 0, 0, 0, 0, 0];
        this.trackers.forEach(function (elements) { elements.forEach(function (element) { if (element.total == total) {
            array[element.nivel + 2] += element.duracao;
        } }); });
        return (array);
    };
    TodosTrackersPage.prototype.TotalToData = function (total) {
        var dia;
        var mes;
        var ano;
        var semana;
        var final;
        ano = total.substr(0, 4);
        mes = total.substr(4, 2);
        dia = total.substr(6, 2);
        var myDate = new Date();
        myDate.setFullYear(Number(ano));
        myDate.setMonth(Number(mes) - 1);
        myDate.setDate(Number(dia));
        if (myDate.getDay() == 1) {
            semana = 'Segunda';
        }
        if (myDate.getDay() == 2) {
            semana = 'Terça';
        }
        if (myDate.getDay() == 3) {
            semana = 'Quarta';
        }
        if (myDate.getDay() == 4) {
            semana = 'Quinta';
        }
        if (myDate.getDay() == 5) {
            semana = 'Sexta';
        }
        if (myDate.getDay() == 6) {
            semana = 'Sábado';
        }
        if (myDate.getDay() == 0) {
            semana = 'Domingo';
        }
        final = (dia + '/' + mes + '/' + ano + " - " + semana);
        return (final);
    };
    TodosTrackersPage.prototype.GetSomaCategoria = function (Total, Parametro) {
    };
    TodosTrackersPage.prototype.VerMais = function () {
        this.ShowResumo = !this.ShowResumo;
    };
    TodosTrackersPage.prototype.VerMaisOuMenos = function () {
        if (this.ShowResumo == true) {
            return ('Ver menos');
        }
        else {
            return 'Ver mais';
        }
    };
    TodosTrackersPage.prototype.ChecaValor3 = function (parametro1, parametro2) {
        var array = 0;
        this.arrayOb.forEach(function (itens) {
            itens.forEach(function (item) {
                if (item['total'] == parametro1) {
                    if (item['title'].includes(parametro2)) {
                        array += Number(item['duracao']);
                    }
                }
            });
        });
        return (array);
    };
    TodosTrackersPage.prototype.CriaArrayObjetos = function () {
        var array = [];
        this.trackers2.forEach(function (element) { array.push(element); });
        console.log('aqui objetos', array);
        return array;
    };
    TodosTrackersPage.prototype.Arredonda = function (val) {
        var b;
        b = (Math.round(val * 100) / 100);
        return b;
    };
    TodosTrackersPage.prototype.RetornaH = function (duracao) {
        if (duracao == 0) {
            return (" ");
        }
        else {
            var min2;
            var inteiro = parseInt(duracao);
            var min = Math.round((duracao - inteiro) * 60);
            min2 = String(min);
            if (min < 10) {
                min2 = String("0" + min);
            }
            return (inteiro + "h" + min2);
        }
    };
    TodosTrackersPage.prototype.GoToEspecifico = function (total) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tracker_especifico_tracker_especifico__["a" /* TrackerEspecificoPage */], { 'trackers': this.trackers,
            'total': total });
    };
    TodosTrackersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-todos-trackers',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\todos-trackers\todos-trackers.html"*/'<!--\n\n  Generated template for the TodosTrackersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title (press)="GoToNotas()">Todos os trackers</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <ion-card>\n\n    <ion-card-header>Média:\n\n        <ion-badge> {{MediaFinal()}} </ion-badge> - {{MediaContado()}}h</ion-card-header>\n\n    <ion-row>\n\n      <ion-col *ngFor="let media of medias" col-2>\n\n          <p>Val:{{media.title}} - {{Arredonda2(Media(media.title),2)}}h</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n\n\n\n\n  <ion-card *ngFor="let dias of Dias" >\n\n    <div (click)="GoToEspecifico(dias)">\n\n    <ion-card-header >\n\n        <ion-badge> {{Arredonda(Pontua(dias[0]),2)}} </ion-badge> - \n\n      {{TotalToData(dias[0])}}\n\n    </ion-card-header>\n\n\n\n    <div class="progress2" >\n\n    <div class="determinate1"     [style.width]="dias[6]*100+dias[5]*100+dias[4]*100+dias[3]*100+dias[2]*100+dias[1]*100 +\'%\'" ></div>\n\n      <div class="determinate2" [style.width]="dias[5]*100+dias[4]*100+dias[3]*100+dias[2]*100+dias[1]*100 +\'%\'"  ></div>\n\n      <div class="determinate3" [style.width]="dias[4]*100+dias[3]*100+dias[2]*100+dias[1]*100 +\'%\'"  ></div>\n\n      <div class="determinate4" [style.width]="dias[3]*100+dias[2]*100+dias[1]*100 +\'%\'" ></div>\n\n      <div class="determinate5" [style.width]="dias[2]*100+dias[1]*100 +\'%\'" ></div>\n\n      <div class="determinate6" [style.width]="dias[1]*100+\'%\'"  ></div>\n\n    </div>\n\n    </div>\n\n\n\n    <button ion-button clear col-3 small id="VM" (click)="VerMais()">{{VerMaisOuMenos()}}</button>\n\n\n\n    <ion-row no-padding *ngIf="ShowResumo == true">\n\n      <ion-col col-6 no-padding>\n\n        <h3>Tarefas Cotidianas:\n\n          <br>Dormir    - {{RetornaH(Arredonda(ChecaValor3(dias[0],\'Dormir\')))}}\n\n          <br>Banho     - {{RetornaH(Arredonda(ChecaValor3(dias[0],\'Banho\')))}}\n\n          <br>Ler       - {{RetornaH(Arredonda(ChecaValor3(dias[0],\'Ler\')))}}\n\n          <br>Programar - {{RetornaH(Arredonda(ChecaValor3(dias[0],\'Programar\')))}}\n\n          <br>Estudar    - {{RetornaH(Arredonda(ChecaValor3(dias[0],\'Estudar\')))}}\n\n          <br>Frances    -  {{RetornaH(Arredonda(ChecaValor3(dias[0],\'Frances\')))}}\n\n        </h3>\n\n      </ion-col>\n\n      <ion-col col-6 no-padding>\n\n        <h3>\n\n          <br>Ingles    - {{RetornaH(Arredonda(ChecaValor3(dias[0],\'Ingles\')))}}\n\n          <br>Aulas     - {{RetornaH(Arredonda(ChecaValor3(dias[0],\'Aula\')))}}\n\n          <br>Relaxar   - {{RetornaH(Arredonda(ChecaValor3(dias[0],\'Relaxar\')))}}\n\n          <br>Tempinho  - {{RetornaH(Arredonda(ChecaValor3(dias[0],\'Tempinho\')))}}\n\n          <br>Dani      - {{RetornaH(Arredonda(ChecaValor3(dias[0],\'Dani\')))}}\n\n        </h3>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\todos-trackers\todos-trackers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], TodosTrackersPage);
    return TodosTrackersPage;
}());

//# sourceMappingURL=todos-trackers.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackerEspecificoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__time_tracker_edit_time_tracker_edit__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TrackerEspecificoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrackerEspecificoPage = /** @class */ (function () {
    function TrackerEspecificoPage(navCtrl, navParams, dbService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.alertCtrl = alertCtrl;
        this.input = {
            'title': ''
        };
        this.tracker = {
            'dia': '',
            'mes': '',
            'ano': '',
            'total': '',
            'parcial': '',
            'title': '',
            'Hinicio': Number(''),
            'Minicio': Number(''),
            'Hfim': '',
            'Mfim': '',
            'nivel': 0,
            'duracao': 0,
            'check': false,
        };
        this.total = this.navParams.get('total');
        this.trackers = this.navParams.get('trackers');
    }
    TrackerEspecificoPage.prototype.GetHora = function () {
        var a = new Date;
        var b;
        b = a.getHours() + a.getMinutes() / 60;
        b = b / 24;
        console.log(b);
        return (b);
    };
    TrackerEspecificoPage.prototype.ChangeCheckTarefas = function (tarefa) {
        tarefa.check = !tarefa.check;
        this.dbService.update('configuracoes/shows', tarefa);
    };
    TrackerEspecificoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackerEspecificoPage');
    };
    TrackerEspecificoPage.prototype.Cor = function (n) {
        if (n == -2) {
            return 'dangerM';
        }
        if (n == -1) {
            return 'danger';
        }
        if (n == 0) {
            return 'dark';
        }
        if (n == 1) {
            return 'primary';
        }
        if (n == 2) {
            return 'primaryM';
        }
        if (n == 3) {
            return 'verde';
        }
    };
    TrackerEspecificoPage.prototype.Icone = function (track) {
        if (track.Minicio != '' && track.Mfim != '') {
            return ('checkmark-circle-outline');
        }
        if (track.Minicio == '') {
            return ('play');
        }
        if (track.Minicio != '' && track.Mfim == '') {
            return ('pause');
        }
    };
    TrackerEspecificoPage.prototype.CorIfTrue = function (dado) {
        if (dado == true) {
            return "primary";
        }
        if (dado != true) {
            return "";
        }
    };
    TrackerEspecificoPage.prototype.AlteraNivel = function (track, Nivel) {
        track.nivel = Nivel;
        this.dbService.update('trackers', track);
    };
    TrackerEspecificoPage.prototype.Nivel = function (Nivel) {
        this.tracker.nivel = Nivel;
    };
    TrackerEspecificoPage.prototype.Criacao = function (tarefa) {
        this.tracker.title = this.input.title;
        this.tracker.dia = this.total.substr(6, 2);
        this.tracker.mes = this.total.substr(4, 2);
        this.tracker.ano = this.total.substr(0, 4);
        this.tracker.total = this.total;
        this.tracker.parcial = this.total.substr(0, 4) + this.total.substr(4, 2);
        this.dbService.save('trackers', tarefa);
        this.input.title = "";
        this.tracker.Hinicio = Number('');
        this.tracker.Minicio = Number('');
    };
    TrackerEspecificoPage.prototype.goToEdit = function (itens) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__time_tracker_edit_time_tracker_edit__["a" /* TimeTrackerEditPage */], { 'tracker': itens });
    };
    TrackerEspecificoPage.prototype.Atualizar = function (tarefas) {
        this.dbService.update('trackers', tarefas);
    };
    TrackerEspecificoPage.prototype.Deletar = function (tarefas) {
        this.dbService.revome('trackers', tarefas);
    };
    TrackerEspecificoPage.prototype.RetornaH = function (duracao) {
        if (duracao == 0) {
            return (" ");
        }
        else {
            var min2;
            var inteiro = parseInt(duracao);
            var min = Math.round((duracao - inteiro) * 60);
            min2 = String(min);
            if (min < 10) {
                min2 = String("0" + min);
            }
            return (inteiro + "h" + min2);
        }
    };
    TrackerEspecificoPage.prototype.Comecar = function (track) {
        if (track.Minicio != '' && track.Hfim == '') {
            track.Hfim = this.RetornaHora();
            track.Mfim = Math.round(this.RetornaMin() * 100) / 100;
            track.check = true;
            track.duracao = (Math.round((Number(track.Hfim) + Math.round((Number(track.Mfim) / 60) * 10000) / 10000 - Number(track.Hinicio) - Math.round((Number(track.Minicio) / 60) * 10000) / 10000) * 10000) / 10000);
            if (Number(track.duracao) <= 0) {
                track.duracao = 24 - Number(track.Hinicio) - Number(track.Minicio) / 60;
            }
        }
        if (track.Minicio == '') {
            track.Hinicio = this.RetornaHora();
            track.Minicio = Math.round(this.RetornaMin() * 100) / 100;
        }
        this.dbService.update('trackers', track);
    };
    TrackerEspecificoPage.prototype.RetornaHora = function () {
        var data = new Date();
        var hora = data.getHours();
        return (hora);
    };
    TrackerEspecificoPage.prototype.RetornaMin = function () {
        var data = new Date();
        var min = data.getMinutes();
        var segundo = data.getSeconds();
        return (min + segundo / 60);
    };
    TrackerEspecificoPage.prototype.CriaNovo = function (track) {
        this.tracker.Hinicio = track.Hfim;
        this.tracker.Minicio = track.Mfim;
        this.Criacao(this.tracker);
    };
    TrackerEspecificoPage.prototype.Opcoes = function (track) {
        var _this = this;
        var actionSheet = this.actionSheetControler.create({
            title: 'Opções',
            buttons: [
                {
                    text: 'Copiar',
                    handler: function () {
                        _this.input.title = track.title;
                        _this.tracker.nivel = track.nivel;
                        _this.Criacao(_this.tracker);
                    }
                },
                {
                    text: 'Deletar',
                    handler: function () {
                        _this.Deletar(track);
                    }
                }, {
                    text: 'Limpar final',
                    handler: function () {
                        track.Hfim = '';
                        track.Mfim = '';
                        _this.dbService.update('trackers', track);
                    }
                }, {
                    text: "Alterar Horários",
                    handler: function () { _this.AlteraHora(track); }
                }, {
                    text: 'Limpar tudo',
                    handler: function () {
                        track.Hfim = '';
                        track.Mfim = '';
                        track.Hinicio = '';
                        track.Minicio = '';
                        track.duracao = '';
                        _this.dbService.update('trackers', track);
                    }
                }, {
                    text: 'Alterar Nível',
                    handler: function () {
                        _this.AlteraNivelradio(track);
                    }
                }, {
                    text: 'Relaxar',
                    handler: function () {
                        _this.AlteraNivel(track, "-2");
                        _this.AlterarNome(track, 'Relaxar');
                    }
                }, {
                    text: 'Criar Novo',
                    handler: function () {
                        _this.PromptCriarNovo(track);
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    TrackerEspecificoPage.prototype.AlterarNome = function (track, nome) {
        track.title = nome;
        this.dbService.update('trackers', track);
    };
    TrackerEspecificoPage.prototype.PromptCriarNovo = function (track) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Novo tracker',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Nome'
                }, {
                    name: 'nivel',
                    placeholder: 'Nível'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Relaxar',
                    handler: function (data) {
                        _this.input.title = "Relaxar", _this.tracker.nivel = -2;
                        _this.CriaNovo(track);
                    }
                },
                {
                    text: 'Salvar',
                    handler: function (data) {
                        _this.input.title = data.title, _this.tracker.nivel = data.nivel;
                        _this.CriaNovo(track);
                    }
                }
            ]
        });
        prompt.present();
    };
    TrackerEspecificoPage.prototype.Atual = function (track) {
        if (track.Minicio != '' && track.Mfim == '') {
            var Hfim = this.RetornaHora();
            var Mfim = Math.round(this.RetornaMin() * 100) / 100;
            var dura = (Math.round((Number(Hfim) + Math.round((Number(Mfim) / 60) * 10000) / 10000 - Number(track.Hinicio) - Math.round((Number(track.Minicio) / 60) * 10000) / 10000) * 10000) / 10000);
            return (dura);
        }
        if (track.Duracao != '') {
            return (" ");
        }
    };
    TrackerEspecificoPage.prototype.AlteraHora = function (track) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Hora',
            message: "Entre com a hora",
            inputs: [
                {
                    name: 'hora1',
                    placeholder: track.Hinicio,
                    type: 'number',
                },
                {
                    name: 'hora2',
                    placeholder: track.Hfim,
                    type: 'number',
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        track.Hinicio = data.hora1.split('.')[0];
                        track.Hfim = data.hora2.split('.')[0];
                        track.Minicio = data.hora1.split('.')[1];
                        track.Mfim = data.hora2.split('.')[1];
                        if (track.Mfim > 0) {
                            var dura = (Math.round((Number(track.Hfim) + Math.round((Number(track.Mfim) / 60) * 10000) / 10000 - Number(track.Hinicio) - Math.round((Number(track.Minicio) / 60) * 10000) / 10000) * 10000) / 10000);
                            track.duracao = dura;
                            track.check = true;
                        }
                        _this.dbService.update('trackers', track);
                    }
                }
            ]
        });
        prompt.present();
    };
    TrackerEspecificoPage.prototype.AlteraNivelradio = function (track) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Alterando Nível',
            message: 'Selecione a opção',
            inputs: [
                {
                    type: 'radio',
                    label: 'Nível 2',
                    value: '2'
                },
                {
                    type: 'radio',
                    label: 'Nível 1',
                    value: '1'
                },
                {
                    type: 'radio',
                    label: 'Nível 0',
                    value: '0'
                },
                {
                    type: 'radio',
                    label: 'Nível -1',
                    value: '-1'
                },
                {
                    type: 'radio',
                    label: 'Nível -2',
                    value: '-2'
                },
                {
                    type: 'radio',
                    label: 'Necessario',
                    value: '3'
                }
            ],
            buttons: [
                {
                    text: "Cancel",
                    handler: function (data) {
                        console.log("cancel clicked");
                    }
                },
                {
                    text: "Salvar",
                    handler: function (data) {
                        track.nivel = data;
                        _this.dbService.update('trackers', track);
                    }
                }
            ]
        });
        prompt.present();
    };
    TrackerEspecificoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tracker-especifico',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\tracker-especifico\tracker-especifico.html"*/'<!--\n  Generated template for the TrackerEspecificoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Tracker Especifico</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n  <!--ADICAO-->\n<ion-content>\n    <ion-grid>\n      <ion-row class="roww">\n          <ion-item no-lines>\n            <ion-label class="nome" >Tracker: </ion-label>\n            <ion-input text-right type="text"  value="" [(ngModel)]="input.title" (keyup.enter)="Criacao(tracker)"></ion-input>\n          </ion-item>\n       \n      </ion-row>\n  \n      <ion-row class="roww">\n        <ion-col col-11>\n          <ion-item no-lines>\n              <ion-range  min="-2" max="2"  snaps color="{{Cor(tracker.nivel)}}" [(ngModel)]="tracker.nivel">\n                <ion-icon range-left color="{{Cor(tracker.nivel)}}"  small name="close-circle"></ion-icon>\n                <ion-icon range-right  color="{{Cor(tracker.nivel)}}"  small name="checkmark-circle"></ion-icon>\n              </ion-range>\n            </ion-item>\n        </ion-col>\n        <ion-col col-1 >\n          <button ion-button icon-start round clear no-padding (click)="Nivel(3)">\n            <ion-icon color="verde" name="clipboard" (click)="Nivel(3)"> </ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  <!--bOTOES ADICAO-------------------------------------------------------------------------------------------------------------------------------------->\n  \n    <ion-row justify-content-center >\n      <button class="btn3" ion-button  round small  (click)="Criacao(tracker)">Adicionar</button>\n    </ion-row>\n\n  <!--Card -------------------------------------------------------------------------------------------------------------------------------------->\n\n  <ion-card>\n    <ion-card-header>\n      {{total[0]}}\n    </ion-card-header>\n\n    <ion-list>\n      <div *ngFor="let f of (trackers | async) ">\n        <ion-row *ngIf=\'f.total == total[0] && f.Hinicio == "" && f.Minicio == ""\'class="item">\n        <ion-col col-1>\n          <ion-item class="item" no-padding>\n            <ion-checkbox  [(ngModel)]="f.check" color="dark" checked="f.check" (click) ="Atualizar(f)" no-padding></ion-checkbox>    \n          </ion-item>\n        </ion-col>\n        <ion-col col-1>\n          <button ion-button icon-start full class="pad" round clear color="{{Cor(f.nivel)}}" (click)="Comecar(f)" no-padding>\n            <ion-icon name="{{Icone(f)}}"> </ion-icon>\n          </button>\n        </ion-col>\n          <ion-col col-9>\n            <ion-item  (click)="goToEdit(f)" >\n              <ion-label >{{f.title}}</ion-label>\n              <ion-note item-end><p>{{RetornaH(f.duracao)}}</p></ion-note>\n            </ion-item>\n          </ion-col>\n          <ion-col col-1 >\n            <button ion-button icon-start full round clear color="dark" (click)="Opcoes(f)" no-padding>\n              <ion-icon name="more"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div *ngFor="let f of (trackers | async) ">\n        <ion-row *ngIf=\'f.total == total[0] && f.Minicio != ""\'class="item">\n          <ion-col col-1>\n            <ion-item class="item" no-padding>\n              <ion-checkbox  [(ngModel)]="f.check" color="dark" checked="f.check" (click) ="Atualizar(f)" no-padding></ion-checkbox>    \n            </ion-item>\n          </ion-col>\n          <ion-col col-1>\n            <button ion-button icon-start full class="pad" round clear color="{{Cor(f.nivel)}}" (click)="Comecar(f)" no-padding>\n              <ion-icon name="{{Icone(f)}}"> </ion-icon>\n            </button>\n          </ion-col>\n            <ion-col col-9>\n              <ion-item  (click)="goToEdit(f)" >\n                <ion-label >{{f.title}}</ion-label>\n                \n                <ion-note item-end><p>{{RetornaH(f.duracao)}}</p></ion-note>\n              </ion-item>\n            </ion-col>\n            <ion-col col-1 >\n            <button ion-button icon-start full round clear color="dark" (click)="Opcoes(f)" no-padding>\n              <ion-icon name="more"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-list>\n\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\tracker-especifico\tracker-especifico.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], TrackerEspecificoPage);
    return TrackerEspecificoPage;
}());

//# sourceMappingURL=tracker-especifico.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViagensPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ViagensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViagensPage = /** @class */ (function () {
    function ViagensPage(navCtrl, navParams, dbService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
    }
    ViagensPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viagens',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\viagens\viagens.html"*/'<!--\n  Generated template for the ViagensPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Viagens</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let f of (series  | async) " (click)="itemSelected(item)">\n      <h2> {{ f.title }} </h2>\n      <ion-note item-end><p>{{f.dia}}/{{f.mes}}/{{f.ano}}</p></ion-note>\n    </button>  \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\viagens\viagens.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], ViagensPage);
    return ViagensPage;
}());

//# sourceMappingURL=viagens.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VinhoEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VinhoEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VinhoEditPage = /** @class */ (function () {
    function VinhoEditPage(navCtrl, navParams, dbService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.vinho = this.navParams.get('vinho');
        this.Uvas = [
            { 'title': "Terroir" },
            { 'title': "Cabernet Syrah" },
            { 'title': "Cabernet Souvignon" },
            { 'title': "Merlot" },
            { 'title': "Malbec" },
            { 'title': "Camérnère" },
            { 'title': "Pinot Noir" },
            { 'title': "Chardonnay" },
            { 'title': "Sauvignon Blanc" },
            { 'title': "" },
        ];
        this.pais = [
            { 'title': "França" },
            { 'title': "Italia" },
            { 'title': "Espanha" },
            { 'title': "Portugal" },
            { 'title': "Chile" },
            { 'title': "Brasil" },
            { 'title': "" },
        ];
        this.Tipo = [
            { 'title': "Branco" },
            { 'title': "Tinto" },
            { 'title': "Rose" },
            { 'title': "Espumante" },
            { 'title': "Doce" },
            { 'title': "" },
        ];
    }
    VinhoEditPage.prototype.Atualizar = function (tarefa) {
        var _this = this;
        this.dbService.update('vinhos', tarefa).then(function (d) {
            _this.navCtrl.pop();
        });
    };
    VinhoEditPage.prototype.Deletar = function (tarefa) {
        var _this = this;
        this.dbService.revome('vinhos', tarefa).then(function (d) {
            _this.navCtrl.pop();
        });
    };
    VinhoEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vinho-edit',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\vinho-edit\vinho-edit.html"*/'<!--\n  Generated template for the VinhoEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editar Vinho</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-grid>\n      <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Dia: </ion-label>\n            <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="vinho.dia"></ion-input>\n          </ion-item>\n        </ion-row>\n  \n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Mes: </ion-label>\n            <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="vinho.mes"></ion-input>\n          </ion-item>\n        </ion-row>\n  \n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Ano: </ion-label>\n            <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="vinho.ano"></ion-input>\n          </ion-item>\n        </ion-row>\n  \n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Total: </ion-label>\n            <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="vinho.total"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Vinho: </ion-label>\n            <ion-input text-right type="text"  value="" [(ngModel)]="vinho.title"></ion-input>\n          </ion-item>\n        </ion-row>\n  \n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Nota: </ion-label>\n            <ion-input text-right type="number"  value="" [(ngModel)]="vinho.nota"></ion-input>\n          </ion-item>\n        </ion-row>\n    \n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Tipo: </ion-label>\n            <ion-input text-right type="text"  value="" [(ngModel)]="vinho.tipo"></ion-input>\n          </ion-item>\n        </ion-row>\n    \n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Safra: </ion-label>\n            <ion-input text-right type="number"  value="" [(ngModel)]="vinho.safra"></ion-input>\n          </ion-item>\n        </ion-row>\n  \n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Preço: </ion-label>\n            <ion-input text-right type="number"  value="" [(ngModel)]="vinho.preco"></ion-input>\n          </ion-item>\n        </ion-row>\n    \n    \n        <ion-row  class="roww">\n          <ion-item>\n            <ion-label class="nome">Uva: </ion-label>\n              <ion-select class="input" [(ngModel)]="vinho.uva" interface="popover" multiple =  True>\n                <ion-option *ngFor="let uva of Uvas">{{uva.title}}</ion-option>\n              </ion-select>\n          </ion-item>\n        </ion-row>\n  \n        <ion-row  class="roww">\n          <ion-item>\n            <ion-label class="nome">Pais: </ion-label>\n              <ion-select class="input" [(ngModel)]="vinho.pais" interface="popover" multiple =  True>\n                <ion-option *ngFor="let p of pais">{{p.title}}</ion-option>\n              </ion-select>\n          </ion-item>\n        </ion-row>\n  \n        <ion-row  class="roww">\n          <ion-item>\n            <ion-label class="nome">Tipo: </ion-label>\n              <ion-select class="input" [(ngModel)]="vinho.tipo" interface="popover" multiple =  True>\n                <ion-option *ngFor="let p of Tipo">{{p.title}}</ion-option>\n              </ion-select>\n          </ion-item>\n        </ion-row>\n    \n        <ion-row>\n          <ion-item>\n            <ion-label class="nome" no-padding>Comentário: </ion-label>\n            <ion-textarea   (click)="roww()" style="color: black; font-size: 13px;" rows="3" autocomplete="on" autocorrect="on" type="text" value="" [(ngModel)]="vinho.comentario"></ion-textarea>\n          </ion-item>\n        </ion-row>\n\n        <ion-row justify-content-center>\n          <button class="btn3" ion-button round outline color="danger" (click)="Deletar(vinho)">Deletar</button>\n          <button class="btn3" ion-button round outline (click)="Atualizar(vinho)">Atualizar</button>\n        </ion-row>\n\n      </ion-grid>\n  \n       \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\vinho-edit\vinho-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], VinhoEditPage);
    return VinhoEditPage;
}());

//# sourceMappingURL=vinho-edit.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VinhosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vinho_edit_vinho_edit__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the VinhosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VinhosPage = /** @class */ (function () {
    function VinhosPage(navCtrl, navParams, dbService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.alertCtrl = alertCtrl;
        this.vinho = {
            'dia': '',
            'mes': '',
            'ano': '',
            'total': '',
            'parcial': '',
            'title': '',
            'nota': '',
            'tipo': '',
            'safra': '',
            'preco': '',
            'uva': '',
            'pais': '',
            'comentario': '',
        };
        this.vinhos = this.dbService.getAll('vinhos', 'total').map(function (a) { return a.reverse(); });
        this.Uvas = [
            { 'title': "Terroir" },
            { 'title': "Cabernet Syrah" },
            { 'title': "Cabernet Souvignon" },
            { 'title': "Merlot" },
            { 'title': "Malbec" },
            { 'title': "Camérnère" },
            { 'title': "Pinot Noir" },
            { 'title': "Chardonnay" },
            { 'title': "Sauvignon Blanc" },
            { 'title': "" },
        ];
        this.pais = [
            { 'title': "França" },
            { 'title': "Italia" },
            { 'title': "Espanha" },
            { 'title': "Portugal" },
            { 'title': "Chile" },
            { 'title': "Brasil" },
            { 'title': "" },
        ];
        this.Tipo = [
            { 'title': "Branco" },
            { 'title': "Tinto" },
            { 'title': "Rose" },
            { 'title': "Espumante" },
            { 'title': "Doce" },
            { 'title': "" },
        ];
    }
    VinhosPage.prototype.Data = function () {
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        var array = [dia, mes, ano];
        return array;
    };
    VinhosPage.prototype.Criacao = function (vinho) {
        var array = this.Data();
        this.vinho.dia = String(array[0]);
        this.vinho.mes = String(array[1]);
        this.vinho.ano = String(array[2]);
        this.vinho.total = String(this.Total());
        this.vinho.parcial = String(this.Parcial());
        this.dbService.save('vinhos', vinho);
    };
    VinhosPage.prototype.Total = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia);
        return total;
    };
    VinhosPage.prototype.Total2 = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia - 1);
        return total;
    };
    VinhosPage.prototype.Parcial = function () {
        var total;
        var data = new Date();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 100 + (mes + 1));
        return total;
    };
    VinhosPage.prototype.Ontem = function (vinho) {
        var array = this.Data();
        this.vinho.dia = String(array[0] - 1);
        this.vinho.mes = String(array[1]);
        this.vinho.ano = String(array[2]);
        this.vinho.total = String(this.Total2());
        this.vinho.parcial = String(this.Parcial());
        this.dbService.save('vinhos', vinho);
    };
    VinhosPage.prototype.goToEdit = function (itens) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__vinho_edit_vinho_edit__["a" /* VinhoEditPage */], { 'vinho': itens });
    };
    VinhosPage.prototype.Alert = function (item) {
        var alert = this.alertCtrl.create({
            title: item.title,
            subTitle: ("Data: " + item.dia + "/" + item.mes + "/" + item.ano + "<br>Nota: " + item.nota + "<br>Tipo: " + item.tipo + "<br>Safra: " + item.safra + "<br>Preço: " + item.preco + "<br>Uva: " + item.uva + "<br>Pais: " + item.pais + "<br>Comentário: " + item.comentario),
            buttons: ['OK']
        });
        alert.present();
    };
    VinhosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vinhos',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\vinhos\vinhos.html"*/'<!--\n  Generated template for the VinhosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Vinhos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n      <ion-row class="roww">\n        <ion-item>\n          <ion-label class="nome" >Vinho: </ion-label>\n          <ion-input text-right type="text"  value="" [(ngModel)]="vinho.title"></ion-input>\n        </ion-item>\n      </ion-row>\n\n      <ion-row class="roww">\n        <ion-item>\n          <ion-label class="nome" >Nota: </ion-label>\n          <ion-input text-right type="number"  value="" [(ngModel)]="vinho.nota"></ion-input>\n        </ion-item>\n      </ion-row>\n  \n      <ion-row class="roww">\n        <ion-item>\n          <ion-label class="nome" >Tipo: </ion-label>\n          <ion-input text-right type="text"  value="" [(ngModel)]="vinho.tipo"></ion-input>\n        </ion-item>\n      </ion-row>\n  \n      <ion-row class="roww">\n        <ion-item>\n          <ion-label class="nome" >Safra: </ion-label>\n          <ion-input text-right type="number"  value="" [(ngModel)]="vinho.safra"></ion-input>\n        </ion-item>\n      </ion-row>\n\n      <ion-row class="roww">\n        <ion-item>\n          <ion-label class="nome" >Preço: </ion-label>\n          <ion-input text-right type="number"  value="" [(ngModel)]="vinho.preco"></ion-input>\n        </ion-item>\n      </ion-row>\n  \n  \n      <ion-row  class="roww">\n        <ion-item>\n          <ion-label class="nome">Uva: </ion-label>\n            <ion-select class="input" [(ngModel)]="vinho.uva" interface="popover" multiple =  True>\n              <ion-option *ngFor="let uva of Uvas">{{uva.title}}</ion-option>\n            </ion-select>\n        </ion-item>\n      </ion-row>\n\n      <ion-row  class="roww">\n        <ion-item>\n          <ion-label class="nome">Pais: </ion-label>\n            <ion-select class="input" [(ngModel)]="vinho.pais" interface="popover" multiple =  True>\n              <ion-option *ngFor="let p of pais">{{p.title}}</ion-option>\n            </ion-select>\n        </ion-item>\n      </ion-row>\n\n      <ion-row  class="roww">\n        <ion-item>\n          <ion-label class="nome">Tipo: </ion-label>\n            <ion-select class="input" [(ngModel)]="vinho.tipo" interface="popover" multiple =  True>\n              <ion-option *ngFor="let p of Tipo">{{p.title}}</ion-option>\n            </ion-select>\n        </ion-item>\n      </ion-row>\n  \n      <ion-row>\n        <ion-item>\n          <ion-label class="nome" no-padding>Comentário: </ion-label>\n          <ion-textarea   (click)="roww()" style="color: black; font-size: 13px;" rows="3" autocomplete="on" autocorrect="on" type="text" value="" [(ngModel)]="vinho.comentario"></ion-textarea>\n        </ion-item>\n      </ion-row>\n    </ion-grid>\n  \n  \n      <ion-row justify-content-center>\n        <button class="btn3" ion-button round outline (click)="Ontem(vinho)">Ontem</button>\n        <button class="btn3" ion-button round  (click)="Criacao(vinho)">Adicionar</button>\n      </ion-row>\n  \n      <ion-list>\n      <button ion-item *ngFor="let f of (vinhos | async) " (click)="goToEdit(f)" (press)="Alert(f)">\n        <h2> {{ f.title }} - {{f.tipo}} </h2>\n        <ion-note item-end><p>{{f.dia}}/{{f.mes}}/{{f.ano}}</p></ion-note>\n      </button>  \n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\vinhos\vinhos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], VinhosPage);
    return VinhosPage;
}());

//# sourceMappingURL=vinhos.js.map

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 234;

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/adicionar/adicionar.module": [
		722,
		28
	],
	"../pages/analise/analise.module": [
		723,
		27
	],
	"../pages/cards-do-mes/cards-do-mes.module": [
		725,
		26
	],
	"../pages/cards/cards.module": [
		726,
		25
	],
	"../pages/configuracoes-edit/configuracoes-edit.module": [
		724,
		24
	],
	"../pages/configuracoes/configuracoes.module": [
		728,
		23
	],
	"../pages/edicao/edicao.module": [
		727,
		22
	],
	"../pages/filme-edit/filme-edit.module": [
		729,
		21
	],
	"../pages/filmes/filmes.module": [
		730,
		20
	],
	"../pages/graficos1/graficos1.module": [
		731,
		19
	],
	"../pages/livros-edit/livros-edit.module": [
		732,
		18
	],
	"../pages/livros/livros.module": [
		733,
		17
	],
	"../pages/notas/notas.module": [
		734,
		16
	],
	"../pages/restaurantes-edit/restaurantes-edit.module": [
		735,
		15
	],
	"../pages/restaurantes/restaurantes.module": [
		736,
		14
	],
	"../pages/resumo-semanal/resumo-semanal.module": [
		737,
		13
	],
	"../pages/serie-edit/serie-edit.module": [
		738,
		12
	],
	"../pages/series/series.module": [
		739,
		11
	],
	"../pages/tarefa-edit/tarefa-edit.module": [
		741,
		10
	],
	"../pages/tarefas/tarefas.module": [
		740,
		9
	],
	"../pages/time-tracker-edit/time-tracker-edit.module": [
		742,
		8
	],
	"../pages/time-tracker/time-tracker.module": [
		743,
		7
	],
	"../pages/todas-tarefas/todas-tarefas.module": [
		745,
		6
	],
	"../pages/todos-trackers/todos-trackers.module": [
		744,
		5
	],
	"../pages/tracker-especifico/tracker-especifico.module": [
		746,
		4
	],
	"../pages/viagem-edit/viagem-edit.module": [
		747,
		3
	],
	"../pages/viagens/viagens.module": [
		748,
		2
	],
	"../pages/vinho-edit/vinho-edit.module": [
		749,
		1
	],
	"../pages/vinhos/vinhos.module": [
		750,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 277;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adicionar_adicionar__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards_cards__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__analise_analise__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__time_tracker_time_tracker__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resumo_semanal_resumo_semanal__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage(navParams) {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__adicionar_adicionar__["a" /* AdicionarPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__cards_cards__["a" /* CardsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__time_tracker_time_tracker__["a" /* TimeTrackerPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__analise_analise__["a" /* AnalisePage */];
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_6__resumo_semanal_resumo_semanal__["a" /* ResumoSemanalPage */];
        this.myIndex = 0;
        if (navParams.data.index)
            this.myIndex = navParams.data.index;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\tabs\tabs.html"*/'<ion-tabs  [selectedIndex]="myIndex" >\n\n  <ion-tab [root]="tab4Root" tabTitle="Tarefas" tabIcon="checkbox-outline"></ion-tab>\n\n  <ion-tab [root]="tab1Root" tabTitle="Controle" tabIcon="add"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Cards" tabIcon="analytics"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabTitle="Analise" tabIcon="checkbox"></ion-tab>\n\n  <ion-tab [root]="tab6Root" tabTitle="Resumo" tabIcon="bookmarks"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Graficos1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Graficos1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Graficos1Page = /** @class */ (function () {
    function Graficos1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Graficos1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Graficos1Page');
    };
    Graficos1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-graficos1',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\graficos1\graficos1.html"*/'<!--\n  Generated template for the Graficos1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Graficos1</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\graficos1\graficos1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], Graficos1Page);
    return Graficos1Page;
}());

//# sourceMappingURL=graficos1.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViagemEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ViagemEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViagemEditPage = /** @class */ (function () {
    function ViagemEditPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ViagemEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViagemEditPage');
    };
    ViagemEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viagem-edit',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\viagem-edit\viagem-edit.html"*/'<!--\n  Generated template for the ViagemEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ViagemEdit</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\viagem-edit\viagem-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ViagemEditPage);
    return ViagemEditPage;
}());

//# sourceMappingURL=viagem-edit.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(599);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_adicionar_adicionar__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cards_cards__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_graficos1_graficos1__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_firebase_service_firebase_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cards_do_mes_cards_do_mes__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_funcoes_gerais_funcoes_gerais__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_edicao_edicao__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_filmes_filmes__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_series_series__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_vinhos_vinhos__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_viagens_viagens__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tarefas_tarefas__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_filme_edit_filme_edit__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_serie_edit_serie_edit__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_tarefa_edit_tarefa_edit__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_vinho_edit_vinho_edit__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_viagem_edit_viagem_edit__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_livros_edit_livros_edit__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_livros_livros__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_todas_tarefas_todas_tarefas__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_restaurantes_edit_restaurantes_edit__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_restaurantes_restaurantes__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_time_tracker_edit_time_tracker_edit__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_time_tracker_time_tracker__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_configuracoes_edit_configuracoes_edit__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_configuracoes_configuracoes__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_todos_trackers_todos_trackers__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_tracker_especifico_tracker_especifico__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_analise_analise__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_notas_notas__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_toast_ngx__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_resumo_semanal_resumo_semanal__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_adicionar_adicionar__["a" /* AdicionarPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cards_cards__["a" /* CardsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_graficos1_graficos1__["a" /* Graficos1Page */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cards_do_mes_cards_do_mes__["a" /* CardsDoMesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_edicao_edicao__["a" /* EdicaoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_filmes_filmes__["a" /* FilmesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_series_series__["a" /* SeriesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_vinhos_vinhos__["a" /* VinhosPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_viagens_viagens__["a" /* ViagensPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tarefas_tarefas__["a" /* TarefasPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_filme_edit_filme_edit__["a" /* FilmeEditPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_serie_edit_serie_edit__["a" /* SerieEditPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tarefa_edit_tarefa_edit__["a" /* TarefaEditPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_vinho_edit_vinho_edit__["a" /* VinhoEditPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_viagem_edit_viagem_edit__["a" /* ViagemEditPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_livros_edit_livros_edit__["a" /* LivrosEditPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_livros_livros__["a" /* LivrosPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_todas_tarefas_todas_tarefas__["a" /* TodasTarefasPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_restaurantes_edit_restaurantes_edit__["a" /* RestaurantesEditPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_restaurantes_restaurantes__["a" /* RestaurantesPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_time_tracker_edit_time_tracker_edit__["a" /* TimeTrackerEditPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_time_tracker_time_tracker__["a" /* TimeTrackerPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_configuracoes_edit_configuracoes_edit__["a" /* ConfiguracoesEditPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_configuracoes_configuracoes__["a" /* ConfiguracoesPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_todos_trackers_todos_trackers__["a" /* TodosTrackersPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_tracker_especifico_tracker_especifico__["a" /* TrackerEspecificoPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_analise_analise__["a" /* AnalisePage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_notas_notas__["a" /* NotasPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_resumo_semanal_resumo_semanal__["a" /* ResumoSemanalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/adicionar/adicionar.module#AdicionarPageModule', name: 'AdicionarPage', segment: 'adicionar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/analise/analise.module#AnalisePageModule', name: 'AnalisePage', segment: 'analise', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configuracoes-edit/configuracoes-edit.module#ConfiguracoesEditPageModule', name: 'ConfiguracoesEditPage', segment: 'configuracoes-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cards-do-mes/cards-do-mes.module#CardsDoMesPageModule', name: 'CardsDoMesPage', segment: 'cards-do-mes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edicao/edicao.module#EdicaoPageModule', name: 'EdicaoPage', segment: 'edicao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configuracoes/configuracoes.module#ConfiguracoesPageModule', name: 'ConfiguracoesPage', segment: 'configuracoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filme-edit/filme-edit.module#FilmeEditPageModule', name: 'FilmeEditPage', segment: 'filme-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filmes/filmes.module#FilmesPageModule', name: 'FilmesPage', segment: 'filmes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/graficos1/graficos1.module#Graficos1PageModule', name: 'Graficos1Page', segment: 'graficos1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/livros-edit/livros-edit.module#LivrosEditPageModule', name: 'LivrosEditPage', segment: 'livros-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/livros/livros.module#LivrosPageModule', name: 'LivrosPage', segment: 'livros', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notas/notas.module#NotasPageModule', name: 'NotasPage', segment: 'notas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restaurantes-edit/restaurantes-edit.module#RestaurantesEditPageModule', name: 'RestaurantesEditPage', segment: 'restaurantes-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restaurantes/restaurantes.module#RestaurantesPageModule', name: 'RestaurantesPage', segment: 'restaurantes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resumo-semanal/resumo-semanal.module#ResumoSemanalPageModule', name: 'ResumoSemanalPage', segment: 'resumo-semanal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/serie-edit/serie-edit.module#SerieEditPageModule', name: 'SerieEditPage', segment: 'serie-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/series/series.module#SeriesPageModule', name: 'SeriesPage', segment: 'series', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tarefas/tarefas.module#TarefasPageModule', name: 'TarefasPage', segment: 'tarefas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tarefa-edit/tarefa-edit.module#TarefaEditPageModule', name: 'TarefaEditPage', segment: 'tarefa-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/time-tracker-edit/time-tracker-edit.module#TimeTrackerEditPageModule', name: 'TimeTrackerEditPage', segment: 'time-tracker-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/time-tracker/time-tracker.module#TimeTrackerPageModule', name: 'TimeTrackerPage', segment: 'time-tracker', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/todos-trackers/todos-trackers.module#TodosTrackersPageModule', name: 'TodosTrackersPage', segment: 'todos-trackers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/todas-tarefas/todas-tarefas.module#TodasTarefasPageModule', name: 'TodasTarefasPage', segment: 'todas-tarefas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tracker-especifico/tracker-especifico.module#TrackerEspecificoPageModule', name: 'TrackerEspecificoPage', segment: 'tracker-especifico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viagem-edit/viagem-edit.module#ViagemEditPageModule', name: 'ViagemEditPage', segment: 'viagem-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viagens/viagens.module#ViagensPageModule', name: 'ViagensPage', segment: 'viagens', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vinho-edit/vinho-edit.module#VinhoEditPageModule', name: 'VinhoEditPage', segment: 'vinho-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vinhos/vinhos.module#VinhosPageModule', name: 'VinhosPage', segment: 'vinhos', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp({
                    apiKey: "AIzaSyCS77TuCe2jrXqmSDh9Ivs7gWedPM7PJ3E",
                    authDomain: "ionic3-gastos-45fd4.firebaseapp.com",
                    databaseURL: "https://ionic3-gastos-45fd4.firebaseio.com",
                    projectId: "ionic3-gastos-45fd4",
                    storageBucket: "ionic3-gastos-45fd4.appspot.com",
                    messagingSenderId: "404912444334"
                }),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_adicionar_adicionar__["a" /* AdicionarPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cards_cards__["a" /* CardsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_graficos1_graficos1__["a" /* Graficos1Page */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cards_do_mes_cards_do_mes__["a" /* CardsDoMesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_edicao_edicao__["a" /* EdicaoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_filmes_filmes__["a" /* FilmesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_series_series__["a" /* SeriesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_vinhos_vinhos__["a" /* VinhosPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_viagens_viagens__["a" /* ViagensPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tarefas_tarefas__["a" /* TarefasPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_filme_edit_filme_edit__["a" /* FilmeEditPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_serie_edit_serie_edit__["a" /* SerieEditPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tarefa_edit_tarefa_edit__["a" /* TarefaEditPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_vinho_edit_vinho_edit__["a" /* VinhoEditPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_viagem_edit_viagem_edit__["a" /* ViagemEditPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_livros_edit_livros_edit__["a" /* LivrosEditPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_livros_livros__["a" /* LivrosPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_todas_tarefas_todas_tarefas__["a" /* TodasTarefasPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_restaurantes_edit_restaurantes_edit__["a" /* RestaurantesEditPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_restaurantes_restaurantes__["a" /* RestaurantesPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_time_tracker_edit_time_tracker_edit__["a" /* TimeTrackerEditPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_time_tracker_time_tracker__["a" /* TimeTrackerPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_configuracoes_edit_configuracoes_edit__["a" /* ConfiguracoesEditPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_configuracoes_configuracoes__["a" /* ConfiguracoesPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_todos_trackers_todos_trackers__["a" /* TodosTrackersPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_tracker_especifico_tracker_especifico__["a" /* TrackerEspecificoPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_analise_analise__["a" /* AnalisePage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_notas_notas__["a" /* NotasPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_resumo_semanal_resumo_semanal__["a" /* ResumoSemanalPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_funcoes_gerais_funcoes_gerais__["a" /* FuncoesGeraisProvider */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_toast_ngx__["a" /* Toast */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 299,
	"./af.js": 299,
	"./ar": 300,
	"./ar-dz": 301,
	"./ar-dz.js": 301,
	"./ar-kw": 302,
	"./ar-kw.js": 302,
	"./ar-ly": 303,
	"./ar-ly.js": 303,
	"./ar-ma": 304,
	"./ar-ma.js": 304,
	"./ar-sa": 305,
	"./ar-sa.js": 305,
	"./ar-tn": 306,
	"./ar-tn.js": 306,
	"./ar.js": 300,
	"./az": 307,
	"./az.js": 307,
	"./be": 308,
	"./be.js": 308,
	"./bg": 309,
	"./bg.js": 309,
	"./bm": 310,
	"./bm.js": 310,
	"./bn": 311,
	"./bn.js": 311,
	"./bo": 312,
	"./bo.js": 312,
	"./br": 313,
	"./br.js": 313,
	"./bs": 314,
	"./bs.js": 314,
	"./ca": 315,
	"./ca.js": 315,
	"./cs": 316,
	"./cs.js": 316,
	"./cv": 317,
	"./cv.js": 317,
	"./cy": 318,
	"./cy.js": 318,
	"./da": 319,
	"./da.js": 319,
	"./de": 320,
	"./de-at": 321,
	"./de-at.js": 321,
	"./de-ch": 322,
	"./de-ch.js": 322,
	"./de.js": 320,
	"./dv": 323,
	"./dv.js": 323,
	"./el": 324,
	"./el.js": 324,
	"./en-au": 325,
	"./en-au.js": 325,
	"./en-ca": 326,
	"./en-ca.js": 326,
	"./en-gb": 327,
	"./en-gb.js": 327,
	"./en-ie": 328,
	"./en-ie.js": 328,
	"./en-il": 329,
	"./en-il.js": 329,
	"./en-nz": 330,
	"./en-nz.js": 330,
	"./eo": 331,
	"./eo.js": 331,
	"./es": 332,
	"./es-do": 333,
	"./es-do.js": 333,
	"./es-us": 334,
	"./es-us.js": 334,
	"./es.js": 332,
	"./et": 335,
	"./et.js": 335,
	"./eu": 336,
	"./eu.js": 336,
	"./fa": 337,
	"./fa.js": 337,
	"./fi": 338,
	"./fi.js": 338,
	"./fo": 339,
	"./fo.js": 339,
	"./fr": 340,
	"./fr-ca": 341,
	"./fr-ca.js": 341,
	"./fr-ch": 342,
	"./fr-ch.js": 342,
	"./fr.js": 340,
	"./fy": 343,
	"./fy.js": 343,
	"./gd": 344,
	"./gd.js": 344,
	"./gl": 345,
	"./gl.js": 345,
	"./gom-latn": 346,
	"./gom-latn.js": 346,
	"./gu": 347,
	"./gu.js": 347,
	"./he": 348,
	"./he.js": 348,
	"./hi": 349,
	"./hi.js": 349,
	"./hr": 350,
	"./hr.js": 350,
	"./hu": 351,
	"./hu.js": 351,
	"./hy-am": 352,
	"./hy-am.js": 352,
	"./id": 353,
	"./id.js": 353,
	"./is": 354,
	"./is.js": 354,
	"./it": 355,
	"./it.js": 355,
	"./ja": 356,
	"./ja.js": 356,
	"./jv": 357,
	"./jv.js": 357,
	"./ka": 358,
	"./ka.js": 358,
	"./kk": 359,
	"./kk.js": 359,
	"./km": 360,
	"./km.js": 360,
	"./kn": 361,
	"./kn.js": 361,
	"./ko": 362,
	"./ko.js": 362,
	"./ky": 363,
	"./ky.js": 363,
	"./lb": 364,
	"./lb.js": 364,
	"./lo": 365,
	"./lo.js": 365,
	"./lt": 366,
	"./lt.js": 366,
	"./lv": 367,
	"./lv.js": 367,
	"./me": 368,
	"./me.js": 368,
	"./mi": 369,
	"./mi.js": 369,
	"./mk": 370,
	"./mk.js": 370,
	"./ml": 371,
	"./ml.js": 371,
	"./mn": 372,
	"./mn.js": 372,
	"./mr": 373,
	"./mr.js": 373,
	"./ms": 374,
	"./ms-my": 375,
	"./ms-my.js": 375,
	"./ms.js": 374,
	"./mt": 376,
	"./mt.js": 376,
	"./my": 377,
	"./my.js": 377,
	"./nb": 378,
	"./nb.js": 378,
	"./ne": 379,
	"./ne.js": 379,
	"./nl": 380,
	"./nl-be": 381,
	"./nl-be.js": 381,
	"./nl.js": 380,
	"./nn": 382,
	"./nn.js": 382,
	"./pa-in": 383,
	"./pa-in.js": 383,
	"./pl": 384,
	"./pl.js": 384,
	"./pt": 385,
	"./pt-br": 386,
	"./pt-br.js": 386,
	"./pt.js": 385,
	"./ro": 387,
	"./ro.js": 387,
	"./ru": 388,
	"./ru.js": 388,
	"./sd": 389,
	"./sd.js": 389,
	"./se": 390,
	"./se.js": 390,
	"./si": 391,
	"./si.js": 391,
	"./sk": 392,
	"./sk.js": 392,
	"./sl": 393,
	"./sl.js": 393,
	"./sq": 394,
	"./sq.js": 394,
	"./sr": 395,
	"./sr-cyrl": 396,
	"./sr-cyrl.js": 396,
	"./sr.js": 395,
	"./ss": 397,
	"./ss.js": 397,
	"./sv": 398,
	"./sv.js": 398,
	"./sw": 399,
	"./sw.js": 399,
	"./ta": 400,
	"./ta.js": 400,
	"./te": 401,
	"./te.js": 401,
	"./tet": 402,
	"./tet.js": 402,
	"./tg": 403,
	"./tg.js": 403,
	"./th": 404,
	"./th.js": 404,
	"./tl-ph": 405,
	"./tl-ph.js": 405,
	"./tlh": 406,
	"./tlh.js": 406,
	"./tr": 407,
	"./tr.js": 407,
	"./tzl": 408,
	"./tzl.js": 408,
	"./tzm": 409,
	"./tzm-latn": 410,
	"./tzm-latn.js": 410,
	"./tzm.js": 409,
	"./ug-cn": 411,
	"./ug-cn.js": 411,
	"./uk": 412,
	"./uk.js": 412,
	"./ur": 413,
	"./ur.js": 413,
	"./uz": 414,
	"./uz-latn": 415,
	"./uz-latn.js": 415,
	"./uz.js": 414,
	"./vi": 416,
	"./vi.js": 416,
	"./x-pseudo": 417,
	"./x-pseudo.js": 417,
	"./yo": 418,
	"./yo.js": 418,
	"./zh-cn": 419,
	"./zh-cn.js": 419,
	"./zh-hk": 420,
	"./zh-hk.js": 420,
	"./zh-tw": 421,
	"./zh-tw.js": 421
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 669;

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_filmes_filmes__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_series_series__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tarefas_tarefas__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_vinhos_vinhos__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_viagens_viagens__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_livros_livros__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_restaurantes_restaurantes__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_time_tracker_time_tracker__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.abrirFilmes = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_filmes_filmes__["a" /* FilmesPage */]);
    };
    MyApp.prototype.abrirTime = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_time_tracker_time_tracker__["a" /* TimeTrackerPage */]);
    };
    MyApp.prototype.abrirSeries = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_series_series__["a" /* SeriesPage */]);
    };
    MyApp.prototype.abrirTarefa = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_tarefas_tarefas__["a" /* TarefasPage */]);
    };
    MyApp.prototype.abrirVinhos = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_vinhos_vinhos__["a" /* VinhosPage */]);
    };
    MyApp.prototype.abrirViagens = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_viagens_viagens__["a" /* ViagensPage */]);
    };
    MyApp.prototype.abrirRoot = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
    };
    MyApp.prototype.AbrirLivros = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_livros_livros__["a" /* LivrosPage */]);
    };
    MyApp.prototype.AbrirRestaurantes = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_restaurantes_restaurantes__["a" /* RestaurantesPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item  (click)="abrirRoot()">\n            Home\n        </button>\n        <button menuClose ion-item  (click)="abrirFilmes()">\n            Filmes\n        </button>\n        <button menuClose ion-item  (click)="abrirSeries()">\n            Séries\n        </button>\n\n        <button menuClose ion-item  (click)="AbrirLivros()">\n            Livros\n        </button>\n        <button menuClose ion-item  (click)="AbrirRestaurantes()">\n            Restaurantes\n        </button>\n        <button menuClose ion-item  (click)="abrirVinhos()">\n            Vinhos\n        </button>\n        <button menuClose ion-item  (click)="abrirViagens()">\n            Viagens\n        </button>\n        <button menuClose ion-item  (click)="abrirTime()">\n            Timetracker\n        </button>\n      </ion-list>\n    </ion-content>\n  \n  </ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuncoesGeraisProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the FuncoesGeraisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FuncoesGeraisProvider = /** @class */ (function () {
    function FuncoesGeraisProvider(http) {
        this.http = http;
        console.log('Hello FuncoesGeraisProvider Provider');
    }
    FuncoesGeraisProvider.prototype.Total = function () {
        var total;
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 10000 + (mes + 1) * 100 + dia);
        total = String(total);
        return total;
    };
    FuncoesGeraisProvider.prototype.Parcial = function () {
        var total;
        var data = new Date();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        total = Number(ano * 100 + (mes + 1));
        total = String(total);
        return total;
    };
    FuncoesGeraisProvider.prototype.FormataParcial = function (data) {
        data = String(data);
        var datinha = data.substr(0, 4);
        var datinha2 = data.substr(4, 2);
        var final = [datinha2, datinha].join('/');
        console.log(final);
        return final;
    };
    FuncoesGeraisProvider.prototype.FormataTotal = function (data) {
        data = String(data);
        var datinha = data.substr(0, 4);
        var datinha2 = data.substr(4, 2);
        var datinha3 = data.substr(6, 2);
        var final = [datinha3, datinha2, datinha].join('/');
        console.log(final);
        return final;
    };
    FuncoesGeraisProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], FuncoesGeraisProvider);
    return FuncoesGeraisProvider;
}());

//# sourceMappingURL=funcoes-gerais.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarefaEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TarefaEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TarefaEditPage = /** @class */ (function () {
    function TarefaEditPage(navCtrl, navParams, dbService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.tarefa = this.navParams.get('tarefa');
    }
    TarefaEditPage.prototype.Atualizar = function (tarefa) {
        var _this = this;
        this.dbService.update('tarefas', tarefa).then(function (d) {
            _this.navCtrl.pop();
        });
    };
    TarefaEditPage.prototype.Deletar = function (tarefa) {
        var _this = this;
        this.dbService.revome('tarefas', tarefa).then(function (d) {
            _this.navCtrl.pop();
        });
    };
    TarefaEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tarefa-edit',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\tarefa-edit\tarefa-edit.html"*/'<!--\n  Generated template for the TarefaEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Editar Tarefa</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-grid>\n      <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Dia: </ion-label>\n            <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="tarefa.dia"></ion-input>\n          </ion-item>\n        </ion-row>\n  \n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Mes: </ion-label>\n            <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="tarefa.mes"></ion-input>\n          </ion-item>\n        </ion-row>\n  \n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Ano: </ion-label>\n            <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="tarefa.ano"></ion-input>\n          </ion-item>\n        </ion-row>\n  \n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Total: </ion-label>\n            <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="tarefa.total"></ion-input>\n          </ion-item>\n        </ion-row>\n  \n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Parcial: </ion-label>\n            <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="tarefa.parcial"></ion-input>\n          </ion-item>\n        </ion-row>\n\n\n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Nome: </ion-label>\n            <ion-input text-right type="text" clearInput="true" value="" [(ngModel)]="tarefa.title"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Detalhes: </ion-label>\n            <ion-input text-right type="text" clearInput="true" value="" [(ngModel)]="tarefa.detalhes"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Nível: </ion-label>\n            <ion-input text-right type="text" clearInput="true" value="" [(ngModel)]="tarefa.nivel"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        \n\n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Check: </ion-label>\n            <ion-input text-right type="text" clearInput="true" value="" [(ngModel)]="tarefa.check"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Final: </ion-label>\n            <ion-input text-right type="text" clearInput="true" value="" [(ngModel)]="tarefa.finalT"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row class="roww">\n          <ion-item>\n            <ion-label class="nome" >Limite: </ion-label>\n            <ion-input text-right type="text" clearInput="true" value="" [(ngModel)]="tarefa.limite"></ion-input>\n          </ion-item>\n        </ion-row>\n\n          <ion-row justify-content-center>\n            <button class="btn3" round ion-button outline color="danger" (click)="Deletar(tarefa)">Deletar</button>\n            <button class="btn3" round ion-button outline (click)="Atualizar(tarefa)">Atualizar</button>\n          </ion-row>\n\n      </ion-grid>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\ControleDiario\src\pages\tarefa-edit\tarefa-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], TarefaEditPage);
    return TarefaEditPage;
}());

//# sourceMappingURL=tarefa-edit.js.map

/***/ })

},[466]);
//# sourceMappingURL=main.js.map