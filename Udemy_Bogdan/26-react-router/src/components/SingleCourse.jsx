import { Link, useParams } from 'react-router-dom';
import courses from '../data/courses';
import NotFound from './NotFound'

const SingleCourse = () => {
  const params = useParams();
  const course = courses.find((course) => course.slug === params.slug);
  if (!course) {
    return <NotFound />;
  }
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
