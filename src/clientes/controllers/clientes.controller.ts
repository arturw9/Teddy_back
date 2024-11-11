import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, HttpCode } from '@nestjs/common';
import { ClientesService } from '../services/clientes.service';
import { CreateClienteDto } from '../dto/create-cliente.dto';
import { UpdateClienteDto } from '../dto/update-cliente.dto';


@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clientesService.create(createClienteDto);
  }

  @Get()
  findAll() {
    return this.clientesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const cliente = await this.clientesService.findOne(id);
    if(!cliente) throw new NotFoundException();
    return cliente;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    const cliente = await this.clientesService.update(id, updateClienteDto);
    if(!cliente) throw new NotFoundException();
    return cliente;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const cliente = await this.clientesService.remove(id);
    if(!cliente) throw new NotFoundException();
  }
}
