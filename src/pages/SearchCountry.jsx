import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import SearchForm from '../components/SearchForm/SearchForm';
import Section from '../components/Section/Section';
import { fetchByRegion } from '../service/countryApi';
import CountryList from '../components/CountryList/CountryList';

const SearchCountry = () => {
  const [countrys, setCountrys] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');

  const onSubmit = query => {
    setQuery(query);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    const searchedCountries = async () => {
      setIsLoading(true);

      try {
        const data = await fetchByRegion(query);
        setCountrys(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    searchedCountries();
  }, [query]);

  return (
    <Section>
      <Container>
        <Heading title="SearchCountry" bottom />
        <SearchForm onSubmit={onSubmit} />
        <CountryList countrys={countrys} />
      </Container>
    </Section>
  );
};

export default SearchCountry;
