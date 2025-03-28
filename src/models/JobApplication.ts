export class JobApplication {
  id: string;
  jobTitle: string;
  company: string;
  applicantName: string;
  email: string;
  phone: string;
  resume: string;
  coverLetter: string;
  applicationDate: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';

  constructor(
    jobTitle: string,
    company: string,
    applicantName: string,
    email: string,
    phone: string,
    resume: string,
    coverLetter: string
  ) {
    this.id = Math.random().toString(36).substring(7);
    this.jobTitle = jobTitle;
    this.company = company;
    this.applicantName = applicantName;
    this.email = email;
    this.phone = phone;
    this.resume = resume;
    this.coverLetter = coverLetter;
    this.applicationDate = new Date().toISOString();
    this.status = 'pending';
  }
}
