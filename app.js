const { useState, useEffect } = React;

// Initialize EmailJS
emailjs.init("uohsz2sAgojF0lb3Y");

// Lucide React icons as components (since we can't import normally)
const Calendar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const Clock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12,6 12,12 16,14"></polyline>
  </svg>
);

const User = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const CheckCircle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22,4 12,14.01 9,11.01"></polyline>
  </svg>
);

const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12,19 5,12 12,5"></polyline>
  </svg>
);

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12,5 19,12 12,19"></polyline>
  </svg>
);

const Grid3x3 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="6" height="6"></rect>
    <rect x="15" y="3" width="6" height="6"></rect>
    <rect x="3" y="15" width="6" height="6"></rect>
    <rect x="15" y="15" width="6" height="6"></rect>
  </svg>
);

const LayoutGrid = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="8" height="8"></rect>
    <rect x="13" y="3" width="8" height="8"></rect>
    <rect x="3" y="13" width="8" height="8"></rect>
    <rect x="13" y="13" width="8" height="8"></rect>
  </svg>
);

const X = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Search = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="M21 21l-4.35-4.35"></path>
  </svg>
);

const BarChart3 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"></path>
    <path d="M18 17V9"></path>
    <path d="M13 17V5"></path>
    <path d="M8 17v-3"></path>
  </svg>
);

const Users = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const CalendarDays = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
    <path d="M8 14h.01"></path>
    <path d="M12 14h.01"></path>
    <path d="M16 14h.01"></path>
    <path d="M8 18h.01"></path>
    <path d="M12 18h.01"></path>
    <path d="M16 18h.01"></path>
  </svg>
);

const Plus = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

