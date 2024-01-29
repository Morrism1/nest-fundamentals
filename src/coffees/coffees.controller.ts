import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This action returns all coffees';
  }

  @Get(':id')
  findOne(@Param() { id }: any) {
    return `This action returns #${id} coffee`;
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }
}