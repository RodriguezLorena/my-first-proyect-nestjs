import { Controller } from '@nestjs/common';
import { Get, Param, Query } from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Get()
  getProducts(
    @Query('limite') limite: number,
    @Query('copias') copias: number,
    @Query('marca') marca: string,
  ) {
    return `producto: soy el limit => ${limite}. Soy el offset => ${copias}, esto es la marca ${marca}`;
  }
  
  //RUTA NO DINAMICA
  @Get('filter')
  getProductFilter() {
    return 'soy una ruta de filter, no dinamica ';
  }

  //RUTAS CON EL DECORADOR PARAM
  //FORMA 1)-
  // @Get("products/:productId")
  // getProduct(@Param() params: any){
  //   return `product ${params.productId}`
  // }

  //FORMA 2)-
  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `producto ${productId}`;
  }
//RUTA PARA RESOLVER VARIOS PRODUCTOS POR @QUERY

}
