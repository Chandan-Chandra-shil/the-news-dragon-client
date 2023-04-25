import React from 'react';
import editorOne from "../../../assets/editorsInsight1.png"
import editorTwo from "../../../assets/editorsInsight2.png"
import editorThree from "../../../assets/editorsInsight3.png"
import { Card, Col, Row } from 'react-bootstrap';
const EditorInside = () => {
  return (
    
    <div className='mt-4'>
      <h2>Editor inside</h2>
    
      <Row xs={1} md={2} lg={3} className="g-4 mt-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={editorOne} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={editorTwo} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={editorThree} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EditorInside;