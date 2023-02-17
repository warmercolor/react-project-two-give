import * as yup from "yup";

export const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("E-mail obrigatório")
      .email("Insira um e-mail válido."),
    password: yup.string().required("Senha obrigatória"),
});