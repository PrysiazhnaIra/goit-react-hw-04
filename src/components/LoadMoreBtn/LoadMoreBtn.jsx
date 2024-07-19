import css from "./LoadMoreBtn.module.css";
import { useState } from "react";

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.btnBlock}>
      <button onClick={onClick} className={css.btn}>
        Load More
      </button>
    </div>
  );
}
