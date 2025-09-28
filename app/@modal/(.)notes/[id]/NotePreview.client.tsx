"use client";

import css from "./NotePreview.module.css";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchSingleNote } from "@/lib/api";
import Loader from "@/app/loading";

interface NotePreviewProps {
  onClick: () => void;
}

const NotePreview = ({ onClick }: NotePreviewProps) => {
  const { id } = useParams<{ id: string }>();

  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchSingleNote(id),
    refetchOnMount: false,
    enabled: !!id,
  });

  if (isLoading) return <Loader />;

  if (error || !note) return <p>Something went wrong.</p>;

  const formattedDate = note.updatedAt
    ? `Updated at: ${note.updatedAt}`
    : `Created at: ${note.createdAt}`;

  return (
    <>
      <button onClick={onClick} className={css.backBtn} type="button">
        Go Back
      </button>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
          </div>
          <p className={css.content}>{note.content}</p>
          <p className={css.tag}>{note.tag}</p>
          <p className={css.date}>{formattedDate}</p>
        </div>
      </div>
    </>
  );
};

export default NotePreview;
