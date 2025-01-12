import { useParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { useEffect, useState } from 'react';
import { fetchCountry } from '../service/countryApi';
import CountryInfo from '../components/CountryInfo/CountryInfo';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';

const Country = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCounry = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCounry();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <GoBackBtn />
        <Heading title="SearchCountry" bottom />
        {/* <CountryInfo 
          // flag={country.flag}
          // capital={country.capital}
          // countryName={country.countryName}
          // languages={country.languages}
          // population={country.population}
        // />*/}
        <CountryInfo {...country} />
      </Container>
    </Section>
  );
};

export default Country;
