import styled from 'styled-components';

export const Icon = styled.div`
  a {
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }
    p {
      color: #3a3a3a;
      margin-left: 10px;
    }
    img {
      width: 50;
      height: 30px;
      border-radius: 50%;
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
