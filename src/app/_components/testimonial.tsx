import TestimonialCard from "./testimonialCard";

import Kagura from "@/assets/kagura.jpg";
const Testimonial: React.FC = () => {

  const text1 = "Lorem ipsum dolor sit amet consectetur. Tristique viverra gravida egestas venenatis aliquet duis. Vitae eu ipsum augue curabitur.";
  const text2 = "The most valuable aspect of working with Codifyx was their proactive communication and genuine sense of partnership. From the very beginning, they took the time to understand our goals and consistently kept us informed at every stage of the project."
  return (
    <section className="flex flex-col gap-20 items-center py-20 px-28 w-full">
      <div className="flex flex-col items-center gap-3 font-semibold">
        <h3 className="text-primary leading-6">TESTIMONIALS</h3>
        <h1 className="text-4xl leading-11 text-text-primary tracking-[-0.02em]">
          From Our Client’s Experiences
        </h1>
      </div>

      <div className="flex gap-2 w-full">

        <div className="h-182.5 overflow-hidden relative">
          <div className="flex flex-col gap-2 animate-[scrollUp_24s_linear_infinite]
                          hover:[animation-play-state:paused]"
          >
            <TestimonialCard text={text1} profile={Kagura} />
            <TestimonialCard text={text2} profile={Kagura} />
            <TestimonialCard text={text1} profile={Kagura} />

            <TestimonialCard text={text1} profile={Kagura} />
            <TestimonialCard text={text2} profile={Kagura} />
            <TestimonialCard text={text1} profile={Kagura} />
          </div>
        </div>

        <div className="h-182.5 overflow-hidden relative">
          <div className="flex flex-col gap-2 animate-[scrollUp_24s_linear_infinite]
                          [animation-direction:reverse] hover:[animation-play-state:paused]"
          >
            <TestimonialCard text={text1} profile={Kagura} />
            <TestimonialCard text={text2} profile={Kagura} />
            <TestimonialCard text={text1} profile={Kagura} />

            <TestimonialCard text={text1} profile={Kagura} />
            <TestimonialCard text={text2} profile={Kagura} />
            <TestimonialCard text={text1} profile={Kagura} />
          </div>
        </div>

        <div className="h-182.5 overflow-hidden relative">
          <div className="flex flex-col gap-2 animate-[scrollUp_24s_linear_infinite]
                          hover:[animation-play-state:paused]"
          >
            <TestimonialCard text={text1} profile={Kagura} />
            <TestimonialCard text={text2} profile={Kagura} />
            <TestimonialCard text={text1} profile={Kagura} />

            <TestimonialCard text={text1} profile={Kagura} />
            <TestimonialCard text={text2} profile={Kagura} />
            <TestimonialCard text={text1} profile={Kagura} />
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Testimonial;