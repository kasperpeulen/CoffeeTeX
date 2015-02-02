// Copyright (c) 2015, Kasper Peulen. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

import 'dart:html';
import 'getCaretXYFromTextArea.dart';
import 'replaceLetter.dart';

TextAreaElement textarea = querySelector("#ct_editor");
InputElement input = querySelector("#modkey");

num caret_pos;
String last_input;
List newChars;
num selectedCharIndex;

Map caret_XY;
DivElement popup = new DivElement();
UListElement char_list = new UListElement();

num modKey = 93;

void main() {
  popup.id = "popup";
  popup.style.display = "none";
  char_list.id = "char_list";
  document.body.append(popup);
  textarea.onKeyDown.listen(onKeyDown);
  input.onKeyDown.listen(inputKeyDown);
}

void inputKeyDown (KeyboardEvent e){
  KeyEvent keyEvent = new KeyEvent.wrap(e);
  modKey = keyEvent.keyCode;
  e.preventDefault();
}

void onKeyDown(KeyboardEvent e) {
  KeyEvent keyEvent = new KeyEvent.wrap(e);
  caret_pos = textarea.selectionEnd;
  if (caret_pos == 0) return;



  //if RCMD key, either show popup
  // or select the next char in the popup
  if (keyEvent.keyCode == modKey ) {
    if (popup.style.display == "none") {
      textarea.selectionStart += -1;
      show_popup();
    }
    else
      selectNextChar();
  }
  else if ( keyEvent.keyCode == KeyCode.ALT){
    textarea.selectionStart += -1;
    hidePopup();
    show_popup();
  }
  else if (popup.style.display != "none") {

    if (keyEvent.keyCode == KeyCode.ENTER) keyEvent.preventDefault();
    hidePopup();
    replaceChar();

  }
}


void show_popup() {
  last_input = textarea.value.substring(textarea.selectionStart,textarea.selectionEnd);
  newChars = replaceLetter[last_input];
  if (newChars == null){return;}

  caret_XY = getCaretXYFromTextArea(textarea,textarea.selectionStart);
  popup ..style.display = "block"
        ..style.top = (25+caret_XY["top"]).toString() +"px"
        ..style.left = (-10+caret_XY["left"]).toString() +"px";

  for (var char in newChars){
    if (!(char is String)) char = char[0];
    LIElement li = new LIElement();
    li.text = char;
    char_list.append(li);
  }
  popup.append(char_list);
  selectCharIndex(0);

  if (newChars.length == 1){
    hidePopup();
    replaceChar();
  }

}

hidePopup(){
  popup.style.display = "none";
  popup.innerHtml = "";
  char_list.innerHtml = "";
}

selectNextChar(){
  if (selectedCharIndex == querySelectorAll("#popup li").length -1 ){
    selectCharIndex(0);
  }
  else{
    selectCharIndex(selectedCharIndex+1);
  }
}

selectCharIndex(i) {
  querySelectorAll('.selected').classes.remove('selected');
  querySelectorAll("#popup li")[i].classes.add("selected");
  selectedCharIndex = i;
}

replaceChar() {
  //get newChar and newCaretPos
  var newChar, dCaretPos;
  if (newChars[selectedCharIndex] is String) {
    newChar = newChars[selectedCharIndex];
    dCaretPos = 0;
  }
  else {
    newChar = newChars[selectedCharIndex][0];
    dCaretPos = newChars[selectedCharIndex][1];
  }
  var newCaretPos = caret_pos + dCaretPos + newChar.length - 1;

  var newText = textarea.value.split("");
  for (var i=2 ; i<=last_input.length ; i++){
    newText[caret_pos-i] = "";
  }
  newText[caret_pos-1] = newChar;
  textarea.value = newText.join("");
  textarea.setSelectionRange(newCaretPos,newCaretPos);
}