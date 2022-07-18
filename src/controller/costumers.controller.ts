import { Controller, Get, Param } from '@nestjs/common';

@Controller('costumers')
export class CostumersController {
  @Get(":cliente")
  getClientes(@Param("cliente") cliente: string){
    return `ACA ESTAN LOS CLIENTES ${cliente}`
  }
}
