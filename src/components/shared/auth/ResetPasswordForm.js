"use client";

import { useState } from "react";
import Link from "next/link";
import { Form } from "antd";
import { resetPassword } from "@/services/auth";
import Button from "@/ui-components/buttons/Button";
import Eyebrow from "@/ui-components/badges/Eyebrow";
import Toast from "@/ui-components/feedback/Toast";
import { PasswordField } from "@/ui-components/inputs";
import { applyServerErrors } from "./serverErrors";
import styles from "./authForm.module.css";

// Same rule as the API: 8+ chars, a letter and a number
const PASSWORD_RULES = [
  { required: true, message: "Please enter a new password" },
  { min: 8, message: "Password must be at least 8 characters" },
  { pattern: /[A-Za-z]/, message: "Password must contain a letter" },
  { pattern: /\d/, message: "Password must contain a number" },
];

/** Set a new password using the token from the email link (?token=…). */
export default function ResetPasswordForm({ portal, token }) {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [done, setDone] = useState(false);

  if (!token) {
    return (
      <div className={styles.form}>
        <div className={styles.header}>
          <Eyebrow>{portal.label}</Eyebrow>
          <h1 className={styles.title}>Link not valid</h1>
          <p className={styles.subtitle}>This reset link is incomplete. Please request a new one.</p>
        </div>
        <Button block href={portal.forgotPasswordPath}>
          Request a new link
        </Button>
      </div>
    );
  }

  if (done) {
    return (
      <div className={styles.form}>
        <div className={styles.header}>
          <Eyebrow>{portal.label}</Eyebrow>
          <h1 className={styles.title}>Password updated</h1>
          <p className={styles.subtitle}>
            You&apos;ve been signed out on all devices. Sign in with your new password.
          </p>
        </div>
        <Button block size="lg" href={portal.loginPath} icon="arrow">
          Sign in
        </Button>
      </div>
    );
  }

  const onFinish = async ({ password }) => {
    setSubmitting(true);
    setError(null);
    try {
      await resetPassword(portal.key, { token, password });
      setDone(true);
    } catch (err) {
      setError(applyServerErrors(form, err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.form}>
      <div className={styles.header}>
        <Eyebrow>{portal.label}</Eyebrow>
        <h1 className={styles.title}>Set a new password</h1>
        <p className={styles.subtitle}>At least 8 characters, with a letter and a number.</p>
      </div>

      {error && (
        <div className={styles.alert}>
          <Toast type="error" title="Couldn't reset password" description={error} onClose={() => setError(null)} />
          <p className={styles.footer}>
            <Link href={portal.forgotPasswordPath}>Request a new link</Link>
          </p>
        </div>
      )}

      <Form form={form} layout="vertical" requiredMark={false} onFinish={onFinish} disabled={submitting}>
        <Form.Item label="New password" name="password" rules={PASSWORD_RULES} hasFeedback>
          <PasswordField placeholder="New password" autoComplete="new-password" autoFocus />
        </Form.Item>
        <Form.Item
          label="Confirm password"
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, message: "Please confirm your password" },
            ({ getFieldValue }) => ({
              validator: (_, value) =>
                !value || getFieldValue("password") === value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Passwords don't match")),
            }),
          ]}
        >
          <PasswordField placeholder="Repeat password" autoComplete="new-password" />
        </Form.Item>
        <Button type="submit" block size="lg" loading={submitting} loadingText="Saving…">
          Update password
        </Button>
      </Form>
    </div>
  );
}
