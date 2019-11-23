import React from "react";
import {Form} from "react-bootstrap";
import styled from "styled-components";

const FormWrapper = styled.div`
    margin-top: 20px;
`;

const GoogleForm = () => {
  return (
    <FormWrapper>
    <Form>
      <Form.Group controlId="formGoogle">
        <Form.Control type="text" placeholder="Google" />
      </Form.Group>
    </Form>
    </FormWrapper>
  );
};

export default GoogleForm;