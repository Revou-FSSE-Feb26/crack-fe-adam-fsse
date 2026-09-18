"use client";

import styles from "@/app/globalStyling.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiRequest } from "../lib/api";

export default function FormBasic() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      const result = await apiRequest('/auth/login', { method: 'POST', body: JSON.stringify(form) });
      localStorage.setItem('accessToken', result.accessToken);
      localStorage.setItem('user', JSON.stringify(result.user));
      router.push(`/${result.user.role.toLowerCase()}`);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>LOGIN</h1>
      <div className={styles.inputGroup}>
        <label htmlFor="email">Email</label>
        <input id="email" required className={styles.input} type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password">Password</label>
        <input id="password" required minLength={6} className={styles.input} type="password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <button className={styles.buttonBasic} disabled={loading} type="submit">{loading ? 'SIGNING IN...' : 'SIGN IN'}</button>
    </form>
  );
}