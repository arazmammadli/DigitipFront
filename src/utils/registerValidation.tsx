import { SyntheticEvent } from "react";
import { IRegisterData, IRegisterErrorData } from "../components/auth/signup/SignUp";
import { passwordRegex, regexEmail } from "../data/data";
import { useTranslation } from "react-i18next";

export default function RegisterValidation() {
    let errors = { emailMessage: "", fullNameMessage: "", passwordMessage: "", verifyPasswordMessage: "" } as IRegisterErrorData;
    const { t } = useTranslation();

    const validate = (data: IRegisterData, e: SyntheticEvent<HTMLFormElement>) => {
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

        if (!data.fullName) {
            errors = { ...errors, fullNameMessage: t("registerError.emptyFullName") };
            form["fullName"].style.backgroundColor = "#FFF5F5";
            form["fullName"].style.border = "1px solid #FF443B";
        } else if (data.fullName.length < 3) {
            errors = { ...errors, fullNameMessage: t("registerError.lengthFullName") };
            form["fullName"].style.backgroundColor = "#FFF5F5";
            form["fullName"].style.border = "1px solid #FF443B";
        } else {
            errors = { ...errors, fullNameMessage: "" };
            form["fullName"].style.backgroundColor = "#fff";
            form["fullName"].style.border = "1px solid #E8E8EA";
        }

        if (!data.password) {
            errors = { ...errors, passwordMessage: t("registerError.emptyPassword") }
            form["password"].style.backgroundColor = "#FFF5F5";
            form["password"].style.border = "1px solid #FF443B";
        } else if (data.password.length < 8) {
            errors = { ...errors, passwordMessage: t("registerError.lengthPassword") }
            form["password"].style.backgroundColor = "#FFF5F5";
            form["password"].style.border = "1px solid #FF443B";
        } else if (!passwordRegex.test(data.password)) {
            errors = { ...errors, passwordMessage: t("registerError.wrongPassword") };
            form["password"].style.backgroundColor = "#FFF5F5";
            form["password"].style.border = "1px solid #FF443B";
        } else {
            errors = { ...errors, passwordMessage: "" };
            form["password"].style.backgroundColor = "#fff";
            form["password"].style.border = "1px solid #E8E8EA";
        }

        if (!data.verifyPassword) {
            errors = { ...errors, verifyPasswordMessage: t("registerError.emptyVerifyPassword") };
            form["verifyPassword"].style.backgroundColor = "#FFF5F5";
            form["verifyPassword"].style.border = "1px solid #FF443B";
        } else if (data.verifyPassword !== data.password) {
            errors = { ...errors, verifyPasswordMessage: t("registerError.checkVerifyPassword") };
            form["verifyPassword"].style.backgroundColor = "#FFF5F5";
            form["verifyPassword"].style.border = "1px solid #FF443B";
        } else {
            errors = { ...errors, verifyPasswordMessage: "" };
            form["verifyPassword"].style.backgroundColor = "#fff";
            form["verifyPassword"].style.border = "1px solid #E8E8EA";
        }

        if (data.email === "" && data.password === "" && data.fullName === "" && data.verifyPassword === "") {
            errors = { ...errors, allCheckError: t("registerError.allCheckError") as string };
            form["email"].style.backgroundColor = "#FFF5F5";
            form["email"].style.border = "1px solid #FF443B";
            form["fullName"].style.backgroundColor = "#FFF5F5";
            form["fullName"].style.border = "1px solid #FF443B";
            form["password"].style.backgroundColor = "#FFF5F5";
            form["password"].style.border = "1px solid #FF443B";
            form["verifyPassword"].style.backgroundColor = "#FFF5F5";
            form["verifyPassword"].style.border = "1px solid #FF443B";
        }
        return errors;
    };

    return { validate }
}