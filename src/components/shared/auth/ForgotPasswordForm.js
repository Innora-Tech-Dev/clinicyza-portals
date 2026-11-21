"use client";

import { useState } from "react";
import Link from "next/link";
import { Form } from "antd";
import { forgotPassword } from "@/services/auth";
import Button from "@/ui-components/buttons/Button";
import Eyebrow from "@/ui-components/badges/Eyebrow";
import Toast from "@/ui-components/feedback/Toast";
import { TextField } from "@/ui-components/inputs";
import { applyServerErrors } from "./serverErrors";
import styles from "./authForm.module.css";

/** Request a password reset link. Always shows the same confirmation (no account enumeration). */
export default function ForgotPasswordForm({ portal }) {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [sent, setSent] = useState(null); // { email, message, devResetUrl }

  const onFinish = async ({ email }) => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await forgotPassword(portal.key, email);
      setSent({ email, message: res.message, devResetUrl: res.data?.devResetUrl });
    } catch (err) {
      setError(applyServerErrors(form, err));
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div className={styles.form}>
        <div className={styles.header}>
          <Eyebrow>{portal.label}</Eyebrow>
          <h1 className={styles.title}>Check your email</h1>
          <p className={styles.subtitle}>
            {sent.message} The link is valid for 30 minutes.
          </p>
        </div>
        <Button variant="secondary" block href={portal.loginPath}>
          Back to sign in
        </Button>
        {sent.devResetUrl && (
          <div className={styles.devBox}>
            <strong>Development only — email isn&apos;t set up yet:</strong>
            <a href={sent.devResetUrl}>Open the reset link</a>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.form}>
      <div className={styles.header}>
        <Eyebrow>{portal.label}</Eyebrow>
        <h1 className={styles.title}>Forgot password?</h1>
        <p className={styles.subtitle}>Enter your email and we&apos;ll send you a link to set a new one.</p>
      </div>

      {error && (
        <div className={styles.alert}>
          <Toast type="error" title="Something went wrong" description={error} onClose={() => setError(null)} />
        </div>
      )}

      <Form form={form} layout="vertical" requiredMark={false} onFinish={onFinish} disabled={submitting}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Enter a valid email address" },
          ]}
        >
          <TextField placeholder="you@email.com" autoComplete="email" inputMode="email" autoFocus />
        </Form.Item>
        <Button type="submit" block size="lg" loading={submitting} loadingText="Sending…">
          Send reset link
        </Button>
      </Form>

      <p className={styles.footer}>
        Remembered it? <Link href={portal.loginPath}>Back to sign in</Link>
      </p>
    </div>
  );
}
