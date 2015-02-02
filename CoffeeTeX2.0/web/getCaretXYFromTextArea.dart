library getCaretXYFromTextArea;
import 'dart:html';

var properties = [
    'direction',
    'box-sizing',
    'width',
    'height',
    'overflowX',
    'overflowY',
    'border-top-width',
    'border-right-width',
    'border-bottom-width',
    'border-left-width',
    'padding-top',
    'padding-right',
    'padding-bottom',
    'padding-left',
    'font-style',
    'font-variant',
    'font-weight',
    'font-stretch',
    'font-size',
    'font-size-adjust',
    'line-height',
    'font-family',
    'text-align',
    'text-transform',
    'text-indent',
    'text-decoration',
    'letter-spacing',
    'word-spacing'
];



Map getCaretXYFromTextArea(element,position){
  DivElement div = new DivElement();
  div.id = 'input-textarea-caret-position-mirror-div';
  document.body.append(div);
  var style = div.style;
  var computed = element.getComputedStyle();
  style.whiteSpace = 'pre-wrap';
  style.wordWrap = 'break-word';
  style.position = 'absolute';
  style.border = '1px solid black';
  //style.visibility = 'hidden';
  style.overflow = 'hidden';
  for (var prop in properties){
    div.style.setProperty(prop, computed.getPropertyValue(prop));
  }
  div.text = element.value.substring(0, position);
  var span = document.createElement('span');
  if (element.value.substring(position) == ""){
    span.text = '.';
  }
  else {
    span.text = element.value.substring(position);
  }
  div.append(span);
  Map caret_XY = {
      "top" :  element.offsetTop + span.offsetTop + int.parse(computed.getPropertyValue('border-top-width')[0]),
      "left" : element.offsetLeft + span.offsetLeft  + int.parse(computed.getPropertyValue('border-left-width')[0])
  };
  div.remove();
  return caret_XY;
}