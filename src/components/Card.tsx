import { CardContainer } from "../styles";

interface Props {
  text: string;
}

const Card: React.FC<Props> = ({ text }) => {
  return <CardContainer>{text}</CardContainer>;
};

export default Card;
