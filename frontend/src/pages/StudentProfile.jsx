import { useState } from 'react';
import {
  Mail,
  Calendar,
  Phone,
  MapPin,
  BookOpen,
  Award,
  Users,
  Edit2,
  Download,
  Share2,
  Bookmark,
  ChevronRight,
  Star,
  Clock,
  GraduationCap,
  UserCheck,
  TrendingUp,
  FileText,
  MessageSquare
} from 'lucide-react';

export default function StudentProfile() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Student Data
  const student = {
    name: 'Alexandra Johnson',
    email: 'alex.johnson@student.edu',
    dob: 'March 15, 2006',
    age: 18,
    grade: '11th Grade',
    address: '123 Main Street, New York, NY 10001',
    profilePic: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alexandra',
    status: 'Active',
  };

  // Education History (Two dummy schools)
  const educationHistory = [
    {
      id: 1,
      schoolName: 'Prestige International School',
      period: '2018 - 2022',
      grade: '8th - 10th Grade',
      location: 'San Francisco, CA',
      achievements: [
        'School Science Fair Winner 2021',
        'Mathematics Olympiad State Level Participant',
        'Student Council Vice President'
      ],
      description: 'Completed middle school with excellent academic record and active participation in extracurricular activities.',
      logoColor: 'bg-blue-100 text-blue-800'
    },
    {
      id: 2,
      schoolName: 'Maplewood High School',
      period: '2022 - 2023',
      grade: '11th Grade',
      location: 'New York, NY',
      achievements: [
        'Honor Roll Student (All Semesters)',
        'Debate Team Captain',
        'Varsity Soccer Team Member'
      ],
      description: 'Currently attending with focus on STEM subjects and leadership development.',
      logoColor: 'bg-green-100 text-green-800'
    }
  ];

  // Academic Performance
  const academicPerformance = [
    { subject: 'Mathematics', grade: 'A+', score: 98, progress: 95 },
    { subject: 'Physics', grade: 'A', score: 92, progress: 90 },
    { subject: 'Chemistry', grade: 'A-', score: 88, progress: 85 },
    { subject: 'English', grade: 'B+', score: 86, progress: 82 },
    { subject: 'History', grade: 'A', score: 91, progress: 88 },
    { subject: 'Computer Science', grade: 'A+', score: 96, progress: 94 },
  ];

  // Attendance Summary
  const attendance = {
    present: 156,
    absent: 8,
    late: 4,
    percentage: 95.2
  };

  // Recent Activities
  const recentActivities = [
    { id: 1, action: 'Submitted Math Assignment', time: '2 hours ago', status: 'completed' },
    { id: 2, action: 'Attended Science Club', time: '1 day ago', status: 'attended' },
    { id: 3, action: 'Parent-Teacher Meeting', time: '3 days ago', status: 'completed' },
    { id: 4, action: 'Library Book Due', time: 'Tomorrow', status: 'pending' },
  ];

  // Upcoming Events
  const upcomingEvents = [
    { id: 1, title: 'Quarterly Exams', date: 'Dec 18-20', type: 'Exam' },
    { id: 2, title: 'Science Project Submission', date: 'Dec 22', type: 'Assignment' },
    { id: 3, title: 'Winter Break', date: 'Dec 23 - Jan 3', type: 'Holiday' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      <main className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <img
                    src={student.profilePic}
                    alt={student.name}
                    className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg"
                  />
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900">{student.name}</h2>
                <p className="text-gray-600 mb-2">{student.grade}</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  <UserCheck className="w-4 h-4 mr-1" />
                  {student.status}
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium">{student.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">Date of Birth</p>
                    <p className="font-medium">{student.dob} ({student.age} years)</p>
                  </div>
                </div>
              
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">Address</p>
                    <p className="font-medium">{student.address}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <button className="w-full flex items-center justify-center px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Message
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center px-4 py-2 text-gray-700 border rounded-lg hover:bg-gray-50">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </button>
                  <button className="flex items-center justify-center px-4 py-2 text-gray-700 border rounded-lg hover:bg-gray-50">
                    <Bookmark className="w-4 h-4 mr-2" />
                    Save
                  </button>
                </div>
              </div>
            </div>

            {/* Attendance Summary */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="font-bold text-gray-900 mb-4">Attendance Summary</h3>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Attendance Rate</span>
                  <span className="text-2xl font-bold text-green-600">{attendance.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-green-500 h-2.5 rounded-full" 
                    style={{ width: `${attendance.percentage}%` }}
                  ></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">{attendance.present}</div>
                  <div className="text-sm text-gray-600">Present</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">{attendance.absent}</div>
                  <div className="text-sm text-gray-600">Absent</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">{attendance.late}</div>
                  <div className="text-sm text-gray-600">Late</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Navigation Tabs */}
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <div className="flex border-b">
                {['overview', 'academics', 'attendance', 'documents', 'activities'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 font-medium capitalize transition-colors ${
                      activeTab === tab
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {/* Education History Section */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900 flex items-center">
                      <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
                      Education History
                    </h2>
                    <span className="text-sm text-gray-500">2 Schools Attended</span>
                  </div>

                  <div className="space-y-6">
                    {educationHistory.map((school) => (
                      <div key={school.id} className="relative pl-8 pb-8 border-l border-gray-200 last:border-0 last:pb-0">
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-blue-500 rounded-full"></div>
                        
                        <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4">
                            <div>
                              <div className="flex items-center mb-2">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${school.logoColor}`}>
                                  <BookOpen className="w-5 h-5" />
                                </div>
                                <div>
                                  <h3 className="text-lg font-bold text-gray-900">{school.schoolName}</h3>
                                  <p className="text-gray-600">{school.location}</p>
                                </div>
                              </div>
                              <div className="flex items-center mt-2 space-x-4">
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                  {school.period}
                                </span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                                  {school.grade}
                                </span>
                              </div>
                            </div>
                            <button className="mt-3 sm:mt-0 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 text-sm">
                              View Details
                            </button>
                          </div>
                          
                          <p className="text-gray-700 mb-4">{school.description}</p>
                          
                          <div className="mt-4">
                            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                              <Award className="w-4 h-4 mr-2 text-yellow-500" />
                              Key Achievements:
                            </h4>
                            <ul className="space-y-2">
                              {school.achievements.map((achievement, index) => (
                                <li key={index} className="flex items-start">
                                  <Star className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 shrink-0" />
                                  <span className="text-gray-700">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Performance */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Academic Performance</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {academicPerformance.map((subject, index) => (
                      <div key={index} className="bg-white border rounded-lg p-4 hover:shadow-sm transition-shadow">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-bold text-gray-900">{subject.subject}</h4>
                          <span className={`px-2 py-1 rounded text-sm font-medium ${
                            subject.grade === 'A+' ? 'bg-green-100 text-green-800' :
                            subject.grade.startsWith('A') ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {subject.grade}
                          </span>
                        </div>
                        <div className="mb-2">
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{subject.score}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                subject.score >= 90 ? 'bg-green-500' :
                                subject.score >= 80 ? 'bg-blue-500' : 'bg-yellow-500'
                              }`}
                              style={{ width: `${subject.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Current Score</span>
                          <span className="font-bold">{subject.score}/100</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                      View Full Transcript
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>

                {/* Recent Activities & Upcoming Events Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Recent Activities */}
                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Recent Activities</h3>
                    <div className="space-y-4">
                      {recentActivities.map((activity) => (
                        <div key={activity.id} className="flex items-start space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                            activity.status === 'completed' ? 'bg-green-100 text-green-600' :
                            activity.status === 'attended' ? 'bg-blue-100 text-blue-600' : 'bg-yellow-100 text-yellow-600'
                          }`}>
                            <Clock className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{activity.action}</p>
                            <p className="text-sm text-gray-600">{activity.time}</p>
                          </div>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            activity.status === 'completed' ? 'bg-green-100 text-green-800' :
                            activity.status === 'attended' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {activity.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming Events */}
                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Upcoming Events</h3>
                    <div className="space-y-4">
                      {upcomingEvents.map((event) => (
                        <div key={event.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                          <div>
                            <h4 className="font-medium text-gray-900">{event.title}</h4>
                            <div className="flex items-center text-sm text-gray-600 mt-1">
                              <Calendar className="w-4 h-4 mr-2" />
                              {event.date}
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            event.type === 'Exam' ? 'bg-red-100 text-red-800' :
                            event.type === 'Assignment' ? 'bg-purple-100 text-purple-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {event.type}
                          </span>
                        </div>
                      ))}
                    </div>
                    <button className="w-full mt-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 font-medium">
                      View All Events
                    </button>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-linear-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <FileText className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="font-medium text-blue-800">Documents</span>
                    </div>
                    <p className="text-blue-700 text-sm">5 uploaded documents</p>
                  </div>
                  
                  <div className="bg-linear-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                      <span className="font-medium text-green-800">Performance</span>
                    </div>
                    <p className="text-green-700 text-sm">Top 10% in class</p>
                  </div>
                  
                  <div className="bg-linear-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 text-purple-600 mr-2" />
                      <span className="font-medium text-purple-800">Extracurricular</span>
                    </div>
                    <p className="text-purple-700 text-sm">3 active clubs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}