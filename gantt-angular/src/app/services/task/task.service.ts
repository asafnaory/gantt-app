import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Task } from "../../models/task";

@Injectable({
    providedIn: 'root',
})
export class TaskService {

    private taskUrl = "http://127.0.0.1:3000/tasks";
    constructor(private http: HttpClient) { }

    get(): Promise<void | Task[]>{
      return this.http.get<Task[]>(this.taskUrl).toPromise().catch((err)=> console.log(err));
    }
    update(data: Task): Promise<void | Task>{
        console.log(data);
        return this.http.put<Task>(this.taskUrl,data).toPromise().catch((err)=> console.log(err));
      }
      insert(data: Task):Promise<void | Task>{
        console.log(data);
        return this.http.post<Task>(this.taskUrl,data).toPromise().catch((err)=> console.log(err));
    
      }
      remove(id: number ): Promise<void | Task> {
        return this.http.delete<Task>(`${this.taskUrl}/${id}`).toPromise().catch((err)=> console.log(err));
      }

}