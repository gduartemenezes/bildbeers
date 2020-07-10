import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Info, UserInfo, UserBio, Beers, BeerCard } from './styles';

export default function User() {
  return (
    <>
      <Container>
        <Info>
          <UserInfo>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"
              alt="Beer"
            />
            <ul>
              <li>
                <span>Name:</span>
                <strong>Joninhaa's o cachaceiro</strong>
              </li>
              <li>
                <span>E-mail:</span>
                <strong>emai@email.com</strong>
              </li>
              <li>
                <span>Pub/Store:</span>
                <strong>Pub Traders</strong>
              </li>
            </ul>
          </UserInfo>
          <UserBio>
            <ul>
              <li>
                <h4>Bio</h4>
                <p>
                  Our flagship beer that kick started the craft beer revolution.
                  This is James and Martin's original take on an American IPA,
                  subverted with punchy New Zealand hops. Layered with new world
                  hops to create an all-out riot of grapefruit, pineapple and
                  lychee before a spiky, mouth-puckering bitter finish.
                </p>
              </li>
              <li>
                <h4>Hobbies</h4>
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
          </UserBio>
        </Info>
        <Beers>
          <BeerCard>
            <li>
              <img src="https://images.punkapi.com/v2/192.png" alt="Beer" />
            </li>
            <li>
              <span>Name:</span>
              <strong>Punk IPA 2007 - 2010</strong>
              <br />
              <span>Tag line:</span>
              <strong>Post Modern Classic. Spiky. Tropical. Hoppy.</strong>
              <br />
              <span>Abv:</span>
              <strong>6.0</strong>
            </li>
          </BeerCard>
          <BeerCard>
            <li>
              <img src="https://images.punkapi.com/v2/192.png" alt="Beer" />
            </li>
            <li>
              <span>Name:</span>
              <strong>Punk IPA 2007 - 2010</strong>
              <br />
              <span>Tag line:</span>
              <strong>Post Modern Classic. Spiky. Tropical. Hoppy.</strong>
              <br />
              <span>Abv:</span>
              <strong>6.0</strong>
            </li>
          </BeerCard>
          <BeerCard>
            <li>
              <img src="https://images.punkapi.com/v2/192.png" alt="Beer" />
            </li>
            <li>
              <span>Name:</span>
              <strong>Punk IPA 2007 - 2010</strong>
              <br />
              <span>Tag line:</span>
              <strong>Post Modern Classic. Spiky. Tropical. Hoppy.</strong>
              <br />
              <span>Abv:</span>
              <strong>6.0</strong>
            </li>
          </BeerCard>
          <BeerCard>
            <li>
              <img src="https://images.punkapi.com/v2/192.png" alt="Beer" />
            </li>
            <li>
              <span>Name:</span>
              <strong>Punk IPA 2007 - 2010</strong>
              <br />
              <span>Tag line:</span>
              <strong>Post Modern Classic. Spiky. Tropical. Hoppy.</strong>
              <br />
              <span>Abv:</span>
              <strong>6.0</strong>
            </li>
          </BeerCard>
        </Beers>
      </Container>
    </>
  );
}
