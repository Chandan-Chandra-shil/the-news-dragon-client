import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Terms and Conditions</h1>
          <p>
            Welcome to our website. If you continue to browse and use this
            website, you are agreeing to comply with and be bound by the
            following terms and conditions of use:
          </p>
          <p>
            - The content of the pages of this website is for your general
            information and use only. It is subject to change without notice.
          </p>
          <p>
            - Neither we nor any third parties provide any warranty or guarantee
            as to the accuracy, timeliness, performance, completeness or
            suitability of the information and materials found or offered on
            this website for any particular purpose...
          </p>
          <p>
            - Your use of any information or materials on this website is
            entirely at your own risk, for which we shall not be liable. It
            shall be your own responsibility to ensure that any products,
            services or information available through this website meet your
            specific requirements...
          </p>
          <p>
            - This website contains material which is owned by or licensed to
            us. This material includes, but is not limited to, the design,
            layout, look, appearance and graphics. Reproduction is prohibited
            other than in accordance with the copyright notice...
          </p>
          <p>
            - All trademarks reproduced in this website which are not the
            property of, or licensed to, the operator are acknowledged on the
            website.
          </p>
          <p>
            - Unauthorised use of this website may give rise to a claim for
            damages and/or be a criminal offence.
          </p>
          <p>
            - From time to time, this website may also include links to other
            websites. These links are provided for your convenience to provide
            further information. They do not signify that we endorse the
            website(s)...
          </p>
          <p>
            - Your use of this website and any dispute arising out of such use
            of the website is subject to the laws of [insert your country/region
            here].
          </p>
        </Col>
        <p><small>Go Back to <Link className='link-primary' to="/register">Register</Link></small></p>
      </Row>
    </Container>
  );
};

export default TermsAndConditions;