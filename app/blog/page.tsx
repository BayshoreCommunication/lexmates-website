import BlogsPage from "@/components/blog/BlogsPage";
import Breadcrumb from "@/components/shared/Breadcrumb";

const Page = () => {
  return (
    <div className="text-black">
      <Breadcrumb
        title="Blogs"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blogs" }]}
      />
      <BlogsPage />
    </div>
  );
};

export default Page;
