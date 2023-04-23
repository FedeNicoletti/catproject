import "./App.css";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>Here's what our company cats say, and in case you didn't know, they speak lorem ipsum:</h1>
        <Testimonials
        name="Fatson"
        country="Irlanda"
        image="dev"
        position="Software Engineer"
        company="Best Company Cats"
        testimonial = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo culpa debitis similique aspernatur, in maxime sequi veniam eligendi velit possimus molestiae. Exercitationem neque suscipit incidunt nesciunt minima! Molestiae, laboriosam aut!"
        />
        <Testimonials
        name="Zapatilla"
        country="Brasil"
        image="boss"
        position="Team Leader"
        company="Best Company Cats"
        testimonial = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo culpa debitis similique aspernatur, in maxime sequi veniam eligendi velit possimus molestiae. Exercitationem neque suscipit incidunt nesciunt minima! Molestiae, laboriosam aut!"
        />
        <Testimonials
        name="Picasso"
        country="Argentina"
        image="designer"
        position="Designer"
        company="Best Company Cats"
        testimonial = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo culpa debitis similique aspernatur, in maxime sequi veniam eligendi velit possimus molestiae. Exercitationem neque suscipit incidunt nesciunt minima! Molestiae, laboriosam aut!"
        />
      </div>
    </div>
  );
}

export default App;
