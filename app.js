// We'll add the React components here
const { useState } = React;

// [Paste the Transform Squad appointment scheduler code here]
// [Paste the Transform Squad admin dashboard code here]

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  
  return (
    <div>
      <div style={{position: 'fixed', top: 10, right: 10, zIndex: 1000}}>
        <button 
          onClick={() => setIsAdmin(!isAdmin)}
          style={{
            padding: '8px 16px', 
            background: '#3b82f6', 
            color: 'white', 
            border: 'none', 
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          {isAdmin ? 'View Booking Page' : 'Admin Dashboard'}
        </button>
      </div>
      
      {isAdmin ? <AdminDashboard /> : <AppointmentScheduler />}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
