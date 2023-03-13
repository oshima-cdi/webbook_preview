// スコア表示モジュール
//  ※ 「flag.js」を、外部スクリプトとしてこのスクリプトの前に、HTMLボディで指定しておくこと

// リロードボタンの表示
const Q_form = document.createElement('form');
Q_form.autocomplete="off";
document.body.appendChild(Q_form);
const Q_button = document.createElement('input');
Q_button.type = "button";
Q_button.id = "reload";
Q_button.value = "Reload";
Q_button.onclick = () => {
  window.location.reload();
}
Q_form.appendChild(Q_button);


let all_sum = 0;
let score_sum = 0;
let  score = "";

// 表示用スコアテーブル設定
var elem = document.getElementById('table');
if (elem !== null){
  // すでに表示中のスコアテーブルが存在する場合はクリア
  elem.remove();
}
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);

// テーブルヘッダ作成
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "学習コンテンツ";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "獲得ポイント<br><a href='#all_sum' id='section_jump' >⇒合計ポイントへ</a>";
row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
thead.appendChild(row_1);

console.log("--- スコア表示 ---");  // for debug

// flag.js内の配列（flag_array）を読み込み、ローカルストレージから各Flagのスコアを参照する
flag_array.forEach( function( value ) {
  const ModuleID = value[0];
  const ContentID = value[2];
  const Title = value[5];
  const ContentType = ContentID.substr(3,1);

  // 全問正解時のポイントをサマリー
  switch(ContentType) {
    case "Q":  // Quiz = 1ポイント
      all_sum = all_sum + 1;
      break;
    case "T":  // Tutorial = 2ポイント
      all_sum = all_sum + 2;
      break;
    case "M":  // Mission = 3ポイント
      all_sum = all_sum + 3;
      break;
  }
  console.log("ポイント累計（all_sum）", all_sum);  // for debug
  
  // ポイント獲得済みのコンテンツかチェック（ローカルストレージより）
  if (!localStorage.getItem( ContentID )) {  // 該当するスコアなし（未正解）の場合
      if (ContentType == "Q" || ContentType == "T" || ContentType == "M") {
          score = 0;
      } else {
          score = "---";
      }
    } else {                                // 正解済みの場合、ポイントを表示
      score = Number(localStorage.getItem( ContentID ));
      score_sum = score_sum + score;  // 獲得したポイントをサマリー
  }
  // テーブルにコンテンツ名(Title)と獲得ポイント(score)を表示
  console.log(Title, score);  // for debug
  let row = document.createElement('tr');
  let row_title = document.createElement('td');
  row_title.innerHTML = Title;
  if (ContentID == "README") {
      row_title.id = "td_ModuleTitle";  // Module名のStyleをidで指定
  } else {
     if (ContentType == "Q") {
          row_title.id = "td_ContentsTitle_Q";  // Quiz用のStyleをidで指定
     } else {
          row_title.id = "td_ContentsTitle";    // Quiz以外のコンテンツのStyleをidで指定
     }
  }
  let row_score = document.createElement('td');
  row_score.innerHTML = score;
  row_score.id = "td_Score";  // 獲得ポイントのStyleをidで指定
  row.appendChild(row_title);
  row.appendChild(row_score);
  tbody.appendChild(row);
});
// 合計ポイント表示
console.log("獲得ポイント計", ", score=", score_sum , " / " , all_sum);  // for debug
let row = document.createElement('tr');
let row_title = document.createElement('td');
let sum_title = "<section id='all_sum'>総獲得ポイント（" + all_sum +"点満点）";
row_title.innerHTML = sum_title;
row_title.id = "td_ModuleTitle"; 
let row_score = document.createElement('td');
row_score.innerHTML = score_sum;
row_score.id = "td_Score";
row.appendChild(row_title);
row.appendChild(row_score);
tbody.appendChild(row);
