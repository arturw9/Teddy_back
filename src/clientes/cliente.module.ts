import { ClientesController } from './controllers/clientes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Cliente } from './entities/cliente.entity';
import { ClientesService } from './services/clientes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class ClientesModule {}
