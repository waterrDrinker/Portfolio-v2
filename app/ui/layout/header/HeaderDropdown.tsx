'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

import styles from './HeaderDropdown.module.scss';

const HeaderDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const node = listRef.current;
    setTimeout(() => {
      if (node && isOpen) node.style.opacity = '1';
    });

    return () => {
      if (node) node.style.opacity = '0';
    };
  }, [isOpen]);

  const listRef = useRef<HTMLUListElement>(null);
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        className="flex justify-center items-center relative"
        onClick={handleOpen}
      >
        More
        <Image
          className={`icon ${isOpen && 'rotate-180'}`}
          src="/icons/light/Chevron-Down.svg"
          alt="logo"
          width={20}
          height={20}
        />
        {isOpen && (
          <ul ref={listRef} className={styles['dropdown-list']}>
            <li>Bookshelf</li>
            <li>Tech Stack</li>
            <li>This UI Kit</li>
          </ul>
        )}
      </button>
    </>
  );
};

export default HeaderDropdown;
