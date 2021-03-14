import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material-module/material-module.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ApiInterceptor } from '../core/interceptors/api.interceptor';
import { TokenInterceptor } from '../core/interceptors/token.interceptor';
import { TimeConversionPipe } from './pipes/time-conversion.pipe';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { MonacoEditorModule, MONACO_PATH } from '@materia-ui/ngx-monaco-editor';
import { QuestionDescriptionComponent } from './components/question-description/question-description.component';
import { NotificationInterceptor } from '../core/interceptors/notification.interceptor';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { RunScriptsDirective } from './directives/run-scripts.directive';

@NgModule({
  declarations: [
    TimeConversionPipe,
    CodeEditorComponent,
    QuestionDescriptionComponent,
    SafeHtmlPipe,
    RunScriptsDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MonacoEditorModule,
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TimeConversionPipe,
    CodeEditorComponent,
    MonacoEditorModule,
    QuestionDescriptionComponent,
    SafeHtmlPipe,
    RunScriptsDirective,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiInterceptor,
          multi: true,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: NotificationInterceptor,
          multi: true,
        },
        {
          provide: MONACO_PATH,
          useValue: 'https://unpkg.com/monaco-editor@0.18.1/min/vs',
        },
      ],
    };
  }
}
