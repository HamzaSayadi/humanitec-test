export default class Activity {
    id: number;
    url: string;
    name: string;
    workflowlevel1: string;
    expected_start_date:  Date;
    expected_end_date:  Date;
    actual_start_date:  Date;
    actual_end_date:  Date;
    description: string;
    short_name: string;
    create_date:  Date;
    edit_date:  Date;
    status: string;
    progress: string;

  
    constructor(id: number, url: string, name: string, workflowlevel1: string, expected_start_date:  Date, expected_end_date:  Date, actual_start_date:  Date, actual_end_date:  Date, description: string, short_name: string, create_date:  Date, edit_date:  Date, status: string, progress: string) {
        this.id = id;
        this.url = url;
        this.name = name;
        this.workflowlevel1 = workflowlevel1;
        this.expected_start_date = expected_start_date;
        this.expected_end_date = expected_end_date;
        this.actual_start_date = actual_start_date;
        this.actual_end_date = actual_end_date;
        this.description = description;
        this.short_name = short_name;
        this.create_date = create_date;
        this.edit_date = edit_date;
        this.status = status;
        this.progress = progress;
    }
}
  