import prisma from "lib/prisma";
import slugify from "slugify";

prisma.$use(async (params, next) => {
  if (
    (params.action === "create" || params.action === "update") &&
    ["Category", "Product", "YourModel"].includes(params.model)
  ) {
    let {
      args: { data },
    } = params;
    // Check if slug exists by `findUnique` (did not test)
    let newSlug = slugify(`${data.name}`, { lower: true, strict: true, remove: /[*+~.()'"!:@]/g });
    const product = await prisma.product.findUnique({
      where: { slug: newSlug },
    });
    if (product) {
      newSlug = `${newSlug}-${product.id}`;
      console.log("SLUG EXISTS");
    }
    console.log("CREATED A SLUG: ", newSlug);
    data.slug = newSlug;
  }
  const result = await next(params);
  return result;
});

// to login the action
prisma.$use(async (params, next) => {
  const before = Date.now();
  const result = await next(params);
  const after = Date.now();
  console.log(`Query ${params.model}.${params.action} took ${after - before}ms`);
  return result;
});

export default async function handle(req, res) {
  if (req.method === "GET") {
    const { category } = req.query;
    const products = await prisma.product.findMany({
      //where: { published: true },
      where: category ? { categories: { some: { name: { equals: category } } } } : {},
      include: { categories: { select: { name: true, id: true } } },
    });

    res.json(products);
  }

  if (req.method === "POST") {
    const { name, description, published, stockCount, categories, mainPhotoUrl, available } = req.body;
    const data = {
      name,
      description,
      categories: categories
        ? {
            connect: categories.map((category) => ({
              id: category.id,
            })),
          }
        : {},
      //categories,
    };
    const product = await prisma.product.create({ data });
    console.log(`Added product: ${product.name}`);
    res.json(product);
  }

  if (req.method === "PUT") {
    const { id, name, description, published, stockCount, categories, mainPhotoUrl, available } = req.body;
    const data = {
      name,
      description,
      // categories: {
      //   connect: categories.map((category) => ({
      //     id: category.id,
      //   })),
      // },
      //categories,
    };
    const product = await prisma.product.update({
      where: { id: Number(id) },
      data,
    });
    console.log(`Updated product: ${product.name}`);
    res.json(product);
  }
}