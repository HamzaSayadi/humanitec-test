import Activity from "./Activity";

export default class Program {
    url: string;
    id: number;
    status: string;
    name: string;
    description: string;
    start_date: Date;
    end_date: Date;
    create_date: Date;
    edit_date: Date;
    organization: string;
    activties: Activity[];

    constructor(url: string, id: number, status: string, name: string, description: string, start_date: Date, end_date: Date, create_date: Date, edit_date: Date, organization: string, activities: Activity[]) {
        this.url = url;
        this.id = id;
        this.status = status;
        this.name = name;
        this.description = description;
        this.start_date = start_date;
        this.end_date = end_date;
        this.create_date = create_date;
        this.edit_date = edit_date;
        this.organization = organization;
        this.activties = activities;
    }
}