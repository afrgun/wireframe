
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe }   from './pipe';
import { SanitizeUrlPipe } from './safe-url'
import { ActivityComponent } from './component/activity/activity.component';
import { ChannelsComponent } from './component/channels/channels.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
	  TruncatePipe,
    SanitizeUrlPipe,
    ActivityComponent,
    ChannelsComponent
	],
	exports: [
	  TruncatePipe,
    SanitizeUrlPipe,
    ActivityComponent,
    ChannelsComponent
	],
	providers: [
	  { provide: LOCALE_ID, useValue: 'id' },
	]
})
export class SharedModule { }