import React from "react";
import portfolioImage from "../../assets/image/propic.png";
const Portfolio = () => {
  return (
    <div className="container 2xl:px-20 px-4  mx-auto my-6">
      <div className="border bg-white p-4 md:p-9">
        <div className=" items-start  flex md:flex-row flex-col  gap-10">
          <div className="">
            <img className="max-w-xs" src={portfolioImage} alt="" />
          </div>
          <div>
            <h3 className="text-3xl">Solaiman Islam Naiem</h3>
            <div className="flex items-center gap-2">
              <p className="my-2 font-medium text-xl">
                UI UX & Front-End Developer
              </p>
              <a
                href="mailto:solaiman.naiem890@gmail.com"
                className="text-gray-500 underline"
              >
                solaiman.naiem890@gmail.com
              </a>
            </div>

            <p className="text-gray-500">
              Highly Focused & Enthusiastic web developer, having 1 year+ of
              previous experience of UI UX Design. I want to begin my career in
              this field to enrich talent and skills as a Front-end Web
              Developer
            </p>
            <div className="divider"></div>
            <div className="flex items-center gap-10">
              <h3 className="text-2xl">Educations:</h3>
              <p>MILITARY INSTITUTE OF SCIENCE AND TECHNOLOGY (MIST)</p>
              <p>B.Sc. in CSE | Feb, 2019 - Present</p>
            </div>
            <div className="divider"></div>

            <div className="flex  gap-10 mt-5">
              <h3 className="text-2xl">Skills:</h3>
              <p>
                HTML5, CSS3, SCSS, Bootstrap5, Tailwindcss, Zurb Foundation,
                JavaScript ªS6, React.js, Node.js, Express.js, Mongodb, Redux,
                Context API, React Query, Payment Getaways, Git, Github, VS
                Code, Chrome Dev Tool, Heroku, Firebase, Heroku, Figma, Adobe
                XD.
              </p>
            </div>
            <div className="divider"></div>

            <div className="flex  gap-10 mt-5">
              <h3 className="text-2xl">Projects:</h3>
              <div>
                <a
                  href="https://github.com/Naiem890/100daysofcode"
                  className="text-blue-500"
                >
                  1. https://github.com/Naiem890/100daysofcode
                </a>
                <br />
                <a
                  href="https://github.com/Naiem890/Landing-Page-with-zurb"
                  className="text-blue-500"
                >
                  1. https://github.com/Naiem890/Landing-Page-with-zurb
                </a>
                <br />
                <a
                  href="https://github.com/Naiem890/workstation"
                  className="text-blue-500"
                >
                  1. https://github.com/Naiem890/workstation
                </a>
              </div>
            </div>
          </div>

          {/* <div className="lg:w-2/3 w-full"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
