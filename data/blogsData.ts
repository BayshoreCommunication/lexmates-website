export interface Blog {
  id: number;
  slug: string;
  title: string;
  publishedAt: string; // ISO format
  excerpt: string;
  image: string;
}
export const blogsData: Blog[] = [
  {
    id: 1,
    slug: "civil-litigation-bangladesh",
    title: "Understanding Civil Litigation in Bangladesh",
    publishedAt: "2026-02-10",
    excerpt:
      "Civil litigation involves resolving disputes between individuals or organizations through the court system.",
    image: "https://img.freepik.com/free-photo/business-people-discussing-cafe_53876-20922.jpg?t=st=1771750547~exp=1771754147~hmac=6b09e8cf307aa38b69a39c7d1f2b6ef1f59751d280f0d7c2a70f1e9a32c49e4f&w=1060",
  },
  {
    id: 2,
    slug: "how-to-file-writ-petition",
    title: "How to File a Writ Petition",
    publishedAt: "2026-02-08",
    excerpt:
      "A writ petition is a formal written order issued by a court commanding a person or authority.",
    image: "https://img.freepik.com/free-photo/professional-businesswoman-desk-talking-schedule_1150-1697.jpg?t=st=1771750643~exp=1771754243~hmac=521226c8e8bb4cf35f1cfebb72349c88d968c4fd056809a92c1488e4f3624c9e&w=1480",
  },
  {
    id: 3,
    slug: "role-of-senior-paralegal",
    title: "The Role of a Senior Paralegal",
    publishedAt: "2026-02-05",
    excerpt:
      "Senior paralegals assist lawyers in legal research and drafting documents.",
    image: "https://img.freepik.com/free-photo/cheerful-business-people-discussing-document_1262-18161.jpg?t=st=1771750680~exp=1771754280~hmac=1cc0eb8c8b53aa6f35fb94e3798f5f58a0a56b75a5b0996487dfc402ce33f106&w=740",
  },
  {
    id: 4,
    slug: "property-law-basics",
    title: "Property Law Basics in Bangladesh",
    publishedAt: "2026-02-02",
    excerpt: "Property law governs ownership and tenancy in real property.",
    image: "https://img.freepik.com/free-photo/business-people-discussing-cafe_53876-20922.jpg?t=st=1771750547~exp=1771754147~hmac=6b09e8cf307aa38b69a39c7d1f2b6ef1f59751d280f0d7c2a70f1e9a32c49e4f&w=1060",
  },
  {
    id: 5,
    slug: "corporate-compliance",
    title: "Corporate Compliance Requirements",
    publishedAt: "2026-01-30",
    excerpt:
      "Corporate compliance ensures businesses follow legal standards.",
    image: "https://img.freepik.com/free-photo/business-people-discussing-cafe_53876-20922.jpg?t=st=1771750547~exp=1771754147~hmac=6b09e8cf307aa38b69a39c7d1f2b6ef1f59751d280f0d7c2a70f1e9a32c49e4f&w=1060",
  },
  {
    id: 6,
    slug: "criminal-defense-process",
    title: "Criminal Defense Process Overview",
    publishedAt: "2026-01-25",
    excerpt:
      "Criminal defense protects individuals charged with criminal conduct.",
    image: "https://img.freepik.com/free-photo/business-people-discussing-cafe_53876-20922.jpg?t=st=1771750547~exp=1771754147~hmac=6b09e8cf307aa38b69a39c7d1f2b6ef1f59751d280f0d7c2a70f1e9a32c49e4f&w=1060",
  },
];