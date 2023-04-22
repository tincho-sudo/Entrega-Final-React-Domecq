import { Container, Row, Col } from "react-bootstrap";
import "./aboutContainer.css";
//
// ESTE COMPONENTE NO TIENE UN USO REAL
//
function AboutContainer() {
  return (
    <Container>
      <Row className="justify-content-center my-5">Sobre Nosotros</Row>
      <Row className="justify-content-center mb-5">
        <Col xs={12} md={8}>
          <p>
            En TThings nos apasiona la tecnología, el cine, las series y los
            videojuegos. Somos una empresa dedicada a la venta de hardware y
            software en todas las plataformas, desde ordenadores hasta consolas
            y dispositivos móviles.
          </p>
          <p>
            Ofrecemos una amplia selección de juegos, series y películas de
            todos los géneros para que nuestros clientes puedan disfrutar de sus
            aficiones favoritas. También contamos con un equipo de expertos en
            tecnología que puede ayudar a los clientes con cualquier problema
            técnico que puedan tener.
          </p>
          <p>
            TThings se compromete a ofrecer la mejor experiencia de compra en
            línea, desde la navegación en nuestro sitio web hasta el envío y la
            entrega de los productos (Cuando habilitemos el servicio de envios y
            procesamiento de datos jajan't). Estamos dedicados a satisfacer las
            necesidades de nuestros clientes y a brindarles el mejor servicio
            posible (Cuando habilitemos el servicio de envios).
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutContainer;
