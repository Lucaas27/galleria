import db from "@/server/db";
import { v4 as uuidv4 } from "uuid";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (images, { desc }) => [desc(images.createdAt)],
  });

  return (
    <div className="flex flex-wrap gap-4">
      {[...images, ...images, ...images, ...images, ...images].map(image => (
        <div key={uuidv4()} className="flex w-48 flex-col gap-2 transition-transform hover:scale-105">
          <img src={image.url} alt={`Image ${image.name}`} />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
}
