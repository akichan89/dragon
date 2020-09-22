import React from 'react';
import styled from 'styled-components';
import PizzaApp from './OrderForm';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: 2fr;
  grid-auto-rows: minmax(25px, auto);
`; 

export const Order = () => (
  <div className="order-page">
      <GridWrapper>
    <h2>Order</h2>
  
    <PizzaApp />

    </GridWrapper>

    </div>
 
)