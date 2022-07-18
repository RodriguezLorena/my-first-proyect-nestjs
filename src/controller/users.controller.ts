import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(){
    return `ACA ESTA USUARIO`
  }

  //PRIMERA FORMA
  // @Get(":id")
  // getUser(@Param() params){
  //   return `ACA ESTA USUARIO: ${params.id}`
  // }

  //SEGUNDA FORMA
  @Get(":id")
  getUser(@Param("id") id: number){
    return `ACA ESTA USURIO: ${id} Y ESTE ES SU ID`
  }
}
