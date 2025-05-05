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

  return (
    <PlayGroundContainer>
      <Heading>
        <h4>PlayGround</h4>
        <VariantButton active={false} onClick={handleReset}>
          Reset
        </VariantButton>
      </Heading>
      <Section>
        <SectionTitle>Variant</SectionTitle>
        <VariantButton
          active={toastData.variant === "plain"}
          onClick={() => handleVariantChange("plain")}
        >
          plain
        </VariantButton>
        <VariantButton
          active={toastData.variant === "outlined"}
          onClick={() => handleVariantChange("outlined")}
        >
          outlined
        </VariantButton>
        <VariantButton
          active={toastData.variant === "soft"}
          onClick={() => handleVariantChange("soft")}
        >
          soft
        </VariantButton>
        <VariantButton
          active={toastData.variant === "solid"}
          onClick={() => handleVariantChange("solid")}
        >
          solid
        </VariantButton>
      </Section>
      <Section>
        <SectionTitle>Color</SectionTitle>
        <VariantButton
          active={toastData.color === "blue"}
          onClick={() => handleColorChange("blue")}
        >
          Blue
        </VariantButton>
        <VariantButton
          active={toastData.color === "gray"}
          onClick={() => handleColorChange("gray")}
        >
          Gray
        </VariantButton>
        <VariantButton
          active={toastData.color === "red"}
          onClick={() => handleColorChange("red")}
        >
          Red
        </VariantButton>
        <VariantButton
          active={toastData.color === "green"}
          onClick={() => handleColorChange("green")}
        >
          Green
        </VariantButton>
        <VariantButton
          active={toastData.color === "yellow"}
          onClick={() => handleColorChange("yellow")}
        >
          Yellow
        </VariantButton>
      </Section>

      <Section>
        <SectionTitle>Size</SectionTitle>
        <VariantButton
          active={toastData.size === "sm"}
          onClick={() => handleSizeChange("sm")}
        >
          sm
        </VariantButton>
        <VariantButton
          active={toastData.size === "md"}
          onClick={() => handleSizeChange("md")}
        >
          md
        </VariantButton>
        <VariantButton
          active={toastData.size === "lg"}
          onClick={() => handleSizeChange("lg")}
        >
          lg
        </VariantButton>
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
