export const ADDRESS = "Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000";
export const EMAIL = "binarcarrental@gmail.com";
export const MENU = ["Our services", "Why Us", "Testimonial", "FAQ"];

export const CATEGORY_LIST = {
  small: "2 - 4 orang",
  medium: "4 - 6 orang",
  large: "6 - 8 orang",
};

export const PRICE_OPTION = {
  small: { minPrice: 0, maxPrice: 400000 },
  medium: { minPrice: 400000, maxPrice: 600000 },
  large: { minPrice: 600000, maxPrice: 0 },
};
import React, { createContext, useState } from "react";

export const InputContext = createContext();
export const InputProvider = ({ children }) => {
  const [nameCar, setNameCar] = useState("");
  const [capacityCar, setCapacityCar] = useState("");
  const [priceCar, setPriceCar] = useState("");
  const [statusCar, setStatusCar] = useState("");

  return (
    <InputContext.Provider
      value={{
        nameCar,
        capacityCar,
        priceCar,
        statusCar,
        setNameCar,
        setCapacityCar,
        setPriceCar,
        setStatusCar,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};
export const LIST_URL = "https://api-car-rental.binaracademy.org/admin/v2/car";
export const DETAIL_URL = "https://api-car-rental.binaracademy.org/admin/car/";

export const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc";
