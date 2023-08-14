class Department {
  private employees: string[] = [];

  constructor(
    private readonly id: number,
    private name: string
  ) {}

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

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
  admins: string[];
  constructor(id: number, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(
    id: number,
    private reports: string[]
  ) {
    super(id, "IT");
  }
  addReport(text: string) {
    this.reports.push(text);
  }
  getReports() {
    console.log(this.reports);
  }
}

const accDepartment = new AccountingDepartment(123, []);
accDepartment.addReport("Something went wrong....");
accDepartment.getReports();
const itDepartment = new ITDepartment(2, ["Bob"]);

const accounting = new Department(1, "Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.describe();
accounting.printEmployeeInformation();
