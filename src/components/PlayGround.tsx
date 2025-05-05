import { ChangeEvent } from "react";
import styled from "styled-components";
import { ToastData, PlayGroundProps } from "./PlayGroundTypes";

const VariantButton = styled.button<{ active: boolean }>`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  margin: 5px;
  height: fit-content;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: ${(props) => (props.active ? "#646cff" : "#1a1a1a")};
  color: ${(props) => (props.active ? "#ffffff" : "inherit")};
  cursor: pointer;
  transition: border-color 0.25s, background-color 0.25s;

  &:hover {
    border-color: #646cff;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;
const PlayGroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px;
`;
const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Input = styled.input`
  height: 1.5rem;
`;
const Section = styled.div`
  margin-bottom: 16px;
`;

const SectionTitle = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
`;

function PlayGround({ toastData, setToastData }: PlayGroundProps) {
  function handleReset() {
    setToastData({
      variant: "outlined",
      color: "gray",
      size: "md",
      autoHideDuration: 0,
    });
  }
  function handleVariantChange(variant: ToastData["variant"]) {
    setToastData((prev) => ({ ...prev, variant }));
  }
  function handleColorChange(color: ToastData["color"]) {
    setToastData((prev) => ({ ...prev, color }));
  }
  function handleSizeChange(size: ToastData["size"]) {
    setToastData((prev) => ({ ...prev, size }));
  }
  function handleDurationChange(e: ChangeEvent<HTMLInputElement>) {
    const val = parseInt(e.target.value, 10) || 0;
    setToastData((prev) => ({ ...prev, autoHideDuration: val }));
  }
  const variant: Array<"plain" | "outlined" | "soft" | "solid"> = [
    "plain",
    "outlined",
    "soft",
    "solid",
  ];
  const Color:Array<"blue"|"gray"|"red"|"green"|"yellow">=[
    "blue",
    "gray",
    "red",
    "green",
    "yellow",
  ]
  const Size:Array<"sm"|"md"|"lg">=[
    "sm",
    "md",
    "lg"
  ]
  
  return (
    <PlayGroundContainer>
      <Heading>
        <h4>PlayGround</h4>
        <VariantButton active={false} onClick={handleReset}>
          Reset
        </VariantButton>
      </Heading>
     //variant section 
      <Section>
        <SectionTitle>Variant</SectionTitle>
        {variant.map((value) => (
          <VariantButton
            key={value}
            active={toastData.variant === value}
            onClick={() => handleVariantChange(value)}
          >
            {value}
          </VariantButton>
        ))}
      </Section>
      //color section
      <Section>
        <SectionTitle>Color</SectionTitle>
        {Color.map((value) => (
          <VariantButton
            key={value}
            active={toastData.color === value}
            onClick={() => handleColorChange(value)}
          >
            {value}
          </VariantButton>
        ))}
      </Section>

      <Section>
        <SectionTitle>Size</SectionTitle>
        {Size.map((value)=>(
          <VariantButton
          active={toastData.size === value}
          onClick={() => handleSizeChange(value)}
        >
          {value}
        </VariantButton>
        ))}
      </Section>

      <Section>
        <SectionTitle>AutoHideDuration</SectionTitle>
        <Input
          type="number"
          value={toastData.autoHideDuration || ""}
          onChange={handleDurationChange}
          min="0"
          step="1000"
        />
        <label>The duration to be shown (in ms)</label>
      </Section>
    </PlayGroundContainer>
  );
}
export default PlayGround;
