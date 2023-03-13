// Flagのリストを二次元配列化する
//  配列構造 = [ ModuleID、Ser、ContentID 、Flag、Title、Mission-Hint、Explanation-filename ]

var flag_array = [
  ["Module-01","01","README","","","Module-01 攻撃の実行痕跡調査",""],
  ["Module-01","02","M01L01","","","Lecture-1 PowerShellを利用した攻撃方法と痕跡",""],
  ["Module-01","03","M01Q01","Invoke-Expression","false","Quiz-1_1",""],
  ["Module-01","04","M01Q02","-en","false","Quiz-1_2",""],
  ["Module-01","05","M01Q03","Windows_PowerShell.evtx","false","Quiz-1_3",""],
  ["Module-01","06","M01Q04","4100","false","Quiz-1_4",""],
  ["Module-01","07","M01T01","2ef9a39.exe","false","Tutorial-1 PowerShellを利用した攻撃の痕跡調査","","M01T01E"],
  ["Module-01","08","M01L02","","","Lecture-2 不正な実行ファイルの調査",""],
  ["Module-01","09","M01Q05","AppCompatCache","false","Quiz-2_1",""],
  ["Module-01","10","M01Q06","Amcache.hve","false","Quiz-2_2",""],
  ["Module-01","11","M01Q07","SHA1","false","Quiz-2_3",""],
  ["Module-01","12","M01Q08","Consumer","false","Quiz-2_4",""],
  ["Module-01","13","M01T02","ProcessHacker","false","Tutorial-2 WMI／Shimcache／Amcacheの調査","","M01T02E"],
  ["Module-01","14","M01M01","sample.jpg","false","Mission-1 マルウェア感染ルートの調査","PowerShellの実行履歴を調査し、不審なスクリプトの難読化を解除して下さい。Shimcacheも併せて調査しましょう。","M01M01E"],
  ["Module-01","15","M01M02","5da8c98136d98dfec4716edd79c7145f","false","Mission-2 マルウェア感染ルートの調査","不審な実行ファイルのSHA-1ハッシュ値が記録されているアーティファクトを調査し、インターネットのマルウェア関連情報サイトを検索してMD5ハッシュ値を取得して下さい。","M01M02E"],
  ["Module-01","16","Appendix","","","Appendix",""],
  ["Module-02","01","README","","","Module-02 アクティビティ調査",""],
  ["Module-02","02","M02L01","","","Lecture-1 ユーザー・アクティビティの調査",""],
  ["Module-02","03","M02Q01","キャッシュリスト","false","Quiz-1_1",""],
  ["Module-02","04","M02Q02","History","false","Quiz-1_2",""],
  ["Module-02","05","M02Q03","URL Decode","false","Quiz-1_3",""],
  ["Module-02","06","M02Q04","AppData\Roaming\Microsoft\Windows","false","Quiz-1_4",""],
  ["Module-02","07","M02T01","請求のお知らせ.xlsx","false","Tutorial-1 Webアクセス履歴の調査方法","","M02T01E"],
  ["Module-02","08","M02L02","","","Lecture-2 ネットワーク・アクティビティの調査",""],
  ["Module-02","09","M02Q05","sru\SRUDB.dat","false","Quiz-2_1",""],
  ["Module-02","10","M02Q06","一定時間","false","Quiz-2_2",""],
  ["Module-02","11","M02Q07","App Name","false","Quiz-2_3",""],
  ["Module-02","12","M02Q08","Bytes Sent","false","Quiz-2_4",""],
  ["Module-02","13","M02T02","10530098","false","Tutorial-2 SRUMによるプロセス別通信の調査方法","","M02T02E"],
  ["Module-02","14","M02M01","賞与.zip","false","Mission-1 マルウェア感染原因の調査","設問1は、 Webヒストリーから「ボーナス」の検索履歴を調査し。その前後にアクセスした誘導サイトを特定して下さい。ダウンロードした文書ファイル名は、キャッシュリストを調査して下さい。設問2は、 SRUMのネットワーク・アクティビティから、Maldocに起因すると思われる通信を調査して下さい。","M02M02E"],
  ["Module-02","15","M02M02","2022/03/16 19:13","false","Mission-2 マルウェア感染原因の調査","","M02M02E"],
  ["Module-02","16","Appendix","","","Appendix",""]
];


