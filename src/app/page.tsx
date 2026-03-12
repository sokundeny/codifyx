import CaseStudies from "./_components/caseStudies";
import Team from "./_components/team";
import Testimonial from "./_components/testimonial";
import Tools from "./_components/tools";
import LandingPage from "./_components/landingPage";
import AboutUs from "./_components/aboutUs";
import Service from "./_components/service"
import CTA from "./_components/cta";


export default function Home() {
  return (
    <div className="flex flex-col">
      <LandingPage/>
      <AboutUs />
      <Service/>
      <Tools />
      <CaseStudies />
      <Testimonial />
      <Team />
      <CTA/>
    </div>
  );
}
