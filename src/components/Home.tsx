import Button from "./Button";
import { useRef } from "react";

const Home: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollIntoTopMeal = () => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <>
      <section className="w-full" id="home">
        <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
          <p className="text-[1.5rem] sm:text-[2rem] lg:text-[3.5rem] font-bold tracking-wide sm:self-start self-center text-headingColor">
            Delicious Meals, <br />
            Delivered with
            <span className="pl-3 text-[2rem] sm:text-[2.5rem] lg:text-[4rem]" style={{ color: 'grey' }}>
              Foodie!
            </span>
          </p>

          <Button title="Order Now" onClick={scrollIntoTopMeal}  />
        </div>
      </section>
    </>
  );
};

export default Home;
