import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
//CREANDO ENPOINS EN CONTROLADORES Y DEVOLVER UNA RESPUESTA

  @Get()   //ruta principal el @Get es un decorador
  getHello(): string {
    return "Hola Mundo"
  }
  @Get("nuevo")   //ruta normal
  newEndpoint(){
    return "soy un nuevo enpiont"
  }
  @Get("/ruta/")  //ruta funcionado con slash o sin el
  hello(){
    return "soy una ruta con slash"
  }
}
