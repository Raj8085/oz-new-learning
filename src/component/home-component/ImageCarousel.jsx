import { useEffect, useState, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Import required Swiper modules
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import Image from "next/image";


const ImageCarousel = () => {
  const slides = [
    {
      id: 1,
      src: "/ozgallary.jpg",
      title: "Make an enquiry",
      // price: "INR 33.70 Lac",
      location: "Indore",
      size: "3.85 Acres",
      configuration: {
        type: "Shop",
        area: "100 sq.Ft",
      },
    },
    {
      id: 2,
      src: "/ozgallery2.jpg",
      title: "Make an enquiry",
      // price: "INR 45.50 Lac",
      location: "Indore",
      size: "5.0 Acres",
      configuration: {
        type: "Office Space",
        area: "120 sq.Ft",
      },
    },
    {
      id: 3,
      src: "/ozgallary3.jpg",
      title: "Make an enquiry",
      // price: "INR 55.00 Lac",
      location: "Indore",
      size: "4.5 Acres",
      configuration: {
        type: "Retail",
        area: "150 sq.Ft",
      },
    },
    {
      id: 4,
      src: "/gallary4.jpg",
      title: "Make an enquiry",
      // price: "INR 55.00 Lac",
      location: "Indore",
      size: "7.5 Acres",
      configuration: {
        type: "Retail",
        area: "160 sq.Ft",
      },
    },
    // {
    //   id: 5,
    //   src: "https://wallpapercave.com/wp/wp3386769.jpg",
    //   title: "Pune",
    //   price: "INR 65.00 Lac",
    //   location: "Pune City",
    //   size: "2.5 Acres",
    //   configuration: {
    //     type: "Mall",
    //     area: "60 sq.Ft",
    //   },
    // },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Reset progress bars and restart animations
  const resetProgressBars = () => {
    const progressBars = document.querySelectorAll(".progress-fill");
    progressBars.forEach((bar) => {
      bar.style.width = "0%"; // Ensure the progress bar starts from 0%
      bar.style.animation = "none"; // Reset animation
    });
  };

  useEffect(() => {
    // Reset the progress bars at the start of the component
    resetProgressBars();

    // Set the animation for the active progress bar
    const progressBar = document.querySelector(`.progress-fill-${activeIndex}`);
    if (progressBar) {
      progressBar.style.animation = `grow ${5000}ms linear forwards`;
    }
  }, [activeIndex]); // Trigger this effect when activeIndex changes

  // Handle slide change
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex); // Update activeIndex on slide change
  };

  // Handle next slide
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  // Handle previous slide
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="py-20 px-5 xl:px-40">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Discover the Spirit of Our Campus.
        </h2>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center mt-10 gap-5 ">
        <div className="flex flex-col justify-between bg-white rounded-lg p-5 shadow-lg shadow-gray-400 w-full lg:w-[25%] h-[380px]">
          {/* <div>
            <img
              src="/building-img.svg"
              alt="logo"
            //   width={50}
            //   height={50}
              className="w-28 h-28"
            />
            <h2 className="text-xl font-semibold mt-4">
              Best Sellers in India
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Our freshly brewed list of the best residential projects from top
              rated builders in the country, backed by our award-winning
              start-to-finish services.
            </p>
          </div> */}
          <div>
  <img
    src="https://www.mindinventory.com/blog/wp-content/uploads/2022/10/full-stack1200.png"
    alt="Coding Course"
    className="w-64 h-32"
  />
  <h2 className="text-xl font-semibold mt-4">
    Top IT Courses in Demand
  </h2>
  <p className="text-sm text-gray-500 mt-2">
    Explore our most popular courses like Full-Stack Web Development, Data Science, and Cloud Computing — designed by industry experts to get you job-ready.
  </p>
</div>

          <div>
            <Link to="/fullstack">
            <Button
              variant="default"
              className="bg-gradient-to-r from-orange-600 to-red-500 rounded-md"
            >
              View All
            </Button>
            </Link>
          </div>
        </div>
        <div className="h-[380px] w-full lg:w-[75%] relative">
          <div className="relative h-full w-full">
            {/* Custom Progress Bar */}
            <div className="absolute top-4 left-4 right-4 z-10 flex gap-2">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`progress-bar w-full h-[5px] ${
                    index < activeIndex ? "bg-white" : "bg-gray-600"
                  } relative overflow-hidden`}
                >
                  <div
                    className={`progress-fill progress-fill-${index} h-full bg-white`}
                  ></div>
                </div>
              ))}
            </div>

            {/* Swiper Component */}
            <Swiper
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onReachEnd={() => {
                // Reset progress bars once all slides have been shown (looping starts)
                resetProgressBars();
                // Restart animation on the first slide
                setActiveIndex(0);
              }}
              modules={[Pagination, Autoplay, EffectFade]}
              className="w-full rounded-lg h-full"
            >
              {/* Slides */}
              {slides.map((slide, index) => (
                <SwiperSlide key={slide.id}>
                  <div
                    className="relative w-full h-full"
                    style={{
                      backgroundImage: `url(${slide.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div>
                      <div
                        className={`absolute bottom-2 left-2 p-2 md:p-5 lg:bottom-4 lg:left-4 bg-white rounded-md transition-all duration-1000 transform ${
                          activeIndex === index
                            ? "translate-y-0 opacity-100"
                            : "translate-y-40 opacity-0"
                        }`}
                      >
                        <div className="h-full flex flex-col justify-between">
                          <div>
                            <div className="flex gap-1 md:gap-0 justify-between">
                              <p className="text-sm font-semibold md:font-bold md:text-lg">{slide.title}</p>
                              <p className="text-semibold text-sm md:text-base md:font-bold text-primary">
                                {slide.price}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs md:text-md font-semibold mt-1 text-gray-700">
                                {slide.location}
                              </p>
                            </div>
                            {/* <div className="mt-2 rounded-lg md:shadow-md md:shadow-slate-300 md:border md:border-gray-400 w-full">
                              <div className="flex items-center md:gap-3 md:border-b md:border-gray-400 md:p-2">
                                <div>
                                  <img
                                    src="/building-img.svg"
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className="hidden md:block w-14 h-14"
                                  />
                                </div>
                                <div className="w-full h-full flex flex-row md:flex-col md:items-start md:justify-normal items-center justify-between">
                                  <p className="text-gray-500 text-base">
                                    Project Size
                                  </p>
                                  <p className="text-sm">{slide.size}</p>
                                </div>
                              </div>

                              <div className="flex items-center md:gap-3 md:p-2">
                                <div>
                                  <img
                                    src="/building-img.svg"
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className="hidden md:block w-14 h-14"
                                  />
                                </div>
                                <div className="w-full h-full flex flex-row md:flex-col md:items-start md:justify-normal items-center justify-between">
                                  <p className="text-gray-500 text-base">
                                    Configuration
                                  </p>
                                  <p className="text-sm">
                                    {slide.configuration?.type || "N/A"}
                                  </p>
                                  <p className="hidden md:block text-sm">
                                    {slide.configuration?.area || "N/A"}
                                  </p>
                                </div>
                              </div>
                            </div> */}
                          </div>
                          <div className="mt-5">
                            <a href="tel: 9171453224" className="text-sm">
                            <Button
                              variant="default"
                              className="bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-500 hover:to-red-400 w-full rounded-md text-white"
                            >
                              Get a call back
                            </Button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="hidden md:block">
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20">
                <div
                  onClick={handlePrev}
                  className="bg-white text-black cursor-pointer p-3 rounded-full shadow-lg"
                  style={{ transform: "translateX(-50%)" }}
                >
                  <ArrowLeft className="text-xl w-6" />
                </div>
              </div>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20">
                <div
                  onClick={handleNext}
                  className="bg-white text-black cursor-pointer p-3 rounded-full shadow-lg"
                  style={{ transform: "translateX(50%)" }}
                >
                  <ArrowRight className="text-xl w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
