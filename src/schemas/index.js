import { boolean, number, object, ref, string } from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = object().shape({
  email: string()
    .email("Please enter a valid email.")
    .required("Entering your email is mandatory!"),
  age: number()
    .positive("Value must be positive!")
    .integer("Value must be an integer!")
    .required("Entering your age is mandatory!"),
  password: string()
    .min(5, "Value must be minimum 5 characters")
    .matches(passwordRules, {
      message:
        "Please enter at least 1 upper case letter, 1 lower case letter and 1 number.",
    })
    .required("Entering your password is mandatory!"),
  confirmPassword: string()
    .oneOf([ref("password")], "The passwords don't match!")
    .required("Entering your password is mandatory!"),
});

export const advancedSchema = object().shape({
  userName: string()
    .min(3, "Username must be at least 3 characters!")
    .required("Entering your user name is mandatory!"),
  university: string()
    .oneOf(["bogazici", "gsu", "odtu", "itu"], "Please choose a university!")
    .required("Entering your university is mandatory!"),
  isAccepted: boolean().oneOf([true], "Accept the terms of use!"),
});
