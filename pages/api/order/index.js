import { getSession } from "next-auth/react";
import prisma from "lib/prisma";

export default async function handle(req, res) {
  console.log("received something");
  //console.log(req);
  const session = await getSession({ req });

  if (req.method === "GET") {
    //console.log(session);
    console.log("received GET on api/order");
    if (session?.dbUser.role === "ADMIN") {
      const { category } = req.query;
      const orders = await prisma.order.findMany({
        orderBy: [
          {
            createdAt: "desc",
          },
        ],
        include: {
          CartItems: { include: { product: true } },
          user: true,
        },
      });
      res.status(200).json({ orders: orders });
    } else {
      console.log("NO PERMISSION");
      res.status(401).json({ orders: [], message: "NO PERMISSION" });
    }
  }

  if (req.method === "POST") {
    console.log("received POST");
    const { status, CartItems, deliveryAddress } = req.body;
    console.log(JSON.stringify(CartItems, null, 2));
    const data = {
      CartItems: CartItems
        ? {
            create: CartItems.map((CartItem) => ({
              productId: CartItem.productId,
              quantity: CartItem.quantity,
            })),
          }
        : {},
      deliveryAddress,
      user: session
        ? {
            connect: { email: session.dbUser.email },
          }
        : {},
    };
    if (status) data.status = status;

    try {
      const order = await prisma.order.create({ data, include: { CartItems: { include: { product: true } } } });
      console.log(`Added order: ${order.id}`);
      res.status(200).json({ order });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error while conecting to db" });
    }
  }

  if (req.method === "PUT") {
    const { id, status } = req.body;
    const data = {
      status,
    };
    const order = await prisma.order.update({
      where: { id: Number(id) },
      data,
    });
    console.log(`Updated order: ${order.id}`);
    res.json(order);
  }
}
