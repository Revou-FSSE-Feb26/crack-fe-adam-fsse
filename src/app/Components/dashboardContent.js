"use client";

import { useEffect, useState } from 'react';
import styles from '@/app/globalStyling.module.css';
import { apiRequest } from '../lib/api';

export default function DashboardContent({ role }) {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user') ?? 'null');
    setUser(storedUser);
    Promise.all([apiRequest('/learning-decks'), apiRequest('/tugas')])
      .then(([, assignments]) => setTasks(assignments))
      .catch((requestError) => setError(requestError.message))
      .finally(() => setLoading(false));
  }, []);

  return <div className={styles.page}>
    <div className={styles.card}>
      <p className={styles.h3}>{role.toUpperCase()} DASHBOARD</p>
      <h1 className={styles.title}>Welcome, {user?.nama ?? 'Learner'}.</h1>
      {loading && <p>Loading your learning activity...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!loading && !error && <>
        <p>{tasks.length} assignment{tasks.length === 1 ? '' : 's'} in the workspace.</p>
        <div className={styles.gridView}>{tasks.map((task) => <article className={styles.card} key={task.id}><strong>{task.tugasKe}</strong><span>{task.status}</span>{task.nilai !== null && <span>Score: {task.nilai}</span>}</article>)}</div>
      </>}
    </div>
  </div>;
}