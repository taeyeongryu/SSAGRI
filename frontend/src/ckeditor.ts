// ckeditor.ts

import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
// import {
//   Image,
//   ImageToolbar,
//   ImageCaption,
//   ImageStyle,
//   ImageResize,
//   ImageUpload
// } from '@ckeditor/ckeditor5-image';
// import { LinkImage } from '@ckeditor/ckeditor5-link';
// import { Table } from '@ckeditor/ckeditor5-table';

export default class ClassicEditor extends ClassicEditorBase {}

ClassicEditor.builtinPlugins = [
  Essentials,
  Autoformat,
  Bold,
  Italic,
  BlockQuote,
  Heading,
  Link,
  List,
  Paragraph
  // Table,
  // Image,
  // ImageToolbar,
  // ImageCaption,
  // ImageStyle,
  // ImageResize,
  // ImageUpload,
  // LinkImage
];

ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      'undo',
      'redo',
      '|',
      'heading',
      '|',
      'bold',
      'italic',
      // '|',
      // 'bulletedList',
      // 'numberedList',
      // 'blockQuote',
      '|'
      // 'link',
      // 'insertTable',
      // 'imageUpload'
    ]
  }
};

// table: {
//   contentToolbar: [
//     'tableColumn',
//     'tableRow',
//     'mergeTableCells',
//     'tableProperties',
//     'tableCellProperties'
//   ]
// },

// image: {
//   resizeUnit: 'px',
//   toolbar: [
//     'imageTextAlternative',
//     'toggleImageCaption',
//     '|',
//     'imageStyle:block',
//     'imageStyle:side',
//     '|',
//     'linkImage'
//   ]
// },

/*
    plugins: [
      Image,
      ImageToolbar,
      ImageCaption,
      ImageStyle,
      ImageResize,
      LinkImage
    ],
    // 여기에 config 입력
    toolbar: {
      items: [
        'undo',
        'redo',
        '|',
        'heading',
    '|',
    'bold',
    'italic',
    'bulletedList',
    'blockQuote',
    '|',
    'insertTable',
    'tableColumn',
    'tableRow',
    'mergeTableCells',
    '|',
    'toggleImageCaption',
    'imageTextAlternative',
    '|',
    'imageStyle:full',
    'imageStyle:side',
    'imageStyle:block',
    '|',
    'insertImage',
    'linkImage'
  ]
},
*/
