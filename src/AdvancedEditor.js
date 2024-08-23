// src/components/AdvancedEditor.js
import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from './component/build/ckeditor'; // Adjust path accordingly

const AdvancedEditor = () => {
  const [editorData, setEditorData] = useState('');

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
  };

  return (
    <div>
      <h2>Advanced CKEditor</h2>
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onChange={handleEditorChange}
        config={{ 
          toolbar: [
            'heading', '|',
            'bold', 'italic', 'link', '|',
            'bulletedList', 'numberedList', '|',
            'alignment', '|',
            'fontSize', 'fontColor', 'fontBackgroundColor', '|',
            'insertTable', 'imageUpload', '|',
            'undo', 'redo'
          ],
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
        }}
      />
      <div>
        <h3>Output:</h3>
        <div dangerouslySetInnerHTML={{ __html: editorData }} />
      </div>
    </div>
  );
};

export default AdvancedEditor;
