import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsController} from './products.controller'
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './models/products.service';
import { Product } from './models/products.entity'
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [ TypeOrmModule.forRoot(), TypeOrmModule.forFeature([Product]), AdminModule],
  controllers: [AppController, ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
