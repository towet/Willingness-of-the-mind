import { useState, useEffect } from 'react';
import { JobApplication } from '../models/JobApplication';
import { JobApplicationService } from '../services/JobApplicationService';
import { motion } from 'framer-motion';
import { FileText, Calendar, Mail, Phone, Building2, User, CheckCircle, XCircle, Clock, Trash2 } from 'lucide-react';
import { useAdmin } from '../hooks/useAdmin';

export default function JobApplicationsList() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const { isAdmin } = useAdmin();

  useEffect(() => {
    const loadApplications = () => {
      const apps = JobApplicationService.getAllApplications();
      console.log('Loading applications:', apps); // Debug log
      setApplications(apps);
    };

    loadApplications();

    // Add event listener for storage changes
    const handleStorageChange = () => {
      console.log('Storage changed, reloading applications...'); // Debug log
      loadApplications();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleDelete = (applicationId: string) => {
    if (window.confirm('Are you sure you want to delete this application?')) {
      JobApplicationService.deleteApplication(applicationId);
      setApplications(prev => prev.filter(app => app.id !== applicationId));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted':
        return 'text-green-600 bg-green-100';
      case 'rejected':
        return 'text-red-600 bg-red-100';
      case 'reviewed':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-yellow-600 bg-yellow-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'accepted':
        return <CheckCircle className="h-5 w-5" />;
      case 'rejected':
        return <XCircle className="h-5 w-5" />;
      default:
        return <Clock className="h-5 w-5" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Job Applications</h2>
      
      {applications.length === 0 ? (
        <div className="text-center py-12">
          <FileText className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No applications</h3>
          <p className="mt-1 text-sm text-gray-500">No job applications have been submitted yet.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((application) => (
            <motion.div
              key={application.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{application.jobTitle}</h3>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(application.status)} flex items-center gap-1`}>
                    {getStatusIcon(application.status)}
                    {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                  </span>
                  {isAdmin && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDelete(application.id)}
                      className="text-red-600 hover:text-red-800 transition-colors"
                      title="Delete application"
                    >
                      <Trash2 size={20} />
                    </motion.button>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Building2 className="h-5 w-5 mr-2" />
                  <span>{application.company}</span>
                </div>

                <div className="flex items-center text-gray-600">
                  <User className="h-5 w-5 mr-2" />
                  <span>{application.applicantName}</span>
                </div>

                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>{application.email}</span>
                </div>

                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>{application.phone}</span>
                </div>

                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{new Date(application.applicationDate).toLocaleDateString()}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
