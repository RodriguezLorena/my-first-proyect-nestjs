import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './controller/product.controller';
import { CategoriesController } from './controller/categories.controller';
import { BrandsController } from './controller/brands.controller';
import { OrdersController } from './controller/orders.controller';
import { CostumersController } from './controller/costumers.controller';
import { UsersController } from './controller/users.controller';






@Module({
  imports: [],
  controllers: [AppController, ProductController, CategoriesController, BrandsController, OrdersController, CostumersController, UsersController],
  providers: [AppService],
})
export class AppModule {}
