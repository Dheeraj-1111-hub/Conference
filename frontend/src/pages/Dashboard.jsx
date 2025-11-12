// src/pages/Dashboard.jsx
import { useUser } from "@clerk/clerk-react";

export default function Dashboard() {
  const { user } = useUser();

  // Example placeholder data — replace this with backend logic later
  const papers = [
    { title: "AI in Sustainable Systems", status: "Under Review" },
    { title: "Blockchain for Education", status: "Accepted" },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Submissions</h1>
      <div className="space-y-3">
        {papers.map((paper, idx) => (
          <div
            key={idx}
            className="border border-border p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold text-lg">{paper.title}</h2>
              <p className="text-sm text-muted-foreground">
                Status: {paper.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
