const cart = ["a", "b"];

const createOrder = (cart) => {
  return new Promise((resolve, reject) => {
    if (!valid(cart)) {
      reject("cart not found");
    }
    let orderId = 1234;
    if (orderId) {
      resolve(orderId);
    }
  });
};
const proceedToPayment = (orderId) => {
  return new Promise((resolve, reject) => {
    if (!valid(orderId)) {
      reject("cart not found");
    }
    let paymentStatus = "paid";
    if (paymentStatus) {
      resolve(paymentStatus);
    }
  });
};
const orderSummary = (paymentStatus) => {
  return new Promise((resolve, reject) => {
    if (!valid(paymentStatus)) {
      reject("cart not found");
    }
    let orderAmount = 1200;
    if (orderAmount) {
      resolve(orderAmount);
    }
  });
};

const valid = (cart) => {
  return true;
};

createOrder(cart)
  .then((orderId) => {
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((paymentStatus) => {
    console.log("Payment Status = " + paymentStatus);
    return paymentStatus;
  })
  .then((paymentStatus) => {
    return orderSummary(paymentStatus);
  })
  .then((orderAmount) => {
    console.log("total amount" + " = " + orderAmount);
  })
  .catch((err) => console.log(err));
