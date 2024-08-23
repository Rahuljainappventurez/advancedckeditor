import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

class ClassicEditor extends ClassicEditorBase {}

ClassicEditor.builtinPlugins = [
  Essentials,
  Alignment,
  Font,
  Bold,
  Italic,
  Link,
  List,
  Paragraph,
  Image,
  ImageToolbar,
  ImageStyle,
  ImageUpload,
  Table,
  TableToolbar
];

ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      'heading', '|',
      'bold', 'italic', 'link', '|',
      'bulletedList', 'numberedList', '|',
      'alignment', '|',
      'fontSize', 'fontColor', 'fontBackgroundColor', '|',
      'insertTable', 'imageUpload', '|',
      'undo', 'redo'
    ]
  },
  alignment: {
    options: ['left', 'center', 'right', 'justify'],
  },
  fontSize: {
    options: [ 'tiny', 'small', 'default', 'big', 'huge' ]
  },
  fontColor: {
    colors: [
      { color: 'hsl(0, 0%, 0%)', label: 'Black' },
      { color: 'hsl(0, 0%, 30%)', label: 'Dim grey' },
      { color: 'hsl(0, 0%, 60%)', label: 'Silver' },
      { color: 'hsl(0, 0%, 90%)', label: 'White smoke' }
    ]
  },
  fontBackgroundColor: {
    colors: [
      { color: 'hsl(0, 0%, 100%)', label: 'White' },
      { color: 'hsl(0, 0%, 90%)', label: 'Light grey' },
      { color: 'hsl(0, 0%, 70%)', label: 'Medium grey' },
      { color: 'hsl(0, 0%, 50%)', label: 'Dark grey' }
    ]
  },
  image: {
    toolbar: [
      'imageTextAlternative', 'imageStyle:full', 'imageStyle:side'
    ]
  },
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
  },
  language: 'en',
};

export default ClassicEditor;
