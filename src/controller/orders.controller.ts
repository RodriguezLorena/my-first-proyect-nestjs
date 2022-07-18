import { Controller, Get, Query } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getOrders(@Query("ordenes") ordenes: number){
    return `Aca estan las ordenes: ${ordenes}`
  }
}




