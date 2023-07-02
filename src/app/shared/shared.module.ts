import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TextEditorComponent],
  imports: [CommonModule, AngularEditorModule, FormsModule],
  exports: [TextEditorComponent],
})
export class SharedModule {}
