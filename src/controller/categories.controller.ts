import { Controller } from '@nestjs/common';
import { Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  //RUTAS CON DECORADOR PARAMS, EN EL CASO QUE NECESITEMOS DOS PARAMETROS
  @Get(':id/products/:productId')
  getCategories(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ) {
    return `producto ${productId} y ${id}`;
  }
}
