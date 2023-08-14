abstract class Department {
  static fiscalYear = 2020;
  protected employees: Array<string> = [];

  constructor(
    protected readonly id: number,
    protected name: string
  ) {
    console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // validation etc
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: Array<string>;
  constructor(id: number, admins: Array<string>) {
    super(id, "IT");
    this.admins = admins;
  }
  describe(): void {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get latestReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }
  set latestReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  private constructor(
    id: number,
    private reports: Array<string>
  ) {
    super(id, "IT");
    this.lastReport = reports[0];
  }
  describe(): void {
    console.log("Accounting department - ID: " + this.id);
  }

  addEmployee(name: string): void {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string): void {
    this.reports.push(text);
    this.lastReport = text;
  }
  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment(12, []);
    return this.instance;
  }

  getReports(): void {
    console.log(this.reports);
  }
}

const employee = Department.createEmployee("Max");
console.log(employee);
console.log(employee, Department.fiscalYear);
const accounting = AccountingDepartment.getInstance();

// accDepartment.latestReport = "s";
// accDepartment.addReport("Something went wrong....");
// console.log(accDepartment.latestReport);

// accDepartment.getReports();
const itDepartment = new ITDepartment(2, ["Bob"]);
