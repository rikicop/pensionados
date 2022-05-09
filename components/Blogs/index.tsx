import Image from "next/image";
import React from "react";
import styled from "styled-components";
import blog1 from "../../assets/noti1.jpeg";
import blog2 from "../../assets/noti2.jpeg";
import blog3 from "../../assets/noti3.jpeg";

const Blogs = () => {
  const images = [
    {
      picture: blog1,
      title: "Casa en Barranquilla?",
      description:
        "Pensionados que compren casa en Barranquilla aplican a exención del predial. Los beneficiarios pueden ahorrarse más de 42 millones de pesos, según cifras oficiales del Distrito. ",
    },
    {
      picture: blog2,
      title: "Tarifas en servicios de salud.",
      description:
        "Las nuevas tarifas de los servicios de salud para pensionados. La medida fue tomada por el Gobierno Nacional para ayudar los beneficiarios con menos ingresos.",
    },
    {
      picture: blog3,
      title: "Consultar fondo de pensiones",
      description:
        "Así puede consultar su fondo de pensiones y las semanas que tiene cotizadas .Los fondos de pensiones tienen portales web para que los afiliados consulten su historial laboral.",
    },
  ];

  return (
    <Section id="blogs">
      <div className="title">
        <h2>Noticias</h2>
        {/* <h5>Donde te puedes promocionar!</h5> */}
      </div>
      <div className="blogs">
        {images.map(({ picture, title, description }) => {
          return (
            <div className="blog" key={title}>
              <div className="image-wrapper">
                <Image src={picture} alt="imagen" />
              </div>
              <div className="data">
                <p
                  style={{
                    color: "#10aec1",
                    fontFamily: "Roboto",
                    fontSize: "18px",
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "1rem",
                    fontFamily: "Roboto",
                    fontWeight: "500",
                  }}
                >
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Blogs;

const Section = styled.section`
  margin: 4rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }
  .blogs {
    display: flex;
    gap: 5rem;
    .blog {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-direction: column;
      background-color: #fff;
      border-bottom: 0.5rem transparent solid;
      transition: 0.3s ease-in-out;
      &:hover {
        border-color: var(--primary-color);
      }
      .image-wrapper {
        img {
          max-width: 100%;
          max-height: 100%;
          object-fit: cover;
        }
      }

      .data {
        padding: 1rem;
        gap: 1rem;
        display: flex;
        flex-direction: column;
        p {
          font-size: 0.9rem;
          font-weight: 100;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;
    .title {
      h2 {
        font-size: 2.4rem;
        color: var(--primary-color);
      }
    }
    .blogs {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;
