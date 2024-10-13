// src/utils/calculateTotal.js

const calculateTotal = (serviceType, {
    carpets = 0, 
    couches = 0, 
    smallCurtains = 0, 
    rugs = 0, 
    bedMattresses = 0,
    windowCurtains = 0, 
    doorCurtains = 0, 
    bathrooms = 0, 
    groutCleaning = false, 
    kitchenHallwayCleaning = false, 
    mouldGroutCleaning = false
  }) => {
    let totalPrice = 0;
  
    if (serviceType === "residential") {
      totalPrice =
        carpets * 45 +
        couches * 35 +
        smallCurtains * 30 +
        rugs * 45 +
        bedMattresses * 60;
    } else if (serviceType === "commercial") {
      totalPrice =
        carpets * 45 +
        couches * 35 +
        smallCurtains * 30 +
        windowCurtains * 65 +
        doorCurtains * 90;
    } else if (serviceType === "deep") {
      totalPrice = bathrooms * 165;
      if (groutCleaning) totalPrice += 350;
      if (kitchenHallwayCleaning) totalPrice += 215;
      if (mouldGroutCleaning) totalPrice += 230;
    }
  
    return totalPrice;
  };
  
  export default calculateTotal;
  