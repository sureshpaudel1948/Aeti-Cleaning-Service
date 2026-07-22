const calculateTotal = (
  serviceType,
  {
    carpets = 0,
    rugs = 0,
    couches = 0,
    singleMattresses = 0,
    doubleMattresses = 0,
    kingMattresses = 0,
    windowCurtains = 0,
    doorCurtains = 0,
    windows = 0,
    washLoads = 0,
    dryLoads = 0,
    ironLoads = 0,
    foldLoads = 0,
    delivery = false,
    bathrooms = 0,
    groutCleaning = false,
    kitchenHallwayCleaning = false,
    mouldGroutCleaning = false,
  } = {}
) => {
  let totalPrice = 0;

  if (serviceType === "carpet") {
    totalPrice = carpets * 45 + rugs * 40;
  } else if (serviceType === "upholstery") {
    totalPrice =
      couches * 35 +
      singleMattresses * 60 +
      doubleMattresses * 80 +
      kingMattresses * 100;
  } else if (serviceType === "curtains") {
    totalPrice = windowCurtains * 65 + doorCurtains * 90;
  } else if (serviceType === "laundry") {
    totalPrice = washLoads * 8 + dryLoads * 6 + ironLoads * 5 + foldLoads * 3;
    if (delivery) totalPrice += 10;
  } else if (serviceType === "window") {
    totalPrice = windows * 15;
  } else if (serviceType === "deep") {
    totalPrice = bathrooms * 165;
    if (groutCleaning) totalPrice += 350;
    if (kitchenHallwayCleaning) totalPrice += 215;
    if (mouldGroutCleaning) totalPrice += 230;
  }

  return totalPrice;
};

export default calculateTotal;
