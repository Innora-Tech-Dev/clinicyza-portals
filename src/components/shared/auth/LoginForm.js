"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Form } from "antd";
import { login } from "@/services/auth";
import Button from "@/ui-components/buttons/Button";
import Eyebrow from "@/ui-components/badges/Eyebrow";
import Toast from "@/ui-components/feedback/Toast";
import { PasswordField, TextField } from "@/ui-components/inputs";
import { applyServerErrors } from "./serverErrors";
import styles from "./authForm.module.css";

/**
 * Login form shared by all portals.
 * @param {object} portal  entry from constants/portals.js
 * @param {string} next    page to return to after sign-in (from ?next=)
 */
export default function LoginForm({ portal, next }) {
  const router = useRouter();
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Only follow ?next= inside this portal (prevents open redirects)
  const destination = next?.startsWith(`${portal.basePath}/`) ? next : portal.dashboardPath;

  const onFinish = async (values) => {
    setSubmitting(true);
    setError(null);
    try {
      await login(portal.key, values);
      router.replace(destination);
    } catch (err) {
      setError(applyServerErrors(form, err));
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.form}>
      <div className={styles.header}>
        <Eyebrow>{portal.label}</Eyebrow>
        <h1 className={styles.title}>Welcome back</h1>
        <p className={styles.subtitle}>Sign in to continue to your {portal.shortLabel.toLowerCase()} account.</p>
      </div>

      {error && (
        <div className={styles.alert}>
          <Toast type="error" title="Couldn't sign in" description={error} onClose={() => setError(null)} />
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
        <Form.Item
          label={
            <span className={styles.labelRow}>
              Password
              <Link href={portal.forgotPasswordPath} className={styles.small} tabIndex={-1}>
                Forgot password?
              </Link>
            </span>
          }
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <PasswordField placeholder="Your password" autoComplete="current-password" />
        </Form.Item>
        <Button type="submit" block size="lg" icon="arrow" loading={submitting} loadingText="Signing in…">
          Sign in
        </Button>
      </Form>

      <p className={styles.footer}>
        Not a {portal.shortLabel.toLowerCase()}? <Link href="/">Choose another portal</Link>
      </p>
    </div>
  );
}
