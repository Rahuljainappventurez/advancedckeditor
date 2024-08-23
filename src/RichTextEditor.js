import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline'; // Use a build that includes the plugin

const RichTextEditor = () => {
  const [editorData, setEditorData] = useState('');

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
  };

  return (
    <div className="editor">
      <h2>CKEditor 5 with React</h2>
      <CKEditor
        editor={InlineEditor}
        data={editorData}
        onChange={handleEditorChange}
        config={{ 
          toolbar: [
            'heading', '|',
            'bold', 'italic', 'link', '|',
            'bulletedList', 'numberedList', '|',
            'alignment', '|',
            'insertTable', 'imageUpload', '|',
            'undo', 'redo'
          ],
          alignment: {
            options: ['left', 'center', 'right', 'justify'],
          },
        }}
      />
      <div className="output">
        <h3>Output:</h3>
        <div dangerouslySetInnerHTML={{ __html: editorData }} />
      </div>
    </div>
  );
};

export default RichTextEditor;
