import { useState } from 'react';
import {
  Users,
  BookOpen,
  GraduationCap,
  BarChart3,
  Shield,
  Clock,
  ArrowRight,
  ChevronRight,
  Play,
  Star,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Users2,
  Calendar,
  FileText,
  Bell
} from 'lucide-react';
import Footer from '../components/layout/Footer';

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  const features = [
    {
      icon: Users,
      title: 'Student Management',
      description: 'Complete student profiles, attendance tracking, and academic records in one centralized system.',
      color: 'bg-blue-500'
    },
    {
      icon: BookOpen,
      title: 'Academic Management',
      description: 'Curriculum planning, grade management, and progress tracking for enhanced learning outcomes.',
      color: 'bg-green-500'
    },
    {
      icon: GraduationCap,
      title: 'Teacher Portal',
      description: 'Dedicated portal for teachers with lesson planning, grading, and communication tools.',
      color: 'bg-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reports',
      description: 'Comprehensive analytics and automated reports for data-driven decision making.',
      color: 'bg-orange-500'
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Enterprise-grade security with role-based access control and data encryption.',
      color: 'bg-indigo-500'
    },
    {
      icon: Clock,
      title: 'Attendance System',
      description: 'Automated attendance tracking with real-time notifications and reporting.',
      color: 'bg-pink-500'
    },
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Principal, Greenfield High School',
      content: 'EduManage transformed how our school operates. The automation has saved us countless hours of administrative work.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'School Administrator',
      content: 'The parent-teacher communication features have dramatically improved engagement. Highly recommended!',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      rating: 5
    },
    {
      name: 'Emma Wilson',
      role: 'Parent & PTA President',
      content: 'Being able to track my child\'s progress in real-time has been a game-changer. The app is intuitive and powerful.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
      rating: 4
    },
  ];

  const stats = [
    { number: '500+', label: 'Schools Trust Us' },
    { number: '50,000+', label: 'Active Users' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Support Available' },
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small schools',
      features: [
        'Up to 500 students',
        'Basic attendance tracking',
        'Standard reports',
        'Email support'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$249',
      period: '/month',
      description: 'For growing institutions',
      features: [
        'Up to 2,000 students',
        'Advanced analytics',
        'Parent portal',
        'Mobile app access',
        'Priority support'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Large schools & districts',
      features: [
        'Unlimited students',
        'Custom integrations',
        'Dedicated support',
        'Advanced security',
        'White-label option',
        'Training & onboarding'
      ],
      highlighted: false
    },
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-linear-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Modern School Management
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-700">
                  Made Simple
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Streamline your school's administration, academics, and communication with our all-in-one platform. 
                Join thousands of schools that trust EduManage for efficient school management.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a 
                  href="/signup" 
                  className="inline-flex items-center justify-center bg-linear-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-lg hover:opacity-90 font-medium text-lg transition-opacity"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <button className="inline-flex items-center justify-center border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 font-medium text-lg">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border">
                <div className="bg-linear-to-r from-blue-600 to-indigo-700 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <span className="text-white font-medium">EduManage Dashboard</span>
                    <div className="w-20"></div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <Users className="w-8 h-8 text-blue-600" />
                        <span className="text-2xl font-bold text-gray-900">1,856</span>
                      </div>
                      <p className="text-sm text-gray-600">Students</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <GraduationCap className="w-8 h-8 text-green-600" />
                        <span className="text-2xl font-bold text-gray-900">124</span>
                      </div>
                      <p className="text-sm text-gray-600">Teachers</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <Users2 className="w-5 h-5 text-gray-400 mr-3" />
                      <span>Student Management</span>
                    </div>
                    <div className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                      <span>Attendance Tracking</span>
                    </div>
                    <div className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <FileText className="w-5 h-5 text-gray-400 mr-3" />
                      <span>Grade Reports</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <Bell className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-medium">24 Notifications</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <BarChart3 className="w-5 h-5 text-green-600 mr-2" />
                  <span className="font-medium">95% Attendance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive tools designed specifically for modern educational institutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border hover:shadow-lg transition-shadow group">
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <a href="#" className="inline-flex items-center text-blue-600 font-medium mt-4 group-hover:underline">
                  Learn more
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Educational Leaders
            </h2>
            <p className="text-lg text-gray-600">
              See what schools and educators are saying about EduManage
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.content}</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-linear-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your School Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of schools using EduManage to streamline their operations
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Start Free Trial
            </button>
          </div>
          
          <p className="text-blue-200 text-sm mt-4">
            No credit card required • Full access for 30 days
          </p>
        </div>
      </section>

      <Footer />
      
    </div>
  );
}