import Container from '@/components/Container';
import Projects from '@/components/Projects';
import Designs from '@/components/Designs';
import Skills from '@/components/Skills';
import Clients from '@/components/Clients';
import Testimonial from '@/components/Testimonial';
import ContactMe from '@/components/ContactMe';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <Container>
      <div className="px-5">
        <Hero />

        <h3 id="myskills" className="titleafter text-bluegray">
          My Technical Skills
        </h3>
        <Skills />

        <h3 id="mywork" className="titleafter text-bluegray">
          My Work
        </h3>
        <Projects />
        <Designs />

        <h3 id="clients" className="titleafter text-bluegray">
          My Clients
        </h3>
        <Clients />
      </div>

      <Testimonial />

      <div className="px-5">
        <ContactMe />
        <Footer />
      </div>
    </Container>
  );
}
