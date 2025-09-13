import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Button from './components/Button/Button'
import Badge from './components/Badge/Badge';
import Banner from './components/Banner/Banner';
import Card from './components/Cards/Card';
import donutCake from "./components/assets/donuts-cake-svgrepo-com.svg"
import chefMan from "./components/assets/chef-man-cap-svgrepo-com.svg"
import Testimonials from './components/Testimonials/Testimonials';
import MayAndersons from './components/assets/Maypic.jpg'

function App() {
  return (
    <div className='main-container'>
      <h1>Your components go here</h1>

      <section className="badge-container">
        <Badge shape='pill' color='red'>
          <p>Badge</p>
        </Badge>
        <Badge color='yellow'>
          <p>Badge</p>
        </Badge>
        <Badge color='pink' shape='pill'>
          <p>Badge</p>
        </Badge>
        <Badge color='indigo' shape='square'>
          <p>Badge</p>
        </Badge>
      </section>

      <section className="banner-container">
        <Banner status='success'>
          <p>Congratss</p>
        </Banner>
        <Banner status='error' />
        <Banner status='warning'>
          <p>Oh no somethings gone wrong</p>
        </Banner>
        <Banner status='neutral'>
          <p>You got an update!!</p>
        </Banner>
      </section>

      <section className="cards-container">
        <Card 
          title="Easy Deployment"
          img={donutCake}
        >
          <p>My Reusable card component!</p>
        </Card>
        <Card />
        <Card img={chefMan}>
          <p>we love chef man</p>
        </Card>
      </section>

      <section className="testimonial-container">
        <Testimonials
          title="Workcation, CTO"
          name="May Andersons"
          img={MayAndersons}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor qui
            magnam fugiat molestias reprehenderit similique voluptas. Possimus
            alias mollitia quisquam veniam neque sed fugiat cum quas, iusto
            ducimus laborum laudantium porro dicta nihil dignissimos earum ipsa
            adipisci natus. Illum ullam voluptate tenetur ab ipsum quidem earum
            delectus modi culpa! Repellat.
          </p>
        </Testimonials>
        <Testimonials
          title="Workcation, CTO"
          name="May Andersons"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor qui
            magnam fugiat molestias reprehenderit similique voluptas. Possimus
            alias mollitia quisquam veniam neque sed fugiat cum quas, iusto
            ducimus laborum laudantium porro dicta nihil dignissimos earum ipsa
            adipisci natus. Illum ullam voluptate tenetur ab ipsum quidem earum
            delectus modi culpa! Repellat.
          </p>
        </Testimonials>
        <Testimonials>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor qui
            magnam fugiat molestias reprehenderit similique voluptas. Possimus
            alias mollitia quisquam veniam neque sed fugiat cum quas, iusto
            ducimus laborum laudantium porro dicta nihil dignissimos earum ipsa
            adipisci natus. Illum ullam voluptate tenetur ab ipsum quidem earum
            delectus modi culpa! Repellat.
          </p>
        </Testimonials>
      </section>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
