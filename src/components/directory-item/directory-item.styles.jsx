import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  text-align: center;

  h2 {
    font-weight: bold;
    margin: 0;
    font-size: clamp(16px, 2vw, 22px);
    color: #4a4a4a;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: clamp(12px, 1.5vw, 16px);
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  position: relative;
  height: auto;
  aspect-ratio: 3 / 2; /* Keeps consistent tile shape, optional */

  &:hover {
    cursor: pointer;

    ${BackgroundImage} {
      transform: scale(1.1);
    }

    ${Body} {
      opacity: 0.9;
    }
  }

  @media (max-width: 992px) {
    min-width: 45%;
  }

  @media (max-width: 768px) {
    min-width: 100%;
    margin: 0 0 15px 0;
  }
`;
