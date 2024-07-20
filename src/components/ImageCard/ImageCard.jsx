import css from "./ImageCard.module.css";

export default function ImageCard({ image, openModal }) {
  const { urls, alt_description, user, likes } = image;
  return (
    <li className={css.item} onClick={() => openModal(image)}>
      <div>
        <img src={urls.small} alt={alt_description || "Image"} />
        <p>By: {user.name}</p>
        <p>Likes: {likes}</p>
      </div>
    </li>
  );
}
