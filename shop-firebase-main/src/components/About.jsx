import React from "react";
import Navbar from "./UI/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="px-24">
        <img src="./bg_about.jpg" alt="" />
        <h1 className="text-3xl font-bold py-10">Your Brend</h1> Your Brand — бренд родившийся в 2012 году на улицах
        юго-запада Санкт-Петербурга. Наша концепция вышла далеко за рамки
        производства одежды. С первых дней существования мы тесно связаны с
        уличной культурой, став её неотъемлемой частью. Мы ежегодно организуем
        мероприятия связанные с хип-хоп культурой, соревнования по уличным видам
        спорта. Помогая в организации и проведении мероприятий, Your Brand
        стал спонсором для спортсменов, музыкантов и художников из разных
        уголков мира. Наша команда не стоит на месте, а постоянно развивается и
        готова идти вперед! Спасибо тем, кто в нас верит и помогает покорять
        новые вершины.
      </div>
    </div>
  );
};

export default About;
