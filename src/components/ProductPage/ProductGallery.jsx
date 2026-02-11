export function ProductGallery({
  mainImage = "",
  thumbnails = []
}) {
  return (
    <div className="flex flex-col gap-4">
          <img
            src={mainImage}
            loading="eager"
            className="w-80 object-cover rounded-xl border"
            alt=""
          />
      <div className="flex gap-3">
        {thumbnails.map((img, i) => (
          <img
            key={i}
            src={img}
            loading="lazy"
            className="w-20 h-28 object-cover border rounded"
            alt=""
          />
        ))}
      </div>

    </div>
  );
}
