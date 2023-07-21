import { SyntheticEvent } from "react"
import { ISendEmailError, ISendEmailData } from "../components/auth/forgotPassword/SendEmailPwd";
import { phoneRegex, regexEmail } from "../data/data";
import { useTranslation } from "react-i18next";

export default function SendEmailValidation() {
    let errors = { emailMessage: "" } as ISendEmailError;
    const { t } = useTranslation();

    const validate = (data: ISendEmailData, e: SyntheticEvent<HTMLFormElement>) => {
        const form = e.target as HTMLFormElement;

        if (!data.email) {
            errors = { ...errors, emailMessage: t("registerError.emptyEmail") };
            form["email"].style.backgroundColor = "#FFF5F5";
            form["email"].style.border = "1px solid #FF443B";
        } else if (!regexEmail.test(data.email)) {
            errors = { ...errors, emailMessage: t("registerError.wrongEmail") };
            form["email"].style.backgroundColor = "#FFF5F5";
            form["email"].style.border = "1px solid #FF443B";
        } else {
            errors = { ...errors, emailMessage: "" };
            form["email"].style.backgroundColor = "#fff";
            form["email"].style.border = "1px solid #E8E8EA";
        }

        // if (!phoneRegex.test(data.phone)) {
        //     errors = { ...errors, phoneMessage: "Phone не совпадают" };
        //     form["phone"].style.backgroundColor = "#FFF5F5";
        //     form["phone"].style.border = "1px solid #FF443B";
        // }
        // else {
        //     errors = { ...errors, phoneMessage: "" };
        //     form["phone"].style.backgroundColor = "#fff";
        //     form["phone"].style.border = "1px solid #E8E8EA";
        // }

        // if (data.email === "" && data.phone === "") {
        //     errors = { ...errors, allCheckError: "Пароли не совпадают, проверьте и введите снова." };
        //     form["email"].style.backgroundColor = "#FFF5F5";
        //     form["email"].style.border = "1px solid #FF443B";
        //     form["phone"].style.backgroundColor = "#FFF5F5";
        //     form["phone"].style.border = "1px solid #FF443B";
        // } 

        return errors;
    }

    return { validate }
} 