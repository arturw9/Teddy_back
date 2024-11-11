import { ClientesModule } from './clientes/cliente.module';
import { Cliente } from './clientes/entities/cliente.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'teddy',
    entities: [Cliente],
    synchronize: true
  }), TypeOrmModule.forFeature([Cliente]), ClientesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
