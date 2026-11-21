"use client";

import { Table } from "antd";
import StatusPill from "@/ui-components/badges/StatusPill";
import Avatar from "@/ui-components/cards/Avatar";
import EmptyState from "@/ui-components/feedback/EmptyState";
import styles from "./recentUsers.module.css";

const ROLE_TONE = { admin: "navy", doctor: "lavender", patient: "success" };

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" });

const COLUMNS = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (name, row) => (
      <span className={styles.person}>
        <Avatar name={name} size="sm" />
        <span>
          <span className={styles.name}>{name}</span>
          <span className={styles.email}>{row.email}</span>
        </span>
      </span>
    ),
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    render: (role) => <StatusPill tone={ROLE_TONE[role]}>{role.charAt(0).toUpperCase() + role.slice(1)}</StatusPill>,
  },
  {
    title: "Joined",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (value) => (value ? dateFormat.format(new Date(value)) : "—"),
  },
  {
    title: "Last sign-in",
    dataIndex: "lastLoginAt",
    key: "lastLoginAt",
    render: (value) => (value ? dateFormat.format(new Date(value)) : "Never"),
  },
];

/** Latest accounts created on the platform. */
export default function RecentUsers({ users = [] }) {
  return (
    <section className={styles.panel}>
      <h2 className={styles.title}>Recent accounts</h2>
      {users.length ? (
        <Table
          rowKey="id"
          columns={COLUMNS}
          dataSource={users}
          pagination={false}
          scroll={{ x: 640 }}
          size="middle"
        />
      ) : (
        <EmptyState icon="users" title="No accounts yet" />
      )}
    </section>
  );
}
