import React, { useState } from 'react';
import {Form} from "react-bootstrap";
import styled from "styled-components";

const FormWrapper = styled.div`
    margin-top: 20px;
`;

const GoogleForm = () => {
  const [seachString, setSeachString] = useState('');

  return (
    <FormWrapper>
    <Form>
      <Form.Group controlId="formGoogle">
        <Form.Control autofocus type="text" placeholder="Google" />
      </Form.Group>
    </Form>
    </FormWrapper>
  );
};

export default GoogleForm;