// APPOINTMENT SCHEDULER COMPONENT
const AppointmentScheduler = () => {
  const [currentStep, setCurrentStep] = useState('calendar');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [viewMode, setViewMode] = useState('week');
  const [currentWeek, setCurrentWeek] = useState(0);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    notes: ''
  });
  const [appointments, setAppointments] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  // Services offered
  const services = [
    { id: 'consultation', name: 'Initial Consultation', duration: '60 min', description: 'Business assessment and strategy planning' },
    { id: 'follow-up', name: 'Follow-up Session', duration: '30 min', description: 'Progress review and guidance' },
    { id: 'strategy', name: 'Strategy Workshop', duration: '90 min', description: 'Deep-dive strategy development' },
    { id: 'training', name: 'Team Training', duration: '120 min', description: 'Skills development and team building' }
  ];

  // Generate time slots
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00'
  ];

  // Generate dates for current week
  const generateWeekDates = (weekOffset = 0) => {
    const dates = [];
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() + (weekOffset * 7));
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  // Generate monthly calendar
  const generateMonthDates = (month) => {
    const year = month.getFullYear();
    const monthIndex = month.getMonth();
    const firstDay = new Date(year, monthIndex, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const dates = [];
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const weekDates = generateWeekDates(currentWeek);
  const monthDates = generateMonthDates(currentMonth);

  // Navigate month
  const navigateMonth = (direction) => {
    setAnimationClass(direction === 1 ? 'slide-left' : 'slide-right');
    setTimeout(() => {
      const newMonth = new Date(currentMonth);
      newMonth.setMonth(currentMonth.getMonth() + direction);
      setCurrentMonth(newMonth);
      setAnimationClass('');
    }, 150);
  };

  // Navigate week
  const navigateWeek = (direction) => {
    setAnimationClass(direction === 1 ? 'slide-left' : 'slide-right');
    setTimeout(() => {
      setCurrentWeek(direction === 1 ? currentWeek + 1 : Math.max(0, currentWeek - 1));
      setAnimationClass('');
    }, 150);
  };

  // Check if time slot is available
  const isTimeSlotAvailable = (date, time) => {
    const dateStr = date.toISOString().split('T')[0];
    return !appointments.some(apt => apt.date === dateStr && apt.time === time);
  };

  // Format date for display
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Show loading state
    const submitButton = document.querySelector('button[type="submit"]');
    const originalText = submitButton?.innerHTML;
    if (submitButton) {
      submitButton.innerHTML = '<div style="display: flex; align-items: center; justify-content: center;"><div style="width: 16px; height: 16px; border: 2px solid #ffffff; border-top: 2px solid transparent; border-radius: 50%; animation: spin 1s linear infinite; margin-right: 8px;"></div>Sending...</div>';
      submitButton.disabled = true;
    }

    try {
      // Prepare email data
      const selectedService = services.find(s => s.id === formData.service);
      const formattedDate = new Date(selectedDate).toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });

      const emailData = {
        to_email: formData.email, // This tells EmailJS where to send the email
        client_name: formData.name,
        client_email: formData.email,
        session_date: formattedDate,
        session_time: selectedTime,
        service_name: selectedService?.name || 'Unknown Service',
        client_notes: formData.notes || 'No additional notes provided'
      };

      // Debug logging
      console.log('Sending email with data:', emailData);

      // Send email via EmailJS
      await emailjs.send(
        "service_kvrzkmq",
        "template_ujgw9fb", 
        emailData,
        "uohsz2sAgojF0lb3Y"
      );

      // Create appointment record
      const newAppointment = {
        id: Date.now(),
        date: selectedDate,
        time: selectedTime,
        ...formData,
        status: 'confirmed'
      };
      
      setAppointments([...appointments, newAppointment]);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setCurrentStep('calendar');
        setSelectedDate('');
        setSelectedTime('');
        setFormData({ name: '', email: '', phone: '', service: '', notes: '' });
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      
      // Reset button state
      if (submitButton) {
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
      }
      
      // Show user-friendly error
      alert('There was an issue sending your confirmation email, but your appointment has been noted. We\'ll contact you shortly to confirm.');
      
      // Still create the appointment even if email fails
      const newAppointment = {
        id: Date.now(),
        date: selectedDate,
        time: selectedTime,
        ...formData,
        status: 'pending' // Mark as pending if email failed
      };
      
      setAppointments([...appointments, newAppointment]);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setCurrentStep('calendar');
        setSelectedDate('');
        setSelectedTime('');
        setFormData({ name: '', email: '', phone: '', service: '', notes: '' });
        setIsSubmitted(false);
      }, 5000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <style>{`
          .bounce-in {
            animation: bounceIn 0.5s ease-out;
          }
          @keyframes bounceIn {
            0% { transform: scale(0.8); opacity: 0; }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); opacity: 1; }
          }
          .pulse {
            animation: pulse 2s infinite;
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center bounce-in">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 pulse">
            <CheckCircle style={{width: '32px', height: '32px', color: '#059669'}} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Your session has been scheduled for {new Date(selectedDate).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })} at {selectedTime}.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <span className="text-green-600 mr-2">📧</span>
              <p className="text-green-800 text-sm font-medium">
                Confirmation email sent to {formData.email}
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            The Transform Squad team looks forward to helping you achieve your business improvement goals! Check your email for session details and next steps.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <style>{`
        .slide-left {
          transform: translateX(-20px);
          opacity: 0.7;
          transition: all 0.15s ease-out;
        }
        .slide-right {
          transform: translateX(20px);
          opacity: 0.7;
          transition: all 0.15s ease-out;
        }
        .fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Book a Session with Transform Squad</h1>
              <p className="text-gray-600 mt-1">Schedule your business improvement consultation</p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Calendar style={{width: '16px', height: '16px'}} />
              <span>30 min before to cancel</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden fade-in">
          {/* Progress indicator */}
          <div className="bg-gray-50 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className={`flex items-center space-x-2 transition-all duration-300 ${currentStep === 'calendar' ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${currentStep === 'calendar' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-200'}`}>
                  <Calendar style={{width: '16px', height: '16px'}} />
                </div>
                <span className="font-medium">Select Date & Time</span>
              </div>
              <div className={`flex items-center space-x-2 transition-all duration-300 ${currentStep === 'details' ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${currentStep === 'details' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-200'}`}>
                  <User style={{width: '16px', height: '16px'}} />
                </div>
                <span className="font-medium">Your Details</span>
              </div>
            </div>
          </div>

          {/* Calendar View */}
          {currentStep === 'calendar' && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Select a Date & Time</h2>
                <div className="flex items-center space-x-4">
                  {/* View toggle */}
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('week')}
                      className={`px-3 py-1 rounded text-sm font-medium transition-all duration-200 flex items-center ${
                        viewMode === 'week' 
                          ? 'bg-white text-blue-600 shadow-sm' 
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      <Grid3x3 style={{width: '16px', height: '16px', marginRight: '4px'}} />
                      Week
                    </button>
                    <button
                      onClick={() => setViewMode('month')}
                      className={`px-3 py-1 rounded text-sm font-medium transition-all duration-200 flex items-center ${
                        viewMode === 'month' 
                          ? 'bg-white text-blue-600 shadow-sm' 
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      <LayoutGrid style={{width: '16px', height: '16px', marginRight: '4px'}} />
                      Month
                    </button>
                  </div>
                  
                  {/* Navigation */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => viewMode === 'week' ? navigateWeek(-1) : navigateMonth(-1)}
                      className="p-2 rounded-lg border hover:bg-gray-50 transition-all duration-200 hover:shadow-sm"
                      disabled={viewMode === 'week' && currentWeek === 0}
                    >
                      <ArrowLeft style={{width: '16px', height: '16px'}} />
                    </button>
                    <span className="text-sm font-medium text-gray-600 min-w-[120px] text-center">
                      {viewMode === 'month' 
                        ? currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
                        : `Week of ${weekDates[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`
                      }
                    </span>
                    <button
                      onClick={() => viewMode === 'week' ? navigateWeek(1) : navigateMonth(1)}
                      className="p-2 rounded-lg border hover:bg-gray-50 transition-all duration-200 hover:shadow-sm"
                    >
                      <ArrowRight style={{width: '16px', height: '16px'}} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Week View */}
              {viewMode === 'week' && (
                <div className={`transition-all duration-150 ${animationClass}`}>
                  <div className="grid grid-cols-7 gap-4 mb-6">
                    {weekDates.map((date, index) => {
                      const dateStr = date.toISOString().split('T')[0];
                      const isToday = new Date().toDateString() === date.toDateString();
                      const isPast = date < new Date() && !isToday;
                      
                      return (
                        <div key={index} className="text-center">
                          <div className="text-sm text-gray-500 mb-2">
                            {date.toLocaleDateString('en-US', { weekday: 'short' })}
                          </div>
                          <button
                            onClick={() => setSelectedDate(dateStr)}
                            disabled={isPast}
                            className={`w-12 h-12 rounded-full text-sm font-medium transition-all duration-200 ${
                              selectedDate === dateStr
                                ? 'bg-blue-600 text-white shadow-lg scale-110'
                                : isPast
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : isToday
                                ? 'bg-blue-100 text-blue-600 hover:bg-blue-200 hover:scale-105'
                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:scale-105'
                            }`}
                          >
                            {date.getDate()}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Month View */}
              {viewMode === 'month' && (
                <div className={`transition-all duration-150 ${animationClass}`}>
                  <div className="grid grid-cols-7 gap-1 mb-6">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                        {day}
                      </div>
                    ))}
                    {monthDates.map((date, index) => {
                      const dateStr = date.toISOString().split('T')[0];
                      const isToday = new Date().toDateString() === date.toDateString();
                      const isPast = date < new Date() && !isToday;
                      const isCurrentMonth = date.getMonth() === currentMonth.getMonth();
                      
                      return (
                        <button
                          key={index}
                          onClick={() => isCurrentMonth && !isPast ? setSelectedDate(dateStr) : null}
                          disabled={isPast || !isCurrentMonth}
                          className={`aspect-square p-2 text-sm font-medium transition-all duration-200 ${
                            selectedDate === dateStr
                              ? 'bg-blue-600 text-white rounded-lg shadow-lg scale-105'
                              : !isCurrentMonth
                              ? 'text-gray-300 cursor-default'
                              : isPast
                              ? 'text-gray-400 cursor-not-allowed'
                              : isToday
                              ? 'bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 hover:scale-105'
                              : 'text-gray-700 rounded-lg hover:bg-gray-100 hover:scale-105'
                          }`}
                        >
                          {date.getDate()}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {selectedDate && (
                <div className="fade-in">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Available times for {formatDate(new Date(selectedDate))}
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                    {timeSlots.map((time) => {
                      const isAvailable = isTimeSlotAvailable(new Date(selectedDate), time);
                      return (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          disabled={!isAvailable}
                          className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                            selectedTime === time
                              ? 'bg-blue-600 text-white shadow-lg scale-105'
                              : isAvailable
                              ? 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 hover:scale-105'
                              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {selectedDate && selectedTime && (
                <div className="mt-8 pt-6 border-t fade-in">
                  <button
                    onClick={() => setCurrentStep('details')}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  >
                    Continue to Details
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Details Form */}
          {currentStep === 'details' && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Your Details</h2>
                <button
                  onClick={() => setCurrentStep('calendar')}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  ← Back to Calendar
                </button>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mb-6 fade-in">
                <div className="flex items-center space-x-2 text-blue-800">
                  <Calendar style={{width: '16px', height: '16px'}} />
                  <span className="font-medium">
                    {formatDate(new Date(selectedDate))} at {selectedTime}
                  </span>
                </div>
              </div>

              <div className="space-y-6 fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type *
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name} - {service.duration}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Tell us about your business improvement goals or any specific challenges you'd like to address..."
                  />
                </div>

                <div className="pt-6 border-t">
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg"
                  >
                    <CheckCircle style={{width: '20px', height: '20px'}} />
                    <span>Confirm Session</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>© 2025 Transform Squad. Empowering business transformation through strategic improvement.</p>
        </div>
      </div>
    </div>
  );
};

// ADMIN DASHBOARD COMPONENT
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: '2025-07-03',
      time: '10:00',
      name: 'John Smith',
      email: 'john@email.com',
      phone: '(555) 123-4567',
      service: 'consultation',
      status: 'confirmed',
      notes: 'Looking to improve operational efficiency and team productivity'
    },
    {
      id: 2,
      date: '2025-07-03',
      time: '14:30',
      name: 'Sarah Johnson',
      email: 'sarah@email.com',
      phone: '(555) 987-6543',
      service: 'follow-up',
      status: 'confirmed',
      notes: 'Follow-up on digital transformation strategy implementation'
    },
    {
      id: 3,
      date: '2025-07-04',
      time: '09:00',
      name: 'Mike Davis',
      email: 'mike@email.com',
      phone: '(555) 456-7890',
      service: 'strategy',
      status: 'pending',
      notes: 'Needs help with change management and process optimization'
    }
  ]);

  const [blockedSlots, setBlockedSlots] = useState([
    { date: '2025-07-05', time: '10:00', reason: 'Team meeting' },
    { date: '2025-07-05', time: '10:30', reason: 'Team meeting' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  // Services configuration
  const services = {
    consultation: { name: 'Initial Consultation', duration: '60 min', description: 'Business assessment and strategy planning' },
    'follow-up': { name: 'Follow-up Session', duration: '30 min', description: 'Progress review and guidance' },
    strategy: { name: 'Strategy Workshop', duration: '90 min', description: 'Deep-dive strategy development' },
    training: { name: 'Team Training', duration: '120 min', description: 'Skills development and team building' }
  };

  // Filter appointments
  const filteredAppointments = appointments.filter(apt => {
    const matchesSearch = apt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         apt.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || apt.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Get today's appointments
  const todaysAppointments = appointments.filter(apt => apt.date === new Date().toISOString().split('T')[0]);

  // Calculate statistics
  const stats = {
    totalSessions: appointments.length,
    todaySessions: todaysAppointments.length,
    completedSessions: appointments.filter(apt => apt.status === 'confirmed').length,
    pendingSessions: appointments.filter(apt => apt.status === 'pending').length
  };

  // Update appointment status
  const updateAppointmentStatus = (id, newStatus) => {
    setAppointments(appointments.map(apt => 
      apt.id === id ? { ...apt, status: newStatus } : apt
    ));
  };

  // Cancel appointment
  const cancelAppointment = (id) => {
    if (confirm('Are you sure you want to cancel this session?')) {
      setAppointments(appointments.filter(apt => apt.id !== id));
    }
  };

  // Add blocked time slot
  const addBlockedSlot = () => {
    const time = prompt('Enter time (e.g., 10:00):');
    const reason = prompt('Reason for blocking:');
    if (time && reason) {
      setBlockedSlots([...blockedSlots, { date: selectedDate, time, reason }]);
    }
  };

  // Remove blocked slot
  const removeBlockedSlot = (index) => {
    setBlockedSlots(blockedSlots.filter((_, i) => i !== index));
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        .fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Transform Squad - Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Manage your business improvement sessions and availability</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 font-medium text-sm transition-colors flex items-center ${
                activeTab === 'overview' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <BarChart3 style={{width: '16px', height: '16px', marginRight: '8px'}} />
              Overview
            </button>
            <button
              onClick={() => setActiveTab('appointments')}
              className={`px-6 py-3 font-medium text-sm transition-colors flex items-center ${
                activeTab === 'appointments' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <CalendarDays style={{width: '16px', height: '16px', marginRight: '8px'}} />
              Sessions
            </button>
            <button
              onClick={() => setActiveTab('availability')}
              className={`px-6 py-3 font-medium text-sm transition-colors flex items-center ${
                activeTab === 'availability' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Clock style={{width: '16px', height: '16px', marginRight: '8px'}} />
              Availability
            </button>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="fade-in space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Sessions</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalSessions}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CalendarDays style={{width: '24px', height: '24px', color: '#2563eb'}} />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Today's Sessions</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.todaySessions}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Clock style={{width: '24px', height: '24px', color: '#059669'}} />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Completed Sessions</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.completedSessions}</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <CheckCircle style={{width: '24px', height: '24px', color: '#7c3aed'}} />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Pending Sessions</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.pendingSessions}</p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Users style={{width: '24px', height: '24px', color: '#d97706'}} />
                  </div>
                </div>
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Today's Schedule</h3>
              </div>
              <div className="p-6">
                {todaysAppointments.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No sessions scheduled for today</p>
                ) : (
                  <div className="space-y-4">
                    {todaysAppointments.map((apt) => (
                      <div key={apt.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <User style={{width: '24px', height: '24px', color: '#2563eb'}} />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{apt.name}</p>
                            <p className="text-sm text-gray-500">{services[apt.service].name}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">{apt.time}</p>
                          <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                            apt.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {apt.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Sessions Tab */}
        {activeTab === 'appointments' && (
          <div className="fade-in">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                  <h3 className="text-lg font-semibold text-gray-900">All Sessions</h3>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search style={{width: '16px', height: '16px', position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af'}} />
                      <input
                        type="text"
                        placeholder="Search sessions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="all">All Status</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="pending">Pending</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredAppointments.map((apt) => (
                      <tr key={apt.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{apt.name}</p>
                            <p className="text-sm text-gray-500">{apt.email}</p>
                            <p className="text-sm text-gray-500">{apt.phone}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{formatDate(apt.date)}</p>
                            <p className="text-sm text-gray-500">{apt.time}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{services[apt.service].name}</p>
                            <p className="text-sm text-gray-500">{services[apt.service].duration}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            apt.status === 'confirmed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {apt.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            {apt.status === 'pending' && (
                              <button
                                onClick={() => updateAppointmentStatus(apt.id, 'confirmed')}
                                className="text-green-600 hover:text-green-900"
                                title="Confirm"
                              >
                                <CheckCircle style={{width: '16px', height: '16px'}} />
                              </button>
                            )}
                            <button
                              onClick={() => cancelAppointment(apt.id)}
                              className="text-red-600 hover:text-red-900"
                              title="Cancel"
                            >
                              <X style={{width: '16px', height: '16px'}} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Availability Tab */}
        {activeTab === 'availability' && (
          <div className="fade-in">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Manage Availability</h3>
                  <div className="flex items-center space-x-4">
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                      onClick={addBlockedSlot}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                    >
                      <Plus style={{width: '16px', height: '16px'}} />
                      <span>Block Time</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h4 className="font-medium text-gray-900 mb-4">Blocked Time Slots</h4>
                {blockedSlots.length === 0 ? (
                  <p className="text-gray-500 py-8 text-center">No blocked time slots</p>
                ) : (
                  <div className="space-y-3">
                    {blockedSlots.map((slot, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                        <div>
                          <p className="font-medium text-gray-900">{formatDate(slot.date)} at {slot.time}</p>
                          <p className="text-sm text-gray-600">{slot.reason}</p>
                        </div>
                        <button
                          onClick={() => removeBlockedSlot(index)}
                          className="text-red-600 hover:text-red-800 p-1"
                        >
                          <X style={{width: '16px', height: '16px'}} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// MAIN APP COMPONENT
function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  
  return (
    <div>
      {/* Toggle Button */}
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
            fontSize: '14px',
            fontWeight: '500',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}
        >
          {isAdmin ? '🗓️ View Booking Page' : '⚙️ Admin Dashboard'}
        </button>
      </div>
      
      {/* Render the appropriate component */}
      {isAdmin ? <AdminDashboard /> : <AppointmentScheduler />}
    </div>
  );
}

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));
