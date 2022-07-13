import { Controller, Get, Param } from '@nestjs/common';
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

  //RUTAS CON EL DECORADOR PARAM
  //FORMA 1)-
  // @Get("products/:productId")
  // getProduct(@Param() params: any){
  //   return `product ${params.productId}`
  // }

  //FORMA 2)-
  @Get("products/:productId")
  getProduct(@Param("productId") productId: string){
    return `producto ${productId}`
  }

  //RUTAS CON DECORADOR PARAMS, EN EL CASO QUE NECESITEMOS DOS PARAMETROS
  @Get("categories/:id/products/:productId")
  getCategories(@Param("productId") productId: string, @Param("id") id: string){
    return `producto ${productId} y ${id}`
  }
}
