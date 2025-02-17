// interface for all users

// internal user interface
export interface InternalUser {
    id: string,
    firstName:string,
    lastName:string,
    email:string,
    passwords:string,
    phone:string,
    title: string,
    npi: string,
    patients: [],
    supervisor:[],
    permissions:[],
    upcomingAppointments:[],
    archivedAppointments:[],
    dateCreated: Date,
    lastUpdated: Date,
   }