import styled from "styled-components";

export const Form = styled.form`
  padding: 0 10%;
  margin: 0 auto;
`;
export const Input = styled.input`
  width: 60%;
  background: #fff;
  transition: 0.3s ease;
  margin-bottom: 0.3em;
  border-radius: 4px;
  outline: none;
  border: 1px solid transparent;
  padding: 0.5em 1em;
  :focus {
    border: 1px solid red;
  }
`;
export const InputFile = styled.input`
  :hover {
    cursor: pointer;
  }
`;
export const Row = styled.div`
  transition: 0.3s ease;
  width: 480px;
  /* background: red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin: 0.4em auto;

  :nth-of-type(4) {
    min-height: 64px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  h2 {
    margin-top: 5em;
  }
  label {
    display: flex;
  }
`;
export const Button = styled.button`
  border-radius: 4px;
  width: 50%;
  transition: 0.3s ease;
  outline: none;
  border: 1px solid transparent;
  padding: 0.5em 0;
  background: #fff;
  :hover {
    cursor: pointer;
    border: 1px solid red;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

export const ThumbImg = styled.img`
  object-fit: contain;
  :hover {
    cursor: zoom-in;
  }
`;
export const PreviewImg = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 80vw;
  height: 80vh;
  transform: translate(-50%, -50%);

  object-fit: contain;
`;

export const CloseBtn = styled.button`
  transition: 0.1s ease;
  position: absolute;
  z-index: 1015;
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 1em;
  top: 2.5em;
  right: 3em;
  :hover {
    border: 1px solid #e60a0a;
    color: #e60a0a;
    cursor: pointer;
  }
`;
export const Error = styled.div`
  position: fixed;
  top: -55px;
  left: 50%;
  width: 250px;
  transform: translateX(-50%);
  text-align: center;
  padding: 0.5em 3em;
  background: #e25a1b;

  animation: show 2.5s ease forwards;

  @keyframes show {
    0%,
    100% {
      top: -105px;
    }
    50% {
      top: 10px;
    }
  }
`;
