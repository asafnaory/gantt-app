import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Link } from "../../models/link";

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private linkUrl = "http://127.0.0.1:3000/links";

  constructor(private http: HttpClient) { }

  get(): Promise<void | Link[]> {
    return this.http.get<Link[]>(this.linkUrl).toPromise().catch((err) => console.log(err));
  }
  update(data: Link): Promise<void | Link> {
    return this.http.put<Link>(this.linkUrl, data).toPromise().catch((err) => console.log(err));
  }
  insert(data: Link): Promise<void | Link> {
    return this.http.post<Link>(this.linkUrl, data).toPromise().catch((err) => console.log(err));

  }
  remove(id: number) : Promise<void | Link>{
   return this.http.delete<Link>(`${this.linkUrl}/${id}`).toPromise().catch((err) => console.log(err));
  }

}