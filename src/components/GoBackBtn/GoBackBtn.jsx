import { Link, useLocation } from 'react-router-dom';
import css from './GoBackBtn.module.css';
const GoBackBtn = () => {
  const location = useLocation();
  console.log(location);

  return (
    <Link className={css.link} to={location.state}>
      GoBackBtn
    </Link>
  );
};

export default GoBackBtn;
