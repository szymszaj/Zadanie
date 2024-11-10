function processOrders() {
  const orders = [
    { orderId: 1, customer: "Alice", amount: 250, status: "completed" },
    { orderId: 2, customer: "Bob", amount: 150, status: "pending" },
    { orderId: 3, customer: "Charlie", amount: 300, status: "completed" },
    { orderId: 4, customer: "David", amount: 100, status: "canceled" },
    { orderId: 5, customer: "Eve", amount: 200, status: "completed" },
  ];

  let processedOrders = [];
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].status === "completed") {
      processedOrders.push({
        orderId: orders[i].orderId,
        customer: orders[i].customer,
        amount: orders[i].amount,
        discount: orders[i].amount * 0.1,
      });
    }
  }

  return `Processed orders: ${JSON.stringify(processedOrders)}`;
}

console.log(processOrders());
