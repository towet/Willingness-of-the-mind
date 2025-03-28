import { JobApplication } from '../models/JobApplication';

const STORAGE_KEY = 'jobApplications';

export class JobApplicationService {
  static saveApplication(applicationData: {
    jobTitle: string;
    company: string;
    applicantName: string;
    email: string;
    phone: string;
    resume: string;
    coverLetter: string;
  }): JobApplication {
    const application = new JobApplication(
      applicationData.jobTitle,
      applicationData.company,
      applicationData.applicantName,
      applicationData.email,
      applicationData.phone,
      applicationData.resume,
      applicationData.coverLetter
    );

    const applications = this.getAllApplications();
    applications.push(application);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));

    // Dispatch storage event manually since it doesn't fire on same page
    window.dispatchEvent(new Event('storage'));

    return application;
  }

  static getAllApplications(): JobApplication[] {
    try {
      const applications = localStorage.getItem(STORAGE_KEY);
      if (!applications) return [];
      
      const parsedApplications = JSON.parse(applications);
      console.log('Retrieved applications:', parsedApplications); // Debug log
      return parsedApplications;
    } catch (error) {
      console.error('Error getting applications:', error);
      return [];
    }
  }

  static updateApplicationStatus(applicationId: string, status: 'pending' | 'reviewed' | 'accepted' | 'rejected'): void {
    const applications = this.getAllApplications();
    const index = applications.findIndex(app => app.id === applicationId);
    
    if (index !== -1) {
      applications[index].status = status;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
      window.dispatchEvent(new Event('storage')); // Dispatch storage event
    }
  }

  static deleteApplication(applicationId: string): void {
    const applications = this.getAllApplications();
    const filteredApplications = applications.filter(app => app.id !== applicationId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredApplications));
    window.dispatchEvent(new Event('storage')); // Dispatch storage event
  }
}
