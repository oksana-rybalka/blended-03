import { Link, useLocation } from 'react-router-dom';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

const CountryList = ({ countrys }) => {
  const location = useLocation();

  return (
    <>
      <Grid>
        {countrys.map(country => (
          <GridItem key={country.id}>
            <Link to={`/country/${country.id}`} state={location}>
              <img src={country.flag} alt={country.country} />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
export default CountryList;
