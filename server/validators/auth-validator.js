const { z } = require("zod");
const registerSchema = z
  .object({
    firstName: z
      .string({ required_error: "First Name is required" })
      .trim()
      .min(2, { message: "First Name must be of minimum 2 characters" })
      .max(50, { message: "First Name not be more than 50 characters" }),

    lastName: z
      .string({ required_error: "Last Name is required" })
      .trim()
      .min(3, { message: "Last Name must be of minimum 3 characters" })
      .max(50, { message: "Last Name not be more than 50 characters" }),

    gender: z
      .string({ required_error: "Gender is required" })
      .trim()
      .min(1, { message: "Gender must be at least 1 character long" })
      .max(20, { message: "Gender must not exceed 20 characters" }),

    birthDate: z
      .string({ required_error: "Birth Date is required" })
      .refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format",
      }),

    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Invalid email address" })
      .max(100, { message: "Email must not exceed 100 characters" }),

    category: z.enum(["General", "OBC", "PVTG", "SC", "ST"], {
      required_error: "Category is required",
      invalid_type_error: "Invalid category selected",
    }),

    familyIncome: z.enum(
      ["b1lkh", "b3lkh", "b5lkh", "b8lkh", "b10lkh", "a10lkh"],
      {
        required_error: "Income is required",
        invalid_type_error: "Invalid income range",
      }
    ),

    state: z.enum(
      [
        "AP",
        "AR",
        "AS",
        "BR",
        "CT",
        "GA",
        "GJ",
        "HR",
        "HP",
        "JK",
        "JH",
        "KA",
        "KL",
        "MP",
        "MH",
        "MN",
        "ML",
      ],
      {
        required_error: "State is required",
        invalid_type_error: "Invalid state selected",
      }
    ),

    degree: z.enum(["General", "OBC", "PVTG", "SC", "ST"], {
      required_error: "DEgree is required",
      invalid_type_error: "Invalid category selected",
    }),

    course: z.enum(["General", "OBC", "PVTG", "SC", "ST"], {
      required_error: "Course is required",
      invalid_type_error: "Invalid category selected",
    }),

    password: z
      .string({ required_error: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(100, { message: "Password must not exceed 100 characters" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one digit" })
      .regex(/[@$!%*?&#]/, {
        message: "Password must contain at least one special character",
      }),

    confirmPassword: z.string({
      required_error: "Confirm Password is required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" })
    .max(100, { message: "Email must not exceed 100 characters" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password must not exceed 100 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one digit" })
    .regex(/[@$!%*?&#]/, {
      message: "Password must contain at least one special character",
    }),
});
module.exports = { registerSchema, loginSchema };
