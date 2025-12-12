import { useState } from 'react';
import {
  Users,
  BookOpen,
  GraduationCap,
  Calendar,
  DollarSign,
  BarChart3,
  Bell,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import Header from '../components/layout/Header';

export default function Dashboard() {
  
  // Mock data
  const stats = [
    { title: 'Total Students', value: '1,856', change: '+5.2%', icon: Users, color: 'bg-blue-500', trend: 'up' },
    { title: 'Total Teachers', value: '124', change: '+2.3%', icon: GraduationCap, color: 'bg-green-500', trend: 'up' },
    { title: 'Active Courses', value: '48', change: '+3', icon: BookOpen, color: 'bg-purple-500', trend: 'up' },
    { title: 'Upcoming Events', value: '7', change: '2 today', icon: Calendar, color: 'bg-orange-500', trend: 'neutral' },
    { title: 'Monthly Revenue', value: '$84,250', change: '+8.7%', icon: DollarSign, color: 'bg-emerald-500', trend: 'up' },
    { title: 'Attendance Rate', value: '94.2%', change: '+1.1%', icon: BarChart3, color: 'bg-indigo-500', trend: 'up' },
  ];

  const recentActivities = [
    { id: 1, action: 'New student enrolled', person: 'Emma Wilson', time: '10 min ago', status: 'new', icon: Users },
    { id: 2, action: 'Exam scheduled', course: 'Mathematics - Grade 10', time: '25 min ago', status: 'scheduled', icon: Calendar },
    { id: 3, action: 'Fee payment received', person: 'Michael Chen', amount: '$450', time: '1 hour ago', status: 'completed', icon: DollarSign },
    { id: 4, action: 'Teacher meeting', topic: 'Curriculum Review', time: '2 hours ago', status: 'ongoing', icon: GraduationCap },
    { id: 5, action: 'Library books overdue', count: '12 books', time: '3 hours ago', status: 'alert', icon: BookOpen },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Parent-Teacher Conference', date: 'Tomorrow, 10:00 AM', type: 'Meeting', color: 'bg-blue-100 text-blue-800' },
    { id: 2, title: 'Science Fair Exhibition', date: 'Dec 15, 9:00 AM', type: 'Event', color: 'bg-green-100 text-green-800' },
    { id: 3, title: 'Quarterly Exams', date: 'Dec 18-20', type: 'Academic', color: 'bg-purple-100 text-purple-800' },
    { id: 4, title: 'Staff Training', date: 'Dec 22, 1:00 PM', type: 'Training', color: 'bg-orange-100 text-orange-800' },
  ];

  const classPerformance = [
    { class: 'Grade 10A', attendance: '96%', avgGrade: 'A-', students: 32 },
    { class: 'Grade 9B', attendance: '94%', avgGrade: 'B+', students: 30 },
    { class: 'Grade 11A', attendance: '92%', avgGrade: 'A', students: 28 },
    { class: 'Grade 8C', attendance: '90%', avgGrade: 'B', students: 35 },
  ];

  const quickActions = [
    { title: 'Add New Student', icon: Users, color: 'bg-blue-500' },
    { title: 'Schedule Exam', icon: Calendar, color: 'bg-green-500' },
    { title: 'Generate Report', icon: BarChart3, color: 'bg-purple-500' },
    { title: 'Send Notifications', icon: Bell, color: 'bg-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      

      <main className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`flex items-center text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : stat.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {stat.trend === 'up' && <TrendingUp className="w-4 h-4 mr-1" />}
                  {stat.trend === 'down' && <TrendingDown className="w-4 h-4 mr-1" />}
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600 text-sm mt-1">{stat.title}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Class Performance */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Class Performance</h2>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View All →
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 text-gray-700 font-medium">Class</th>
                      <th className="text-left py-3 px-4 text-gray-700 font-medium">Attendance</th>
                      <th className="text-left py-3 px-4 text-gray-700 font-medium">Average Grade</th>
                      <th className="text-left py-3 px-4 text-gray-700 font-medium">Students</th>
                    </tr>
                  </thead>
                  <tbody>
                    {classPerformance.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-4">
                          <div className="font-medium">{item.class}</div>
                          <div className="text-sm text-gray-500">Class Teacher: Mr. Johnson</div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                              <div 
                                className="bg-green-500 h-2 rounded-full" 
                                style={{ width: item.attendance }}
                              ></div>
                            </div>
                            <span className="font-medium">{item.attendance}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            {item.avgGrade}
                          </span>
                        </td>
                        <td className="py-4 px-4 font-medium">{item.students}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className="flex flex-col items-center justify-center p-4 border rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                  >
                    <div className={`p-3 rounded-lg ${action.color} mb-3 group-hover:scale-110 transition-transform`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-900 text-center">{action.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Recent Activities */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Activities</h2>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  See All →
                </button>
              </div>
              
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 pb-4 border-b last:border-0 last:pb-0">
                    <div className={`p-2 rounded-lg ${
                      activity.status === 'new' ? 'bg-blue-100 text-blue-600' :
                      activity.status === 'completed' ? 'bg-green-100 text-green-600' :
                      activity.status === 'alert' ? 'bg-red-100 text-red-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      <activity.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-600">
                        {activity.person || activity.course || activity.amount || activity.topic || activity.count}
                      </p>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {activity.time}
                      </div>
                    </div>
                    {activity.status === 'new' && <CheckCircle className="w-5 h-5 text-green-500" />}
                    {activity.status === 'alert' && <AlertCircle className="w-5 h-5 text-red-500" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Upcoming Events</h2>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View Calendar →
                </button>
              </div>
              
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900">{event.title}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${event.color}`}>
                        {event.type}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <button className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium">
                      View Details →
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* System Status */}
            <div className="bg-linear-to-r from-blue-600 to-indigo-700 rounded-xl shadow-sm p-6 text-white">
              <h2 className="text-xl font-bold mb-4">System Status</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Server Uptime</span>
                  <span className="font-bold">99.9%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Database Status</span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Last Backup</span>
                  <span>2 hours ago</span>
                </div>
              </div>
              <button className="w-full mt-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                System Settings
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Charts Placeholder */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Attendance Trends</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600">Attendance chart visualization</p>
                <p className="text-sm text-gray-500 mt-1">Monthly trends and comparisons</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Revenue Overview</h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <DollarSign className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600">Revenue chart visualization</p>
                <p className="text-sm text-gray-500 mt-1">Quarterly financial performance</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}