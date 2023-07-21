import { SyntheticEvent } from "react"
import { ISavePwdError } from "../components/auth/forgotPassword/SavePwd";
import { ISavePwdData } from "../components/auth/forgotPassword/SavePwd";
import { useTranslation } from "react-i18next";
import { passwordRegex } from "../data/data";

export default function SavePwdValidation() {
    let errors = { passwordMessage: "", verifyPasswordMessage: "" } as ISavePwdError;
    const { t } = useTranslation();

    const validate = (data: ISavePwdData, e: SyntheticEvent<HTMLFormElement>) => {
        const form = e.target as HTMLFormElement;

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

        if(!data.verifyPassword) {
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

        if (data.password === "" && data.verifyPassword === "") {
            errors = { ...errors, allCheckError: t("registerError.allCheckError") as string };
            form["password"].style.backgroundColor = "#FFF5F5";
            form["password"].style.border = "1px solid #FF443B";
            form["verifyPassword"].style.backgroundColor = "#FFF5F5";
            form["verifyPassword"].style.border = "1px solid #FF443B";
        }

        return errors;
    }

    return { validate }
}