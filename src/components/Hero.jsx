import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { styles } from "../styles";

const services = [
  "Web Development",
  "Digital Marketing",
  "Social Media Marketing",
  "SEO Optimization",
];

const Hero = () => {
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prevService) => (prevService + 1) % services.length);
    }, 3000); // Change service every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <HelmetProvider>
      <section className="relative w-full h-[600px] mx-auto">
        <Helmet>
          <title>Digital Drivers | {services[currentService]}</title>
          <meta
            name="description"
            content={`Digital Drivers specializes in ${services[currentService]} to drive your business digitally to the next level.`}
          />
          <meta
            name="keywords"
            content="digital agency, web development, digital marketing, social media marketing, SEO optimization"
          />
          <meta
            property="og:title"
            content={`Digital Drivers | ${services[currentService]}`}
          />
          <meta
            property="og:description"
            content={`Digital Drivers specializes in ${services[currentService]} to drive your business digitally to the next level.`}
          />
          <meta property="og:url" content="https://www.digitaldrivers.co.uk/" />
          <meta
            property="og:image"
            content="https://www.digitaldrivers.co.uk/images/social-preview.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content={`Digital Drivers | ${services[currentService]}`}
          />
          <meta
            name="twitter:description"
            content={`Digital Drivers specializes in ${services[currentService]} to drive your business digitally to the next level.`}
          />
          <meta
            name="twitter:image"
            content="https://www.digitaldrivers.co.uk/images/twitter-preview.jpg"
          />
        </Helmet>
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>
              Hi,<br></br> We're{" "}
              <span className="text-[#915eff]"> Specialised</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              in Driving Your Business Digitally
              <br className="sm:block hidden" /> to the Next Level Through
            </p>
            <motion.p
              className={`${styles.heroSubTextBanner} mt-8`}
              key={currentService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {services[currentService]}
            </motion.p>
          </div>
        </div>
        <div className="absolute xs:bottom-0 bottom-0 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Hero;
