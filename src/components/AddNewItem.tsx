import { useState } from "react";
import { AddItemButton } from "../styles";

import NewItemForm from "./NewItemForm";

interface Props {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
}

const AddNewItem: React.FC<Props> = ({ toggleButtonText, dark, onAdd }) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const handlerClick = () => {
    setShowForm(true);
  };
  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }
  return (
    <AddItemButton dark={dark} onClick={handlerClick}>
      {toggleButtonText}
    </AddItemButton>
  );
};

export default AddNewItem;
