import Link from 'next/link';
import PropTypes from 'prop-types';
import { fromImageToUrl } from '../utils/urls';
import BuyButton from './BuyButton'


const BuyCourse = ({ course }) => {
    return (
<<<<<<< HEAD
                <div className="flex flex-col max-w-screen-sm mx-auto">
=======
                <div className="flex flex-col">
>>>>>>> ba398a967b269625a4765c67b735b096315a69ae
                    <img alt={course.title} src={fromImageToUrl(course.thumbnail)} classname="w-screen h-auto"/>
                    <div className="p-4">
                        <h1 className="text-xl mb-1">{course.title}</h1>
                        <p className="text-sm">{course.description}</p>
                        <span>€{course.price}</span>
                        <BuyButton course={course} />
                    </div>
                </div>
    );
};

BuyCourse.propTypes = {
    course: PropTypes.shape({
        title: PropTypes.string,
        image: PropTypes.shape({ url: PropTypes.string }),
        description: PropTypes.string
    })
};

export default BuyCourse;
