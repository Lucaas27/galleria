import { v4 as uuidv4 } from "uuid";

const mockData = [
  "https://68c8a2zwsh.ufs.sh/f/Z8SiMXVNUERpw7GENNIOixWA3VMI10CmHLuXNergpPn9wfUG",
  "https://68c8a2zwsh.ufs.sh/f/Z8SiMXVNUERp6AQyTuZ3voPWVqbenasEQrXd1JzYCcly2Dxg",
  "https://68c8a2zwsh.ufs.sh/f/Z8SiMXVNUERpF7HUnbEEtTgnCduGQ2aNBr81xXsfjeSWUp3y",
  "https://68c8a2zwsh.ufs.sh/f/Z8SiMXVNUERpTrrFupAgfUnK53cYhuEXpPzatbW6HdwSN42Z",
];

export default function HomePage() {
  return (
    <div className="flex flex-wrap gap-4">
      {[...mockData, ...mockData, ...mockData].map(image => (
        <div key={uuidv4()} className="w-48">
          <img src={image} alt={`Image ${image}`} />
        </div>
      ))}
    </div>
  );
}
