import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApartmentModule } from './apartment/apartment.module';

@Module({
  imports: [ApartmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
