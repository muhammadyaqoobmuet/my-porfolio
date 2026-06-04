import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const { slug } = req.query;

  if (req.method === "POST") {
    // Increment the view count
    const newOrUpdatedViews = await prisma.views.upsert({
      where: { slug },
      create: { slug, count: 1 },
      update: { count: { increment: 1 } },
    });

    return res.status(200).json({
      total: newOrUpdatedViews.count.toString(),
    });
  }

  if (req.method === "GET") {
    // Fetch the current view count
    const views = await prisma.views.findUnique({
      where: { slug },
    });

    // If no record exists yet, return 0 (or we can handle default logic in UI)
    return res.status(200).json({
      total: views?.count?.toString() || "0",
    });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
