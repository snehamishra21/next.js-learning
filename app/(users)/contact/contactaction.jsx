
"use server";

export async function contactAction(formData) {
  const { fullName, email, message } = Object.fromEntries(
    formData.entries()
  );

  console.log(fullName, email, message);
};

