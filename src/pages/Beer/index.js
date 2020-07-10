import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Info, BeerInfo, BeerTips } from './styles';

export default function Beer() {
  return (
    <>
      <Container>
        <Image>
          <img src="https://images.punkapi.com/v2/103.png" alt="Beer" />
        </Image>
        <Info>
          <BeerInfo>
            <li>
              <span>Name:</span>
              <strong>Punk IPA 2007 - 2010</strong>
            </li>
            <li>
              <span>Tag line:</span>
              <strong>Post Modern Classic. Spiky. Tropical. Hoppy.</strong>
            </li>
            <li>
              <span>Abv:</span>
              <strong>6.0</strong>
            </li>
            <li>
              <span>Ibu:</span>
              <strong>60.0</strong>
            </li>
            <li>
              <span>Pub/Store:</span>
              <strong>Pub Traders</strong>
            </li>
            <li>
              <span>Value:</span>
              <strong>R$ 35,00</strong>
            </li>
            <li>
              <span>Contribuited by:</span>
              <Link to="/user"> Joninhaa's o cachaceiro</Link>
            </li>
          </BeerInfo>
          <BeerTips>
            <ul>
              <li>
                <h4>Description</h4>
                <p>
                  Our flagship beer that kick started the craft beer revolution.
                  This is James and Martin's original take on an American IPA,
                  subverted with punchy New Zealand hops. Layered with new world
                  hops to create an all-out riot of grapefruit, pineapple and
                  lychee before a spiky, mouth-puckering bitter finish.
                </p>
              </li>
              <li>
                <h4>Food Pairing</h4>
                <p>
                  Our flagship beer that kick started the craft beer revolution.
                </p>
              </li>
              <li>
                <h4>Drinking Tips</h4>
                <p>
                  Our flagship beer that kick started the craft beer revolution.
                  This is James and Martin's original take on an American IPA,
                </p>
              </li>
            </ul>
          </BeerTips>
        </Info>
      </Container>
    </>
  );
}
