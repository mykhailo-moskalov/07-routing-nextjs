"use client";

import { useState } from "react";
import css from "./TagsMenu.module.css";
import Link from "next/link";
import { NoteTag } from "@/types/note";

const TagsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const noteTags = Object.values(NoteTag);

  return (
    <div className={css.menuContainer}>
      <button onClick={toggle} className={css.menuButton}>
        Notes ▾
      </button>
      {isOpen && (
        <ul className={css.menuList}>
          <li className={css.menuItem}>
            <Link
              className={css.menuLink}
              href={`/notes/filter`}
              onClick={toggle}
            >
              All notes
            </Link>
          </li>
          {noteTags.map((tag) => (
            <li key={tag} className={css.menuItem}>
              <Link
                className={css.menuLink}
                href={`/notes/filter/${tag}`}
                onClick={toggle}
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagsMenu;
