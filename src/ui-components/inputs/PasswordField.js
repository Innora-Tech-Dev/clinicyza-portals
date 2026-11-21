import { Input } from "antd";
import Icon from "@/ui-components/icons/Icon";
import Field from "./Field";
import styles from "./inputs.module.css";

/** Password input with show / hide toggle and a leading lock icon. */
export default function PasswordField({ label, id, message, status, required, fieldClassName, ...inputProps }) {
  return (
    <Field label={label} htmlFor={id} message={message} status={status} required={required} className={fieldClassName}>
      <Input.Password
        id={id}
        prefix={<Icon name="lock" size={18} className={styles.prefixIcon} />}
        status={status === "error" ? "error" : undefined}
        {...inputProps}
      />
    </Field>
  );
}
