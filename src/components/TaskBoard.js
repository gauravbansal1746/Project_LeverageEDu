import React, { useState, useEffect } from 'react';

function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Separate state for signup and login
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDisplayName, setUserDisplayName] = useState(''); // Store the user's display name
  const [userPhotoURL, setUserPhotoURL] = useState(''); // Store the user's photo URL

  const handleSignup = () => {
    if (signupUsername.trim() !== '' && signupPassword.trim() !== '') {
      const userData = { username: signupUsername, password: signupPassword };
      localStorage.setItem('user', JSON.stringify(userData));
      setSignupSuccess(true); // Set the login username
    }
  };

  // Login function
  const handleLogin = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      if (loginUsername === userData.username && loginPassword === userData.password) {
        setIsLoggedIn(true);
        setUserDisplayName(loginUsername); // Set the user's display name
        // Set the user's photo URL (you should obtain this from your authentication system)
        setUserPhotoURL('./task-board-app/src/pics/photos.webp');
      } else {
        alert('Incorrect username or password');
      }
    } else {
      alert('Please sign up first before logging in.');
    }
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserDisplayName(''); // Clear the user's display name
    setUserPhotoURL(''); // Clear the user's photo URL
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setNewTask('');
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  };

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <div className="task-board">
      <h1>Task Board</h1>
      {isLoggedIn ? (
        <div className="user-panel">
          <div className="user-info">
            <h2>Welcome, {userDisplayName}</h2>
            {userPhotoURL && <img src={userPhotoURL} alt="User" />}
          </div>
          <button onClick={handleLogout}>Logout</button>
          <div>
            <input
              type="text"
              placeholder="Add a new task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
          </div>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          {signupSuccess ? (
            <div>
              <p>Signup successful! You can now log in.</p>
            </div>
          ) : (
            <div className="signup" style={styles.signupContainer}>
              <h2>Sign Up</h2>
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Username"
                  value={signupUsername}
                  onChange={(e) => setSignupUsername(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                />
              </div>
              <div>
                <button onClick={handleSignup}>Signup</button>
              </div>
            </div>
          )}
          <div className="login" style={styles.signupContainer}>
            <h2>Login</h2>
            <div>
              <input
                type="text"
                placeholder="Username"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <div>
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  signupContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40vh', // Adjust as needed
    padding: '10px', // Add padding
    border: '1px solid #ccc', // Add border
    borderRadius: '5px', // Add border radius
  },
  inputContainer: {
    marginBottom: '10px',
  },
};

export default TaskBoard;