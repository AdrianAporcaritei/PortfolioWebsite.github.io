import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

import project1 from "../assets/RestaurantApp.JPG"
import project2 from "../assets/RestaurantApp2.JPG"
import project3 from "../assets/SocioZone.JPG"
import project4 from "../assets/SocioZone2.JPG"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle, img }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
  bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative ">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{subtitle}</p>
      </div>
      <img src={img} alt={projectTitle} className="h-400 w-400" />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
          <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        Below you can find  some of my projects that I developed with pleasure and during developing helped me understand and learn many concepts and tehnologies.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-gradient-to-r from-cyan-600 to-blue-300
              max-w-[550px] max-h-[490px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <a href="https://github.com/AdrianAporcaritei" rel="noreferrer" target="_blank"><Project title="RestaurantPizzaApp" subtitle="Restaurant app is a site created as an example for restaurants that cook and deliver pizza, from this site the user can order and pay for his favorite pizza." img={project1} /></a>
          <a href="https://github.com/AdrianAporcaritei" rel="noreferrer" target="_blank"><Project title="RestaurantPizzaApp" subtitle="
The application is connected to a mongoDB database and offers us the possibility to log in as admin to add and remove products from the sales page." img={project2}/></a> 
          {/* ROW 2 */}
          <a href="https://github.com/AdrianAporcaritei" rel="noreferrer" target="_blank"><Project title="SocioZone" subtitle="SocioZone is an application similar to facebook where we can add images and different evens that interest us, 
the user can also change the theme of the application by selecting the icon (moon-sun) to change from dark theme to white theme and vice versa." img={project3} /></a>
          <a href="https://github.com/AdrianAporcaritei" rel="noreferrer" target="_blank"><Project title="SocioZone" subtitle="
The application is connected to the MongoDB database and users can create their own account to log in." img={project4} /></a>
          <div
            className="flex justify-center text-center items-center p-10 max-w-[710px] max-h-[600px] text-2xl font-playfair font-semibold
            bg-gradient-to-r from-black via-emerald-900 to-cyan-600
            "
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;