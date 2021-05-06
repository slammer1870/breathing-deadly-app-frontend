import { useRouter } from "next/router";
import { useContext } from "react"
import PropTypes from "prop-types";
import BuyButton from "../../components/BuyButton";
import CourseScroller from "../../components/CourseScroller";
import AuthContext from "../../context/AuthContext"

const Courses = ({ courses, categories }) => {
  const router = useRouter();

  const { user } = useContext(AuthContext);

  const path = router.pathname;
  return (
    <div>
      <div className="flex flex-col p-6">
        <h1 className="text-4xl mb-4">Courses</h1>
        <p className="mb-4">
          Here are our courses. Upon purchasing a course it will be added to your account and you will be able to view the content.
        </p>

        {categories.map((category) => (
          <div className="overflow-y-hidden" key={category.id}>
            <h1 className="text-3xl mb-4 capitalize">{category.title}</h1>
            <div className="flex overflow-y-scroll gradient-mask-r-70%">
              {courses
                .filter(
                  (course) => course.course_category.title == category.title
                )
                .map((course) => (
                  <div
                    className="flex flex-col justify-center items-center mr-4"
                    key={course.id}
                  >
                    <CourseScroller course={course} />
                    {user ? (
                      <BuyButton product={course} />
                    ) : (
                      <a href="/login" className="flex bg-blue-400 font-bold text-white w-full p-3 transition duration-300 ease-in-out hover:bg-blue-500 text-center justify-center items-center h-12 my-4">LOG IN TO BUY</a>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Courses.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      course_category: PropTypes.shape({
        title: PropTypes.string,
      }),
    })
  ),
};

export default Courses;

export async function getStaticProps() {
  const [courses, categories] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses/`).then((r) => r.json()),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/course-categories/`).then((r) =>
      r.json()
    ),
  ]);

  return {
    props: {
      courses,
      categories,
    },
  };
}
