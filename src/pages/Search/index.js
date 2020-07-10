import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { Container, SearchResults, SearchCard } from './styles';

export default function Search() {
  return (
    <>
      <Container>
        <Form>
          <select name="search-type" id="">
            <option value="users">Users</option>
            <option value="Beers">Beers</option>
          </select>
          <div>
            <Input
              type="text"
              name="text"
              className="search-field"
              placeholder="Search"
            />
            <button type="button">Search</button>
          </div>
        </Form>

        <SearchResults>
          <SearchCard>
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
          </SearchCard>
          <SearchCard>
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
          </SearchCard>
          <SearchCard>
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
          </SearchCard>
          <SearchCard>
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
          </SearchCard>
          <SearchCard>
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
          </SearchCard>
          <SearchCard>
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
          </SearchCard>
          <SearchCard>
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
          </SearchCard>
          <SearchCard>
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
          </SearchCard>
        </SearchResults>
      </Container>
    </>
  );
}
