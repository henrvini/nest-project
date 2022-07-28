import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(@Res() response) {
    return response.status(200).send(`Listagem de cursos`);
  }

  @Get(':id')
  findOne(@Param() params) {
    return `Curso #${params.id}`;
  }

  @Post()
  @HttpCode(204)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Curso ${id} atualizado com sucesso`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Curso ${id} excluido com sucesso`;
  }
}
