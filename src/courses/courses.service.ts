import { Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Primeiro Curso',
      description: 'Descrição do curso',
      tags: ['nodeJS', 'nestJS', 'JS'],
    },
  ];

  findAll() {
    const _courses = this.courses;
    if (_courses.length == 0) {
      throw new NotFoundException(`Nenhum curso encontrado`);
    } else {
      return _courses;
    }
  }

  findOne(id: string) {
    const course = this.courses.find((course) => course.id === Number(id));

    if (!course) {
      throw new NotFoundException(`User ${id} not found!`);
    } else {
      return course;
    }
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
    console.log(this.courses);
    return createCourseDto;
  }

  update(id: string, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    this.courses[indexCourse] = updateCourseDto;
  }

  remove(id: string) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}
