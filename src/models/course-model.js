export class CourseModel {
  constructor(courseParams) {
    this.id = courseParams.course_id;
    this.name = courseParams.course_name;
    this.parTotal = courseParams.par_total;
  }
}
