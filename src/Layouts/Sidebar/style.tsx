import styled from 'styled-components';
import { Sidebar } from 'oah-ui';

const SidebarStyled = styled(Sidebar)`
  background: transparent;
  & header {
    padding-bottom: 0.5rem;
    text-align: center;
    display: flex;
    height: auto;
    button {
      font-size: 1.5rem;
      padding: 0.25rem 0.5rem;
    }
  }
`;
export default SidebarStyled;
