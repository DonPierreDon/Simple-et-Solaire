import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  digits,
} from "@vee-validate/rules/";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("tos", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("email", email);
    defineRule("digits", digits);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `Le champ ${ctx.field} est necessaire`,
          min: `Le champ ${ctx.field} est trop court`,
          max: `Le champ ${ctx.field} est trop long`,
          alpha_spaces: `le champ ${ctx.field} doit uniquement contenir des lettres et des espaces`,
          email: `email non valide`,
          tos: `veuillez accepter les cgu`,
        };

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `Le champ ${ctx.field} n'est pas valide`;
        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
