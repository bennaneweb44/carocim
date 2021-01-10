/**
 * @file
 * Plugin to insert Onomasticon Exclude elements.
 */

(function ($) {

  function getSelectedNonomasticon(editor) {
    var selection = editor.getSelection();
    var selectedElement = selection.getSelectedElement();
    if (selectedElement && selectedElement.is('nonomasticon')) {
      return selectedElement;
    }

    var range = selection.getRanges(true)[0];

    if (range) {
      range.shrink(CKEDITOR.SHRINK_TEXT);
      return editor.elementPath(range.getCommonAncestor()).contains('nonomasticon', 1);
    }
    return null;
  }

  // Register the plugin within the editor.
  CKEDITOR.plugins.add('nonomasticon', {
    // The plugin initialization logic goes inside this method.
    init: function (editor) {
      editor.addCommand('nonomasticon', {
        exec: function exec(editor) {

          var selected = getSelectedNonomasticon(editor);
          if (selected !== null) {
            var style = new CKEDITOR.style({
                                             element: 'nonomasticon',
                                             type: CKEDITOR.STYLE_INLINE,
                                             alwaysRemoveElement: 1
                                           });
            editor.removeStyle(style);
          }
          else {
            var selected_text = editor.getSelection().getSelectedText();
            var newElement = new CKEDITOR.dom.element("nonomasticon");
            newElement.setText(selected_text);
            editor.insertElement(newElement);
          }
        }
      });
      editor.addContentsCss(this.path + 'styles/nonomasticon.css');
      if (editor.ui.addButton) {
        editor.ui.addButton('nonomasticon', {
          label: Drupal.t('nonomasticon'),
          command: 'nonomasticon',
          icon: this.path + '/icons/nonomasticon.png'
        });
      }
    }
  });
})(jQuery);
