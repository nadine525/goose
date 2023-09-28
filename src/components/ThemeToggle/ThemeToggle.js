import { BiMoon, BiSun } from 'react-icons/bi';
import { iconSize } from 'components/constans';
import { ThemeToggleBtn } from './ThemeToggle.styled';

const ThemeToggle = () => {
  <ThemeToggleBtn>
    <BiSun size={iconSize.xxlg} />
    <BiMoon size={iconSize.xxlg} />
  </ThemeToggleBtn>;
};

export default ThemeToggle;
