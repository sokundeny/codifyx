import CaseStudies from "./_components/caseStudies";
import Team from "./_components/team";
import Testimonial from "./_components/testimonial";
import Tools from "./_components/tools";
import LandingPage from "./_components/landingPage";
import AboutUs from "./_components/aboutUs";


export default function Home() {
  return (
    <div className="flex flex-col">
      <LandingPage/>
      <AboutUs/>
      <Tools />
      <CaseStudies />
      <Testimonial />
      <Team />
      <div className="h-200"></div>
    </div>
  );
}
