import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
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
}
