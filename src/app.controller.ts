import { Controller, Get, Param, Query } from '@nestjs/common';
import { RoutesMapper } from '@nestjs/core/middleware/routes-mapper';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  //CREANDO ENPOINS EN CONTROLADORES Y DEVOLVER UNA RESPUESTA

  @Get() //ruta principal el @Get es un decorador
  getHello(): string {
    return 'Hola Mundo';
  }
  @Get('nuevo') //ruta normal
  newEndpoint() {
    return 'soy un nuevo enpiont';
  }
  @Get('/ruta/') //ruta funcionado con slash o sin el
  hello() {
    return 'soy una ruta con slash';
  }

  //RUTAS CON EL DECORADOR PARAM
  //FORMA 1)-
  // @Get("products/:productId")
  // getProduct(@Param() params: any){
  //   return `product ${params.productId}`
  // }

  //RUTA NO DINAMICA
  @Get("products/filter")
  getProductFilter(){
    return "soy una ruta de filter, no dinamica "
  }

  //FORMA 2)-
  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `producto ${productId}`;
  }

  //RUTAS CON DECORADOR PARAMS, EN EL CASO QUE NECESITEMOS DOS PARAMETROS
  @Get('categories/:id/products/:productId')
  getCategories(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ) {
    return `producto ${productId} y ${id}`;
  }

  //RUTA PARA RESOLVER VARIOS PRODUCTOS POR @QUERY
  @Get('products')
  getProducts(
    @Query('limite') limite: number,
    @Query('copias') copias: number,
    @Query('marca') marca: string,
  ) {
    return `producto: soy el limit => ${limite}. Soy el offset => ${copias}, esto es la marca ${marca}`;
  }

  //CHOQUES DE RUTAS: CUANDO TENEMOS CHOQUE DE RUTAS, TENEMOS QUE ASEGURARNOS QUE LAS RUTAS DINAMICAS ESTEN DEBAJO DE LAS FIJAS
}

