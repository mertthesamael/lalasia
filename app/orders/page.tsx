import OrdersOrdersSection from "@/containers/orders-page/orders-section";
import OrdersTitleSection from "@/containers/orders-page/title-section";
import React, { FC } from "react";
import createClient from "@/db/client";
import axios from "axios";
import { redirect } from "next/navigation";
import { getOrders } from "@/libs/endpoints";

interface OrdersPageProps {}

const getUserOrders = async (id: string) => {
  const { data } = await axios.post(getOrders, {userMail:id});
  return data;
};
const OrdersPage: FC<OrdersPageProps> = async ({}) => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/");
  }
  const { data } = await getUserOrders(user.email ?? user.user_metadata.email);

  return (
    <main>
      <OrdersTitleSection />
      <OrdersOrdersSection orders={data} />
    </main>
  );
};

export default OrdersPage;
