import React from "react";
import { useEffect, useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick.tsx";
import dropdown from "../img/dropdown.svg"

interface DropdownItem {
  id: string;
  name: string;
}

interface DropdownProps {
  id: string;
  title?: string;
  data: DropdownItem[];
  selectedId?: string;
  showSort: boolean;
  onSelect?: (id: string) => void;
}

const Dropdown = ({
  id,
  title = "Select",
  data,
  selectedId,
  showSort,
  onSelect,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | undefined>(
    selectedId ? data?.find((item) => item.id === selectedId) : undefined
  );

  const handleChange = (item: DropdownItem) => {
    setSelectedItem(item);
    onSelect && onSelect(item.id);
    setIsOpen(false);
  };

  useEffect(() => {
    if (selectedId && data) {
      const newSelectedItem = data.find((item) => item.id === selectedId);
      newSelectedItem && setSelectedItem(newSelectedItem);
    } else {
      setSelectedItem(undefined);
    }
  }, [selectedId, data]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  });

  return (
    <div ref={dropdownRef} className="relative">
      <button
        id={id}
        aria-label="Toggle dropdown"
        aria-haspopup="true"
        aria-expanded={isOpen}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="dropdownBtn"
      >
        <span>{selectedItem?.name || title}</span>
        {/* <img src={dropdown} id="dropdownIcon" style={show ? {transform: "rotate(180deg)"} : {}}></img> */}
      </button>
      {isOpen && (
        <div aria-label="Dropdown menu">
          <ul role="menu" aria-labelledby={id} aria-orientation="vertical">
            {data?.map((item) => (
              <li key={item.id} onClick={() => handleChange(item)}>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
