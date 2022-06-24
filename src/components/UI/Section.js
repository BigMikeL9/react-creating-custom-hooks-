import styled from "styled-components";

const SectionStyled = styled.section`
  max-width: 40rem;
  margin: 2rem auto;
  background-color: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
`;

const Section = (props) => {
  return <SectionStyled>{props.children}</SectionStyled>;
};

export default Section;
