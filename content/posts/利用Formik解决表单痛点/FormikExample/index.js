import React from "react";
import { useField, Formik } from "formik";
import { object, string } from "yup";
import "./style.scss";

const loginSchema = object().shape({
    phone: string()
        .length(11, "请输入11位手机号")
        .required("请输入手机号"),
    password: string()
        .min(4, "密码至少4位")
        .max(6, "密码最多6位")
        .required("请输入密码"),
});

const TextField = ({ name, label, type = "text", ...props }) => {
    const [field, meta] = useField(name);
    const error = meta.error && meta.touched;
    return (
        <div className="text-field">
            <label className="text-field-label">
                <div className="text-field-name">{label}</div>
                <input
                    className={error ? "error" : undefined}
                    name={name}
                    type={type}
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    {...props}
                />
            </label>
            {error && <div className="text-field-error">{meta.error}</div>}
        </div>
    );
};

const FormikExample = () => (
    <Formik
        initialValues={{ phone: "", password: "" }}
        onSubmit={values =>
            new Promise(resolve =>
                setTimeout(() => resolve(alert(JSON.stringify(values))), 1000)
            )
        }
        validationSchema={loginSchema}
    >
        {({ handleSubmit, isSubmitting }) => (
            <form className="formik-example-form" onSubmit={handleSubmit}>
                <TextField label="手机号" name="phone" />
                <TextField label="密码" name="password" />
                <button className="formik-submit" type="submit">
                    {isSubmitting ? "请稍后" : "提交"}
                </button>
            </form>
        )}
    </Formik>
);

export default FormikExample;
