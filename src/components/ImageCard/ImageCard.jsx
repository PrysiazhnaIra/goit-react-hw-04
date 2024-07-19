import css from "./ImageCard.module.css";

export default function ImageCard({ image }) {
  const { urls, alt_description, user, likes } = image;
  return (
    <li className={css.item}>
      <div>
        <img src={urls.small} alt={alt_description || "Image"} />
        <p>By: {user.name}</p>
        <p>Likes: {likes}</p>
      </div>
    </li>
  );
}
