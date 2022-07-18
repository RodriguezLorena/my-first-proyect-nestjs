import { Controller, Get, Param, Query } from '@nestjs/common';
//MARCA
@Controller('brands')
export class BrandsController {
  @Get()
  getBrands(@Query("limite") limite: number){
    return `Brands: esto es limite => ${limite}`
  }


@Get(":brandId")
getBrand(@Param("brandId") brandId: string){
  return `Aca esta Brand ${brandId}`
}

}
