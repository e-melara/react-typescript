import { CardContainer } from "../styles";

interface Props {
  id: string;
  text: string;
}

const Card: React.FC<Props> = ({ id, text }) => {
  return <CardContainer>{text}</CardContainer>;
};

export default Card;
