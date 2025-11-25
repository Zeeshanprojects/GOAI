import { createContext, useState } from "react";

export const FormContext = createContext();

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    country: "",
    language: "",
    plan: "",
    address1: "",
    address2: "",
    address3: "",
    zip: "",
    city: "",
    state: "",
    phone: "",
    mobile: "",
    email: "",
    confirmEmail: "",
    username: "",
    website: "",
    password: "",
    confirmPassword: "",
    ageConfirmed: false,
    termsAccepted: false,
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}
