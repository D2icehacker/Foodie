import { useRef } from "react";

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
 
  return (
    <>
      <section className="w-full" id="home">
        <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">

          <p className="text-base text-textColor text-center md:text-left ">
            Welcome to Foodie, your one-stop destination for exploring
            delicious meals and satisfying your cravings. With our vast
            collection of delectable recipes, you'll discover a world of
            culinary wonders at your fingertips. From traditional classics to
            exotic delights, we bring you the finest meals from around the
            globe.
          </p>
          <p className="text-base text-textColor text-center md:text-left ">
            Browse through our enticing selection of 10 meals, each displayed in
            a captivating card view. Use the name filter to quickly find your
            favorite dish or explore new and exciting options. Once you've found
            a meal that catches your eye, simply click on it to dive into a
            gastronomic adventure.
          </p>
          <p className="text-base text-textColor text-center md:text-left ">
            Foodie is committed to bringing joy and satisfaction to your
            dining experiences. Explore, order, and enjoy the convenience of a
            delicious meal delivered right to your doorstep. Start your culinary
            <span ref={ref}>journey with us today!</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
