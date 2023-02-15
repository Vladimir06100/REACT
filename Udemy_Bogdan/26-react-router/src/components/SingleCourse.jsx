import { Link, useParams } from 'react-router-dom';
import courses from '../data/courses';

const SingleCourse = () => {
  const params = useParams();
  const course = courses.find((course) => course.slug === params.slug);
  return (
    <>
      <h1>{course.title}</h1>
      <h2>{course.slug}</h2>
      <h3>{course.id}</h3>
      {/* либо to=".." relative="path"  перейти на уровень выше  */}
      <Link to="/courses">All courses</Link>
    </>
  );
};

export default SingleCourse;
