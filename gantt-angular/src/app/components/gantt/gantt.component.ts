import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { forkJoin } from 'rxjs';
import 'dhtmlx-gantt';

import { TaskService } from "../../services/task/task.service"
import { LinkService } from "../../services/link/link.service";
import { Link } from 'src/app/models/link';
import { Task } from 'src/app/models/task';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.scss'],
  providers: [TaskService, LinkService],
})

export class GanttComponent implements OnInit {
  constructor(private taskService: TaskService, private linkService: LinkService) { }
  tasks: void | Task[]
  links: void | Link[]
  @ViewChild("gantt_here", { static: true }) ganttContainer: ElementRef;

  ngOnInit() {

    gantt.config.xml_date = "%Y-%m-%d %H:%i";
    gantt.init(this.ganttContainer.nativeElement);

    forkJoin([
      this.taskService.get(),
      this.linkService.get()
    ]).subscribe((res) => {

      this.tasks = res[0]
      this.links = res[1]

      const dp = gantt.createDataProcessor({
        task: {
          update: (data: Task) => this.taskService.update(data),
          create: (data: Task) => this.taskService.insert(data),
          delete: (id: number) => this.taskService.remove(id)
        },
        link: {
          update: (data: Link) => this.linkService.update(data),
          create: (data: Link) => this.linkService.insert(data),
          delete: (id:number) => this.linkService.remove(id)
        }
      });

      gantt.parse({ data: this.tasks, links: this.links });

    })
  }
}