import styled from "styled-components";
import PlayGround from "./components/PlayGround";
import Toast from "./components/Toast";
import { useEffect, useState } from "react";
import ToastData from "./AppTypes";
const DIV = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  border: 1px solid red;
  gap: 2rem;
  width: 60rem;
`;
const ShowButton = styled.button`
  border: 2px solid green;
  font-size: 0.8rem;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  height: fit-content;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border-color: #646cff;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;
const LeftDiv = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [show, setShow] = useState(false);
  const [toastData, setToastData] = useState<ToastData>({
    variant: "outlined",
    color: "gray",
    size: "md",
    autoHideDuration: 0,
  });
  function handleShow() {
    console.log(JSON.stringify(toastData));
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }
  useEffect(() => {
    if (show && toastData.autoHideDuration > 0) {
      const timer = setTimeout(() => {
        setShow(false);
      }, toastData.autoHideDuration);

      return () => clearTimeout(timer);
    }
  }, [show, toastData.autoHideDuration]);

  return (
    <DIV>
      <LeftDiv>
        <ShowButton onClick={handleShow}>Show SnackBar</ShowButton>
      </LeftDiv>
      <PlayGround toastData={toastData} setToastData={setToastData} />
      {show && (
        <Toast
          variant={toastData.variant}
          color={toastData.color}
          size={toastData.size}
          autoHideDuration={toastData.autoHideDuration}
          onClose={handleClose}
        />
      )}
    </DIV>
  );
}
//comment
export default App;
