import { useLocation } from 'react-router-dom';
import { Title } from './Header.styled';
// import { FiMenu } from 'react-icons/bi';
// import { ReactComponent as BurgerMenuIcon } from '../../icons/burger-menu-34.svg';

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);

  const strongLocation = location.pathname.slice(1);

  const title = strongLocation[0].toLocaleUpperCase() + strongLocation.slice(1);
  console.log(title);

  return (
    <>
      <Title>User Profile</Title>

      {title === 'Account' ? (
        <Title>User Profile</Title>
      ) : (
        <Title>{title}</Title>
      )}

      {/* <button type="button"></button> */}
      {/* <AddFeedbackBtn type="button">Feedback</AddFeedbackBtn> */}
    </>
  );
};

export default Header;
