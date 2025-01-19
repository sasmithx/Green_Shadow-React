export class Log{
    logCode : string;
    logDate : string;
    logDetails : string;
    UserRole : string;
    Field : string;

    constructor(logCode: string, logDate: string, logDetails: string, UserRole: string, Field: string) {
        this.logCode = logCode;
        this.logDate = logDate;
        this.logDetails = logDetails;
        this.UserRole = UserRole;
        this.Field = Field;
    }
}