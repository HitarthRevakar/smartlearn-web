// ----------------------------- import links ---------------------------------- //
import ArrowRight from '../../assets/images/png/right-arrow.png';
import Clock from '../../assets/images/png/clock.png';

const CourseCard = ({ image, category, title, duration, isList, showDivider }) => {
    return (
        <>
            {isList ? (
                <>
                    {/* // ----------------------------------- List Layout ----------------------------------- // */}
                    <div className="rounded-lg overflow-hidden flex flex-col sm:flex-row ">
                        <div className="w-full sm:max-w-[320px] sm:max-h-[300px]">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover sm:min-w-[250px] sm:min-h-[250px] rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
                            />
                        </div>
                        <div className="p-4 flex-1 flex-col space-y-2 justify-start">
                            <div>
                                <span className="inline-block px-3 py-1 text-xs font-semibold text-[#1488CC] bg-[#EDF2FF] border border-[#1488CC] rounded-full mb-3">
                                    {category}
                                </span>
                            </div>

                            <h3 className="text-[18px] font-medium text-black mb-2">{title}</h3>

                            <p className="text-sm text-gray-500 flex items-center mb-4">
                                <img src={Clock} className="object-contain w-4 h-4 mr-1" />
                                {duration}
                            </p>

                            <a
                                href="#"
                                className="flex items-center  font-semibold text-[#1488CC]  mt-auto"
                            >
                                Learn More
                                <img src={ArrowRight} className="ml-2 w-7 h-4" />
                            </a>
                        </div>
                    </div>
                    {showDivider && <hr className="border-t border-gray-200 my-4" />}
                </>
            ) : (
                // --------------------------------- Grid Layout (Default) ----------------------------//
                <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
                    <img
                        src={image}
                        alt={title}
                        className="w-full min-h-[200px] object-cover bg-gray-200"
                    />
                    <div className="p-4 flex-col flex w-full flex-grow">
                        <div>
                            <span className="inline-block px-3 py-1 text-xs font-semibold text-[#1488CC] bg-[#EDF2FF] border-[#1488CC] border rounded-full mb-4">
                                {category}
                            </span>
                        </div>
                        <h3 className="text-[18px] font-[500] text-black mb-3">{title}</h3>
                        <div className="flex-grow" />
                        <p className="text-sm text-gray-500 flex items-center py-4">
                            <img src={Clock} className="object-contain w-4 h-4 mr-1" />
                            {duration}
                        </p>
                    </div>
                    <a
                        href="#"
                        className="mt-auto flex justify-end items-center bg-[#EDF2FF] px-3 py-2 text-black font-[600]"
                    >
                        Learn More <img src={ArrowRight} className="ml-2 w-7 h-4" />
                    </a>
                </div>
            )}
        </>
    );
};

export default CourseCard;
