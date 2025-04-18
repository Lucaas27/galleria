import db from "@/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (images, { desc }) => [desc(images.createdAt)],
  });

  return (
    <div className="flex flex-wrap gap-4">
      {/* This is a hack to make the images repeat during development*/}
      {[...images, ...images, ...images, ...images, ...images].map((image, index) => (
        <div key={image.id + index} className="flex w-48 flex-col gap-2 transition-transform hover:scale-105">
          <img src={image.url} alt={`Image ${image.name}`} />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
}
