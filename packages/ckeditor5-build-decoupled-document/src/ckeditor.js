/* eslint-disable indent */
/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import DecoupledEditorBase from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import ListStyle from '@ckeditor/ckeditor5-list/src/liststyle';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import ExportPdf from '@ckeditor/ckeditor5-export-pdf/src/exportpdf';
import ExportWord from '@ckeditor/ckeditor5-export-word/src/exportWord';
import Pagination from '@ckeditor/ckeditor5-pagination/src/pagination';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';

export default class DecoupledEditor extends DecoupledEditorBase {}
const customColorPalette = [
  {
    color: 'hsl(4, 90%, 58%)',
    label: 'Red'
  },
  {
    color: 'hsl(340, 82%, 52%)',
    label: 'Pink'
  },
  {
    color: 'hsl(291, 64%, 42%)',
    label: 'Purple'
  },
  {
    color: 'hsl(262, 52%, 47%)',
    label: 'Deep Purple'
  },
  {
    color: 'hsl(231, 48%, 48%)',
    label: 'Indigo'
  },
  {
    color: 'hsl(207, 90%, 54%)',
    label: 'Blue'
  },
  {
    color: 'hsl(207, 90%, 54%, 0)',
    label: 'transparent'
  }
  // ...
];
// Plugins to include in the build.
DecoupledEditor.builtinPlugins = [
  Essentials,
  Alignment,
  FontSize,
  FontFamily,
  FontColor,
  FontBackgroundColor,
  UploadAdapter,
  Autoformat,
  Bold,
  Italic,
  Strikethrough,
  Underline,
  BlockQuote,
  CKFinder,
  EasyImage,
  Heading,
  HorizontalLine,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Link,
  List,
  ListStyle,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  Table,
  TableToolbar,
  TextTransformation,
  ExportPdf,
  ExportWord,
  HtmlEmbed,
  PageBreak,
  Pagination,
  TableToolbar,
  TableProperties,
  TableCellProperties
];

// Editor configuration.
DecoupledEditor.defaultConfig = {
  toolbar: {
    items: [
      'exportPdf',
      '|',
      'heading',
      '|',
      'fontfamily',
      'fontsize',
      'fontColor',
      'fontBackgroundColor',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      '|',
      'alignment',
      '|',
      'numberedList',
      'bulletedList',
      '|',
      'indent',
      'outdent',
      '|',
      'link',
      'blockquote',
      'imageUpload',
      'insertTable',
      'tableCellBorderStyle',
      'mediaEmbed',
      '|',
      'undo',
      'redo',
      'previousPage',
      'nextPage',
      'pageNavigation',
      '|',
      'htmlEmbed',
      'pageBreak',

      'exportWord',
      '|',
      'HorizontalLine'
    ]
  },
  pagination: {
    // A4
    pageWidth: '21cm',
    pageHeight: '29.7cm',

    pageMargins: {
      top: '20mm',
      bottom: '20mm',
      right: '12mm',
      left: '12mm'
    }
  },
  link: {
    defaultProtocol: 'http://'
  },
  exportWord: {
    fileName: 'my-file.docx',
    converterOptions: {
      format: 'A4', // Default value, you don't need to specify it explicitly for A4.
      margin_top: '20mm',
      margin_bottom: '20mm',
      margin_right: '12mm',
      margin_left: '12mm'
    }
  },
  exportPdf: {
    stylesheets: ['./styles/fonts.css', 'EDITOR_STYLES', './styles/styles.css'],
    fileName: 'my-file.pdf',
    converterOptions: {
      format: 'Letter',
      margin_top: '5mm',
      margin_bottom: '19mm',
      margin_right: '19mm',
      margin_left: '19mm',
      page_orientation: 'portrait'
    }
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableProperties',
      'tableCellProperties'
    ],
    tableCellProperties: {
      borderColors: customColorPalette
    }
  },
  licenseKey: 'arJoDAHuz/o4XGurs13+WCpIY1aSjDDWScOA5sIN725wgYTE+Q==',
  cloudServices: {
    uploadUrl: 'https://76891.cke-cs.com/easyimage/upload/	',
    tokenUrl:
      'https://76891.cke-cs.com/token/dev/8900d614c213305ba3b94403772cfe568c7276409bd144b53d6b50740b11'
  },
  image: {
    styles: ['full', 'alignLeft', 'alignRight'],
    toolbar: [
      'imageStyle:alignLeft',
      'imageStyle:full',
      'imageStyle:alignRight',
      '|',
      'imageTextAlternative'
    ]
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'en'
};
