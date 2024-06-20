import React from "react";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { GoChevronDown } from "react-icons/go";
import useOutsideClick from "./useOutsideClick.tsx";

interface DropdownItem {
  id: string;
  name: string;
  imageUrl?: string;
}

interface DropdownProps {
  id: string;
  title?: string;
  data: DropdownItem[];
  selectedId?: string;
  onSelect?: (id: string) => void;
}

const Dropdown = ({
  id,
  title = "Select",
  data,
  selectedId,
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
      >
        <span>{selectedItem?.name || title}</span>
        <GoChevronDown
          size={20}
        />
      </button>
      {isOpen && (
        <div aria-label="Dropdown menu">
          <ul
            role="menu"
            aria-labelledby={id}
            aria-orientation="vertical"
          >
            {data?.map((item) => (
              <li
                key={item.id}
                onClick={() => handleChange(item)}
              >
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
