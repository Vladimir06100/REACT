import { useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import courses from '../data/courses';
//import NotFound from './NotFound';

const SingleCourse = () => {
  const params = useParams();
  const navigate = useNavigate();
  const course = courses.find((course) => course.slug === params.slug);
  const location = useLocation();
  console.log(location);
  // if (!course) {
  //   return <NotFound />;
  // } simply show NotFound

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' });
    }
  }, [course, navigate]);
  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      {/* либо to=".." relative="path"  перейти на уровень выше  */}
      <Link
        to="/courses"
        relative="path">
        All courses
      </Link>
    </>
  );
};

export default SingleCourse;
