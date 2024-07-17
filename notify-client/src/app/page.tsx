// components/KanbanBoard.js
import React from 'react';
import styles from './page.module.css';

const KanbanBoard = () => {
  const tasks = [
    { id: 1, title: "Multiple logins with the same email issues", column: "Ready for Dev", category: "Automate Setup Flow", taskId: "#32029", users: ["👨‍💻", "👩‍💻"] },
    { id: 2, title: "Add bulk import of users from LDAP systems", column: "Ready for Dev", category: "Improve Organization Onboarding", taskId: "#32534", users: ["🧑‍💻"] },
    // Add more tasks as needed
  ];

  const columns = ["Ready for Dev", "In Development", "Ready for Review", "Ready to Deploy"];

  return (
    <div className={styles.kanbanBoard}>
      {columns.map((column) => (
        <div key={column} className={styles.column}>
          <h2>{column}</h2>
          <div className={styles.tasks}>
            {tasks.filter(task => task.column === column).map(task => (
              <div key={task.id} className={styles.task}>
                <h3>{task.category}</h3>
                <p>{task.title}</p>
                <span>{task.taskId}</span>
                <div className={styles.users}>
                  {task.users.map((user, index) => <span key={index}>{user}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
