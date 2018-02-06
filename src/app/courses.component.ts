import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        {{ text | summary:10 }}
    `
})
export class CoursesComponent {
    text = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat pharetra nibh, et facilisis nisl rhoncus vel. Morbi vel sapien pulvinar, 
    eleifend neque tincidunt, vestibulum sem. Aliquam malesuada mauris eu gravida eleifend. Morbi tristique, libero at pharetra hendrerit, turpis 
    nisi tristique tellus, ut bibendum sem nibh ac dolor. Suspendisse iaculis sapien velit, sed porta turpis facilisis ut. Sed vel tincidunt erat. 
    Nam scelerisque dui eu faucibus porttitor. Sed quis porta dui.
    `
}