import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import '../style/contact.scss';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: 2fr;
  grid-auto-rows: minmax(25px, auto);`

export const Contact = () => (
  <div className="contact-page">
      <GridWrapper>
    <h2>Contact</h2>
  
    <ContactForm />

    </GridWrapper>
    </div>
 
)
