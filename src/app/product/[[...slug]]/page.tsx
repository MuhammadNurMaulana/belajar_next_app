interface SlugProps {
  params: {
    slug: string[];
  };
}

export default function ProductSlug({ params }: SlugProps) {
  return (
    <div>
      <h1>Product Slug</h1>
      {params.slug && (
        <>
          <h1>Nama Product semua: {params.slug}</h1>
          <h1>Nama Product 1: {params.slug[0]}</h1>
          <h1>Nama Product 2: {params.slug[1]}</h1>
          <h1>Nama Product 3: {params.slug[2]}</h1>
        </>
      )}
    </div>
  );
}
