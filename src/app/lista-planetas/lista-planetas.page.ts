import { Component, OnInit } from '@angular/core';
import { PlanetasService } from '../planetas.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-lista-planetas',
  templateUrl: './lista-planetas.page.html',
  styleUrls: ['./lista-planetas.page.scss'],
})
export class ListaPlanetasPage implements OnInit {

  arrPlanetas: any[];

  constructor(
    private planetasService: PlanetasService,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Se están recuperando los planetas de la API'
    });
    await loading.present();

    this.planetasService.getAll()
      .then(response => {
        setTimeout(() => loading.dismiss(), 1000);
        this.arrPlanetas = response.results;
      });
  }

  async handleClick(planeta) {
    const alert = await this.alertController.create({
      header: 'Información del planeta',
      subHeader: planeta.name,
      message: `Clima: ${planeta.climate}.<br> Población: ${planeta.population}`,
      buttons: [{
        text: 'Botón 1',
        handler: () => {
          console.log('Se ha pulsado el Botón 1');
        }
      },
      {
        text: 'Botón 2',
        handler: () => {
          console.log('Se ha pulsado el Botón 2');
        }
      }]
    });
    await alert.present();
  }

}
