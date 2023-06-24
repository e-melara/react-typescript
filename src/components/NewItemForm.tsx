import { useState } from "react";

import useFocus from "../utils/useFocus";
import { NewItemInput, NewItemFormContainer, NewItemButton } from "../styles";

interface Props {
  onAdd(text: string): void;
}

const NewItemForm: React.FC<Props> = ({ onAdd }): JSX.Element => {
  const [text, setText] = useState<string>("");
  const inputRef = useFocus();
  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handlerAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onAdd(text);
    }
  };

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onKeyUp={handlerAddText}
        onChange={handlerChange}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};

export default NewItemForm;
