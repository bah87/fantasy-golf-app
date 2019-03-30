const getCourse = courseParams => {
  return {
    id: courseParams.course_id,
    name: courseParams.course_name,
    parTotal: courseParams.par_total
  };
};

export default getCourse;
