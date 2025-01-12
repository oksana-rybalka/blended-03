import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { getCountries } from '../service/countryApi';

const Home = () => {
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      try {
        const newCountries = await getCountries();
        setCountry(newCountries);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountries();
  }, []);

  console.log(country);
  return (
    <Section>
      <Container>
        <Heading title="Home" bottom />
      </Container>
    </Section>
  );
};
export default Home;
